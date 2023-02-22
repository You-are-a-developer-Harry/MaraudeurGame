import { useEffect } from "react";
import { useGameStore } from "./stores/GameStore";
import { Board, HogwartHouse, RoomData, User } from 'types'
import { socket } from "./services/socket";
import { DiceBtn } from "./components/DiceBtn/index";
import { useUserStore } from "./stores/UserStore";
import { BoardGame } from "./components/BoardGame";
import { config } from "./utils/config";
import { Game } from "./game/Game";
import { ManaItem } from "./components/ManaItem";
import { ManaList } from "./components/ManaList";

function App() {
  const setBoard = useGameStore((state) => state.setBoard)
  const user = useUserStore(state => state.user)
  useEffect(() => {
    if(!user) return
    socket.emit('room:join', 'room1', user)
    socket.on('map:update', (room: RoomData) => {
      setBoard(room.board)
    })
  }, [user])


  return <BoardGame />
}

export default App
