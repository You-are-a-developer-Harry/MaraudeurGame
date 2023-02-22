import { Server, Socket } from "socket.io";
import { generateBoard } from "@game/generateBoard";
import { initPlayer } from "@game/initPlayer";
import { logger } from "@utils/logger";
import { boards } from "@utils/data";
import { RoomData, User } from "types";

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
      }
      logger.debug('Generate new board for room : %s', room)
      roomData.board = generateBoard()
      boards.set(room, roomData)
    }

    socket.join(room)
    initPlayer(boards.get(room)!, user)
    io.sockets.in(room).emit('map:update', boards.get(room))
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

  socket.on('room:join', joinRoom)

  socket.on('disconnect', onDisconnect)
}
