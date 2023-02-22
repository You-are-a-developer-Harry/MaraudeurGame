import { Server, Socket } from 'socket.io'
import { MazeCell, Player } from '../types'
import { boards, stateMachines, userMoved } from '../utils/data'
import { getCurrentRoom } from '../utils/socketHelpers'
import { logger } from '../utils/logger'
import { movePlayer } from '../game/movePlayer'
import { moveTeachers } from '../game/moveTeacher'
import { getObject } from '../game/getObject'
import { updatePlayers } from '../game/updatePlayers'
import { killByTeacher } from '../game/killByTeacher'
import { winGame } from '../game/winGame'

export function playerHandler(io: Server, socket: Socket) {
  const movePlayerHandler = (selectedCell: MazeCell, player: Player) => {
    const currentRoom = getCurrentRoom(socket)
    const gameData = boards.get(currentRoom)
    if (!gameData) return
    const currentBoard = gameData!.board
    const currentMoves = userMoved.get(currentRoom)!

    // Move player
    movePlayer(currentBoard, player, selectedCell)

    // Verify object
    getObject(currentBoard, player)

    // Move teachers
    moveTeachers(currentBoard)

    // Kill players
    killByTeacher(currentBoard)

    if (currentMoves.indexOf(player.id) === -1) {
      currentMoves.push(player.id)
    }

    const usersInRoom = boards
      .get(currentRoom)!
      .players.map((player) => player.id)

    // Update players
    updatePlayers(gameData)

    if (
      usersInRoom.filter((item) => !currentMoves.includes(item)).length === 0
    ) {
      logger.debug('All players moved')
      stateMachines.get(currentRoom)!.send('END_PHASE')
      userMoved.set(currentRoom, [])
      io.sockets.in(currentRoom).emit('map:update', boards.get(currentRoom))

      // Verify if an user wins the game
      const victoryPlayer = winGame(currentBoard)

      if (victoryPlayer) {
        // dispatch victory event
        io.sockets.in(currentRoom).emit('room:victory', victoryPlayer)
      }
    }
  }

  socket.on('player:move', movePlayerHandler)
}
