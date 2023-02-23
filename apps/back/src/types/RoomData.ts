import { Board } from './Board'
import { Player } from './Player'

export type RoomData = {
  board: Board
  players: Player[]
  gameId?: number
  castedSpellsByUsers: number[] // Store all spells casted by users (1 by turn)
}
