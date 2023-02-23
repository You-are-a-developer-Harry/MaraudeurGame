import { create } from "zustand";

interface SpellStore {
  spell: any 
  allowToCastSpell: boolean
  setSpell: (spell: any) => void
  setAllowToCastSpell: (allow: boolean) => void
}

export const useSpellStore = create<SpellStore>(set => ({
  spell: null,
  allowToCastSpell: true,
  setSpell: (spell: any) => set({spell}),
  setAllowToCastSpell: (allow: boolean) => set({allowToCastSpell: allow})
})) 