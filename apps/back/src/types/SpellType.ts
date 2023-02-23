import { SoundType } from "./SoundType";

export interface SpellType {
  id: number
  name: string
  image: string
  sound?: SoundType
  mana: number
  description: string
}
