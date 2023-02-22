import { Server, Socket } from "socket.io";
import { MazeCell, Player } from "types";
import { boards } from "@utils/data";
import { logger } from "@utils/logger";

export function playerHandler(io: Server, socket: Socket) {
  const movePlayer = (selectedCell: MazeCell, player: Player) => {
    const rooms = Array.from(socket.rooms.values())
    if (rooms.length > 2) {
      logger.error('More than 2 rooms')
    }
    const currentRoom = rooms[1]
    const currentBoard = boards.get(currentRoom)!.board

    // Move player
    currentBoard?.forEach((row) => {
      row.forEach((cell) => {
        if (cell.players) {
          cell.players = cell.players.filter(
            (_player) => player.id !== _player.id
          )
        }
      })
    })
    player.x = selectedCell.x
    player.y = selectedCell.y
    currentBoard[selectedCell.y][selectedCell.x].players = [
      { ...player, x: selectedCell.x, y: selectedCell.y },
    ]

    io.sockets.in(currentRoom).emit('map:update', boards.get(currentRoom))
  }

  socket.on('player:move', movePlayer)
}
