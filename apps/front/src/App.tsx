import { useEffect } from "react";
import { Game } from "./game/Game";
import { useGameStore } from "./stores/GameStore";
import { Board, HogwartHouse, RoomData, User } from 'types'
import { socket } from "./services/socket";
import { useUserStore } from "./stores/UserStore";

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


  return <Game />
}

export default App
