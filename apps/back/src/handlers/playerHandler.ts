import { Server, Socket } from "socket.io";
import { MazeCell, Player } from "types";
import { boards, stateMachines, userMoved } from "../utils/data";
import { getCurrentRoom } from "../utils/socketHelpers";
import { logger } from "../utils/logger";
import { movePlayer } from "../game/movePlayer";
import { moveTeachers } from "../game/moveTeacher";

export function playerHandler(io: Server, socket: Socket) {
  const movePlayerHandler = (selectedCell: MazeCell, player: Player) => {
    const currentRoom = getCurrentRoom(socket)
    const currentBoard = boards.get(currentRoom)!.board
    const currentMoves = userMoved.get(currentRoom)!

    // Move player
    movePlayer(currentBoard, player, selectedCell)

    // Move teachers
    moveTeachers(currentBoard)

    if(currentMoves.indexOf(player.id) === -1){
      console.log(currentMoves)
      currentMoves.push(player.id)
      console.log(currentMoves)
    }

    const usersInRoom = boards.get(currentRoom)!.players.map(player => player.id)
    console.log(currentMoves, usersInRoom)

    if (usersInRoom.filter((item) => !currentMoves.includes(item)).length === 0){
      logger.debug('All players moved')
      stateMachines.get(currentRoom)!.send('END_PHASE')
      userMoved.set(currentRoom, [])
      io.sockets.in(currentRoom).emit('map:update', boards.get(currentRoom))
    }
  }

  socket.on('player:move', movePlayerHandler)
}
