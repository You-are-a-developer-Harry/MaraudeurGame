import { Coordinates } from "./Coordinates";
import { HogwartHouse } from "./HogwartHouse";
import { SecretObject } from "./SecretObject";

export type Player = {
  id: number
  house: {
    name: HogwartHouse
  }
  objects: SecretObject[]
} & Coordinates
