import { Board } from 'types'

const BASE_PLAYER = {
  color: "black",
  id: 1,
  x: 0,
  y: 0
}

export const initPlayer = (board: Board) => {
  board[BASE_PLAYER.x][BASE_PLAYER.y].player = BASE_PLAYER
}
