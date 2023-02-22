import { Coordinates } from "./Coordinates";
import { HogwartHouse } from "./HogwartHouse";

export type Player = {
  id: number
  house: {
    name: HogwartHouse
  }
} & Coordinates
