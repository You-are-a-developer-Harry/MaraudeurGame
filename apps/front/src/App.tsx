import { useEffect } from "react";
import { Game } from "./game/Game";
import { useGameStore } from "./stores/GameStore";
import { Board } from 'types'
import { socket } from "./services/socket";

function App() {
  const setBoard = useGameStore((state) => state.setBoard)
  useEffect(() => {
    socket.emit('room:join', 'room1')
    socket.on('map:update', (board: Board) => {
      setBoard(board)
    })
  }, [])


  return <Game />
}

export default App
