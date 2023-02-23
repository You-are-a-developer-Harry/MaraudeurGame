import { Coordinates } from "./Coordinates";
import { HogwartHouse } from "./HogwartHouse";
import { SecretObject } from "./SecretObject";

export type Player = {
  id: number
  name?: string
  house: {
    name: HogwartHouse
  }
  objects: SecretObject[]
} & Coordinates
