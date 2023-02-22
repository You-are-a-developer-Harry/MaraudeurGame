import { Player } from "./Player";
import { SecretObject } from "./SecretObject";

export type MazeCell = {
  x: number
  y: number
  top: boolean
  left: boolean
  bottom: boolean
  right: boolean
  set: number
  players?: Player[]
  object?: SecretObject
  teachers?: Player[]
}
