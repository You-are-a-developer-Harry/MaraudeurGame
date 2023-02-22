import { HogwartHouse } from "./HogwartHouse";

export type User = {
  id: number
  name: string
  points: number
  house_id: number
  house: {
    id: number
    name: HogwartHouse
    points: number
  }
}
