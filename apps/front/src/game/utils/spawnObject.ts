import { MazeCell, SecretObject } from "types"

function generateRandom(min = 0, max = 100) {
  // find diff
  let difference = max - min

  // generate random number
  let rand = Math.random()

  // multiply with difference
  rand = Math.floor(rand * difference)

  // add with min value
  rand = rand + min

  return rand
}

export function randomSpawnObject(board: MazeCell[][], object: SecretObject) : MazeCell[][] {
  const middleX = Math.round(board[0].length / 2)
  const middleY = Math.round(board.length / 2)
  const rangeX = [middleX - 3, middleX + 3]
  const rangeY = [middleY - 3, middleY + 3]
  const x = generateRandom(...rangeX)
  const y = generateRandom(...rangeY)
  if(board[y][x].object) return randomSpawnObject(board, object)
  board[y][x].object = object
  return board
}