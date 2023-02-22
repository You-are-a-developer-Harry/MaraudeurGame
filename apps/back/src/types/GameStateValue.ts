interface StateValueMap {
  [key: string]: GameStateValue;
}

export type GameStateValue = string | StateValueMap
