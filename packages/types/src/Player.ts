import { Coordinates } from "./Coordinates"
import { HogwartHouse } from "./HogwartHouse"

export type Player = {
  id: number
  house: HogwartHouse
} & Coordinates