import generator from "generate-maze";
import { randomSpawnCellItem } from "./randomSpawnCellItem";

export const BOARD_WIDTH = 20
export const BOARD_HEIGHT = 16

export const generateBoard = () => {
  let board = generator(BOARD_WIDTH, BOARD_HEIGHT, true, Math.random() * 1000)

  // Generate object
  board = randomSpawnCellItem(board, 'object', {
    name: 'random',
    value: 20,
    image: '/object/grif.png',
  })

  // Generate teacher
  board = randomSpawnCellItem(board, 'teachers', {})

  return board
}
