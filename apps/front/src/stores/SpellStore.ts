import { create } from "zustand";

interface SpellStore {
  spell: any 
  setSpell: (spell: any) => void
}

export const useSpellStore = create<SpellStore>(set => ({
  spell: null,
  setSpell: (spell: any) => set({spell})
})) 