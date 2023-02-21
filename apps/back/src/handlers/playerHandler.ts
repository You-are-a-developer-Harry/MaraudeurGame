import { Server, Socket } from "socket.io";
import { MazeCell } from "types";
import { boards } from "../utils/data";
import { logger } from "../utils/logger";

const BASE_PLAYER = {
  color: "black",
  id: 1,
  x: 0,
  y: 0
}

export function playerHandler(io: Server, socket: Socket) {
  const movePlayer = (selectedCell: MazeCell) => {
    const rooms = Array.from(socket.rooms.values())
    if (rooms.length > 2) {
      logger.error('More than 2 rooms')
    }
    const currentRoom = rooms[1]
    const currentBoard = boards.get(currentRoom)!

    currentBoard?.forEach(row => {
      row.forEach(cell => {
        cell.player = undefined
      })
    })

    currentBoard[selectedCell.y][selectedCell.x].player = {...BASE_PLAYER, x: selectedCell.x, y: selectedCell.y}
    io.sockets.in(currentRoom).emit("map:update", boards.get(currentRoom));
  };

  socket.on("player:move", movePlayer);
}
