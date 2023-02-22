import { Board, MazeCell, Player } from "../types"

export function movePlayer(board: Board, player: Player, destinationCell: MazeCell) {
  board.forEach((row) => {
    row.forEach((cell) => {
      if (cell.players) {
        cell.players = cell.players.filter(
          (_player) => player.id !== _player.id
        )
      }
    })
  })
  player.x = destinationCell.x
  player.y = destinationCell.y
  board[destinationCell.y][destinationCell.x].players = [
    { ...player, x: destinationCell.x, y: destinationCell.y },
  ]
  return board
}