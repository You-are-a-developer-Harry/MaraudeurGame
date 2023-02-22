import { useEffect } from "react";
import { useGameStore } from "@stores/GameStore";
import { RoomData } from "types";
import { socket } from "@services/socket";
import { useUserStore } from "@stores/UserStore";
import { BoardGame } from "@components/BoardGame";

function App() {
  const setBoard = useGameStore((state) => state.setBoard)
  const user = useUserStore((state) => state.user)
  useEffect(() => {
    if (!user) return
    socket.emit('room:join', 'room1', user)
    socket.on('map:update', (room: RoomData) => {
      setBoard(room.board)
    })
  }, [user])

  return <BoardGame />
}

export default App