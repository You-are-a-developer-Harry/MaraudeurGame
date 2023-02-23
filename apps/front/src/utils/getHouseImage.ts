import { HogwartHouse } from "../types"
import GrifImg from '../assets/images/houses/grif.png'
import SlythImg from '../assets/images/houses/serp.png'
import HuffleImg from '../assets/images/houses/pouf.png'
import RavenImg from '../assets/images/houses/serd.png'

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