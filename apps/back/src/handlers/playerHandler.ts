import { Server, Socket } from "socket.io";
import { MazeCell, Player } from "types";
import { boards } from "@utils/data";
import { logger } from "@utils/logger";
import { movePlayer } from "@game/movePlayer";
import { moveTeachers } from "@game/moveTeacher";

export function playerHandler(io: Server, socket: Socket) {
  const movePlayerHandler = (selectedCell: MazeCell, player: Player) => {
    const rooms = Array.from(socket.rooms.values())
    if (rooms.length > 2) {
      logger.error('More than 2 rooms')
    }
    const currentRoom = rooms[1]
    let currentBoard = boards.get(currentRoom)!.board

    // Move player
    movePlayer(currentBoard, player, selectedCell)

    // Move teachers
    moveTeachers(currentBoard)
    

    io.sockets.in(currentRoom).emit('map:update', boards.get(currentRoom))
  }

  socket.on('player:move', movePlayerHandler)
}
