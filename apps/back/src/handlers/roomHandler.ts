import { Server, Socket } from "socket.io";
import { generateBoard } from "../game/generateBoard";
import { initPlayer } from "../game/initPlayer";
import { logger } from "../utils/logger"
import { boards, stateMachines, userCastedSpell, userMoved } from "../utils/data";
import { Player, RoomData, User } from "../types";
import { createMachine, interpret } from "xstate";
import { machineSettings } from "../utils/gameState";
import { getCurrentRoom } from "../utils/socketHelpers";
import { getGameStateValue } from "../utils/getGameStateValue";
import { startGame } from "../utils/statGame";
import { victoryGame } from "../utils/victoryGame";

export function roomHandler(io: Server, socket: Socket) {
  let roomName = ''
  let userData: User | null = null
  const joinRoom = (room: string, user: User) => {
    roomName = room
    userData = user
    logger.debug('A user joined the room : %s', room)
    let roomData: RoomData | undefined = boards.get(room)

    if (!roomData) {
      roomData = {
        board: [],
        players: [],
        castedSpellsByUsers: [],
      }
      logger.debug('Generate new board for room : %s', room)
      roomData.board = generateBoard()
      boards.set(room, roomData)
      const gameState = createMachine(machineSettings)
      const machine = interpret(gameState).onTransition((state) => {
        const gameStatus = getGameStateValue(state.value)
        logger.info('[%s] : %s', room, gameStatus)
        io.sockets.in(room).emit('state:update', state.value)
      })
      machine.start()
      stateMachines.set(room, machine)
      userMoved.set(room, [])
      userCastedSpell.set(room, [])
    }

    socket.join(room)
    initPlayer(boards.get(room)!, user)
    io.sockets.in(room).emit('map:update', boards.get(room))
    const currentRoom = getCurrentRoom(socket)
    if (boards.get(currentRoom)!.players.length === 4){
      startGame(socket)
    }
  }

  const onDisconnect = () => {
    logger.debug('An user left the game')
    const room = boards.get(roomName)!

    if (!room || !room.players?.length) return
    room.players = room.players.filter((player) => player.id !== userData?.id)
    room.board = room.board.map((col) =>
      col.map((cell) => {
        if (cell.players?.length) {
          cell.players = cell.players.filter(
            (player) => player.id !== userData?.id
          )
        }
        return cell
      })
    )

    if(!room.players.length) boards.delete(roomName)

    io.sockets.in(roomName).emit('map:update', room)
  }

  const victory = (victoryPlayer: Player) => victoryGame(victoryPlayer, socket)

  socket.on('room:join', joinRoom)
  socket.on('room:victory', victory)

  socket.on('disconnect', onDisconnect)
}
