import { Board, MazeCell } from '../types'
import { getAvailableCells } from '../utils/getAvailableCells'
import { POSITION_BY_HOUSE } from './initPlayer'
import { movePlayer } from './movePlayer'
import { randomSpawnCellItem } from './randomSpawnCellItem'

const DANGEROSITY_RANGE = 3

/**
 * Should be called after moveTeacher
 */
export function killByTeacher(board: Board) {
  const dangerosityCells: MazeCell[] = []

  // Get dangerosity cells
  board.flat().forEach((cell) => {
    if (cell.teachers?.length) {
      dangerosityCells.push(
        ...getAvailableCells(cell, board, DANGEROSITY_RANGE)
      )
    }
  })

  // Kill players
  dangerosityCells.forEach((cell) => {
    if (cell.players?.length) {
      cell.players.forEach((player) => {
        // Move player to spawn
        const destinationCell = board
          .flat()
          .find(
            (destCell) =>
              destCell.x === POSITION_BY_HOUSE[player.house.name][0] &&
              destCell.y === POSITION_BY_HOUSE[player.house.name][1]
          )
        movePlayer(board, player, destinationCell!)

        // Remove objects
        if (player.objects?.length) {
          player.objects.forEach((object) => {
            randomSpawnCellItem(board, 'object', object)
          })
          player.objects = []
        }
      })
    }
  })
}
