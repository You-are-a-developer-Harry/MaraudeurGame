import { HogwartHouse, User } from "types";
import { create } from "zustand";

interface UserStore {
  user: User
  setUser: (user: User) => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: {
    id: Math.round(Math.random() * 1000),
    name: 'Test',
    points: 0,
    house_id: 1,
    house: {
      id : 1,
      name: Object.values(HogwartHouse)[Math.round(Math.random() * 3)],
      points: 0,
    }
  },
  setUser(user) {
    set({ user })
  },
}))


/*
{
    "user": {
        "id": 6,
        "name": "test1",
        "points": 0,
        "house_id": 1,
        "house": {
            "id": 1,
            "points": 0,
            "name": "Serpentard"
        }
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImlhdCI6MTY3NzA2MjcyOSwiZXhwIjoxNjc3MDk4NzI5fQ.hHLQhRduCLGnJ59Vtu1MyycyJsnhxqjklqC93gnevzo"
}
 */