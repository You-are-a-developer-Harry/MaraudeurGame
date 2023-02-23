import { create } from "zustand";
import { Board, GameStateValue, Player } from "types";

interface GameStore {
  board: Board
  players: Player[]
  gameState: GameStateValue
  setBoard: (newBoard: Board) => void
  setGameState: (newState: GameStateValue) => void
  setPlayers: (players:Player[]) => void
}

export const useGameStore = create<GameStore>((set) => ({
  board: [],
  players: [],
  gameState: 'Waiting',
  setBoard: (newBoard) => set(() => ({ board: newBoard })),
  setGameState: (newState) => set(() => ({ gameState: newState })),
  setPlayers: (players: Player[]) => set({ players }),
}))
