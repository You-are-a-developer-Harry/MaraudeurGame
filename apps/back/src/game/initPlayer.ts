import { HogwartHouse, Player, RoomData, User } from "../types";
import { BOARD_HEIGHT, BOARD_WIDTH } from "./generateBoard";

export const POSITION_BY_HOUSE = {
  [HogwartHouse.GRYFFONDOR]: [0, 0],
  [HogwartHouse.HUFFLEPUFF]: [BOARD_WIDTH - 1, 0],
  [HogwartHouse.SLYTHERIN]: [BOARD_WIDTH - 1, BOARD_HEIGHT - 1],
  [HogwartHouse.RAVENCLAW]: [0, BOARD_HEIGHT - 1],
}

export const initPlayer = (room: RoomData, user: User) => {
  const [x, y] = POSITION_BY_HOUSE[user.house.name]
  const player: Player = {
    id: user.id,
    name: user.name,
    house: {
      name: user.house.name,
    },
    objects: [],
    x,
    y,
  }

  room.board[player.y][player.x].players = [
    player,
    ...(room.board[player.y][player.x].players || []),
  ]
  room.players.push(player)
}
