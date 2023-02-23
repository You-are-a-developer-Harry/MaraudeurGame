import { HogwartHouse } from "../types"
import GrifImg from '../assets/images/houses/lion.png'
import SlythImg from '../assets/images/houses/snake.png'
import HuffleImg from '../assets/images/houses/badger.png'
import RavenImg from '../assets/images/houses/eagle.png'

export function getHouseImage(house: string) {
  let image = ""
  switch (house) {
    case HogwartHouse.GRYFFONDOR:
      image = GrifImg
      break
    case HogwartHouse.SLYTHERIN:
      image = SlythImg
      break
    case HogwartHouse.HUFFLEPUFF:
      image = HuffleImg
      break
    case HogwartHouse.RAVENCLAW:
      image = RavenImg
      break
    default:
      image = GrifImg
      break
  }
  return image
}