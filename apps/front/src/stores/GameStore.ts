import { create } from "zustand";
import { Board, GameStateValue } from "types";

interface GameStore {
  board: Board
  gameState: GameStateValue
  setBoard: (newBoard: Board) => void
  setGameState: (newState: GameStateValue) => void
}

export const useGameStore = create<GameStore>((set) => ({
  board: [],
  gameState: "",
  setBoard: (newBoard) => set(() => ({ board: newBoard })),
  setGameState: (newState) => set(() => ({ gameState: newState })),
}))
