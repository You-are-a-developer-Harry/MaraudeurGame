import { useEffect, useState } from "react";
import { useGameStore } from "@stores/GameStore";
import { RoomData } from "types";
import { socket } from "@services/socket";
import { useUserStore } from "@stores/UserStore";
import { BoardGame } from "@components/BoardGame";
import { LoginForm } from "@components/LoginForm";

function App() {
  const setBoard = useGameStore((state) => state.setBoard);
  const user = useUserStore((state) => state.user);
  const [isConnected, setIsConnected] = useState(false); // ajouter un état pour gérer si l'utilisateur est connecté

  const handleSubmit = async (event: any) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (!user) return;
    socket.emit("room:join", "room1", user);
    socket.on("map:update", (room: RoomData) => {
      setBoard(room.board);
    });
  }, [user]);

  return isConnected ? (
    <BoardGame />
  ) : (
    <LoginForm onSubmit={handleSubmit} setIsConnected = {setIsConnected} /> // passer la prop onSubmit au composant LoginForm
  );
}

export default App;
