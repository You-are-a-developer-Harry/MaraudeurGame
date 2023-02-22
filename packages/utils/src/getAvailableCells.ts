import { Coordinates, MazeCell } from 'types'

export function _getAvailableCells(
  origin: Coordinates,
  board: MazeCell[][],
  deps: number,
  visited: MazeCell[] = []
) {
  let { x, y } = origin

  const currentCell = board[y][x]

  // Add visited cell
  if (
    !visited.find(
      (cell) => cell.x === currentCell.x && cell.y === currentCell.y
    )
  ) {
    visited.push(currentCell)
  }

  if (deps === 0) return visited

  let neighbors: MazeCell[] = []
  // Get neighbors according to walls
  if (!currentCell.top && y > 0) neighbors.push(board[y - 1][x])
  if (!currentCell.bottom && y < board.length - 1)
    neighbors.push(board[y + 1][x])
  if (!currentCell.left && x > 0) neighbors.push(board[y][x - 1])
  if (!currentCell.right && x < board[0].length - 1)
    neighbors.push(board[y][x + 1])

  // Filter neighbors by visited cells
  neighbors = neighbors.filter(
    (neighbor) =>
      !visited.find(
        (visitedCell) =>
          visitedCell.x === neighbor.x && visitedCell.y === neighbor.y
      )
  )

  if (!neighbors.length) return visited

  neighbors.forEach((neighbor) => {
    _getAvailableCells(
      { x: neighbor.x, y: neighbor.y },
      board,
      deps - 1,
      visited
    )
  })

  return visited
}

export function getAvailableCells(
  origin: Coordinates,
  board: MazeCell[][],
  deps: number,
  visited: MazeCell[] = []
) {
  const availableCells = _getAvailableCells(origin, board, deps, visited)
  return availableCells.filter(
    (cell) => cell.x !== origin.x || cell.y !== origin.y
  )
}
