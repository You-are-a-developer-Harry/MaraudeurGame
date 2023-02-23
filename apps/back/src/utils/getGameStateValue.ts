import { GameStateValue } from "../types";

export function getGameStateValue(value: GameStateValue): String{
  switch (typeof value){
    case 'string':
      return value
    case 'object':
      return value.Playing as String
    default:
      return ''
  }
}
