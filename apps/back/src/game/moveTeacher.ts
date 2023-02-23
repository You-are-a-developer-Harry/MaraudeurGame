import { Board, MazeCell, Player } from '../types'
import { generateRandom } from '../utils/generateRandom'
import { getAvailableCells } from '../utils/getAvailableCells';

const MOVE_RANGE = [1, 3]

export function moveTeachers(board: Board) {
  const pairDestCellByTeacher: {destinationCell: MazeCell, teacher: Player}[] = []

  // Prepare the move
  board.forEach((col) =>
    col.forEach((cell) => {
      if (cell.teachers && cell.teachers.length) {
        const teachers = [...cell.teachers]
        cell.teachers = []

        teachers.forEach((teacher) => {
          const moveDeps = generateRandom(...MOVE_RANGE)
          const availableCells = getAvailableCells(cell, board, moveDeps)

          const destinationCell =
            availableCells[generateRandom(0, availableCells.length - 1)]

          teacher.x = destinationCell.x
          teacher.y = destinationCell.y
          pairDestCellByTeacher.push({ destinationCell, teacher })
        })
      }
    })
  )

  // apply the move
  pairDestCellByTeacher.forEach((pair) => {
    pair.destinationCell.teachers = [
      pair.teacher,
      ...(pair.destinationCell.teachers || []),
    ]
  })

  return board
}
