import { Board, Player, User, RoomData, HogwartHouse } from 'types'
import { BOARD_WIDTH, BOARD_HEIGHT } from './board'

const POSITION_BY_HOUSE = {
  [HogwartHouse.GRYFFONDOR]: [0,0],
  [HogwartHouse.HUFFLEPUFF]: [BOARD_WIDTH - 1, 0],
  [HogwartHouse.SLYTHERIN]: [BOARD_WIDTH - 1,BOARD_HEIGHT - 1],
  [HogwartHouse.RAVENCLAW]: [0,BOARD_HEIGHT - 1],
}

export const initPlayer = (room: RoomData, user: User) => {
  const [x, y] = POSITION_BY_HOUSE[user.house]
  const player: Player = {
    house: user.house,
    id: user.id,
    x, 
    y
  } 
  
  room.board[player.y][player.x].players = [
    player,
    ...(room.board[player.y][player.x].players || []),
  ]
  room.players.push(player)
}
