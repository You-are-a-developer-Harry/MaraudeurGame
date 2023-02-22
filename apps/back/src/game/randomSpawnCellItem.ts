import { MazeCell, Player, SecretObject } from "../types";
import { generateRandom } from "../utils/generateRandom";

export function randomSpawnCellItem(
  board: MazeCell[][],
  type: 'object' | 'teachers',
  item: Omit<SecretObject | Player, 'x' | 'y'>
): MazeCell[][] {
  const middleX = Math.round(board[0].length / 2)
  const middleY = Math.round(board.length / 2)
  const rangeX = [middleX - 3, middleX + 3]
  const rangeY = [middleY - 3, middleY + 3]
  const x = generateRandom(...rangeX)
  const y = generateRandom(...rangeY)
  if (board[y][x][type]) return randomSpawnCellItem(board, type, item)
  board[y][x][type] =
    type === 'object' ? { ...item, x, y } : ([{ ...item, x, y }] as any)
  return board
}
