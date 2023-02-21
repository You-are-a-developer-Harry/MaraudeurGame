import { Player } from "./Player"

export type MazeCell = {
  x: number
  y: number
  top: boolean
  left: boolean
  bottom: boolean
  right: boolean
  set: number
  player?: Player
}