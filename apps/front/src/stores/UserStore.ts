import { HogwartHouse, User } from "types";
import { create } from 'zustand'

interface UserStore {
  user: User
  setUser: (user: User) => void 
}

export const useUserStore = create<UserStore>((set) => ({
  user: {
    id: Math.round(Math.random() * 1000),
    username: 'Test',
    house: Object.values(HogwartHouse)[Math.round(Math.random() * 3)],
  },
  setUser(user) {
    set({ user })
  }
}))