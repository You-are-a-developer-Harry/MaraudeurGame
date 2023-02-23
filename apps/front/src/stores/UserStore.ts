import { HogwartHouse, User } from "types";
import { create } from "zustand";

interface UserStore {
  user: User | null;
  apiData: any[];
  room: String | null;
  setUser: (user: User) => void;
  setApiData: (data: any[]) => void;
  setRoom: (room: String | null) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  apiData: [],
  room: null,
  setUser(user) {
    set({ user });
  },
  setApiData(data) {
    set({ apiData: data });
  },
  setRoom(room) {
    set({ room });
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