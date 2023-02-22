import { create } from "zustand";
import { Board } from "types";

interface GameStore {
  board: Board
  setBoard: (newBoard: Board) => void
}

export const useGameStore = create<GameStore>((set) => ({
  board: [],
  setBoard: (newBoard) => set(() => ({ board: newBoard }), true),
}))
