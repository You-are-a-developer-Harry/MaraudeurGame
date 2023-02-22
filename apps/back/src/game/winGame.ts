import { Board, Player } from '../types'
import { POSITION_BY_HOUSE } from './initPlayer'

export function winGame(board: Board) {
  const spawnCells = board
    .flat()
    .filter((cell) =>
      Object.values(POSITION_BY_HOUSE).some(
        ([x, y]) => cell.x === x && cell.y === y
      )
    )

  let victoryPlayer: Player | undefined
  spawnCells.forEach((cell) => {
    if (!cell.players?.length) return false
    const playersWithObject = cell.players.filter(
      (player) => player.objects?.length
    )
    if (!playersWithObject.length) return false
    victoryPlayer = playersWithObject.find(
      (player) =>
        cell.x === POSITION_BY_HOUSE[player.house.name][0] &&
        cell.y === POSITION_BY_HOUSE[player.house.name][1]
    )
  })
  return victoryPlayer
}
