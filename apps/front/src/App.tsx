import { useEffect, useState } from "react";
import { useGameStore } from "@stores/GameStore";
import { GameStateValue, Player, RoomData } from "types";
import { socket } from "@services/socket";
import { useUserStore } from "@stores/UserStore";
import { BoardGame } from "@components/BoardGame";
import { LoginForm } from "@components/LoginForm";
import { Room } from "@components/Room";
import { usePlayerStore } from "@stores/PlayerStore";
import { getGameStateValue } from "@utils/getGameStateValue";

function App() {
  const setBoard = useGameStore((state) => state.setBoard);
  const setGameState = useGameStore((state) => state.setGameState)
  const gameState = useGameStore((state) => state.gameState)
  const user = useUserStore((state) => state.user);
  const room = useUserStore((state) => state.room);
  const setPlayer = usePlayerStore(state => state.setPlayer)

  const [isConnected, setIsConnected] = useState(false); // ajouter un état pour gérer si l'utilisateur est connecté
  const [winner, setWinner] = useState({});
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
  };

  useEffect(() => {
    if(!user) return

    // Setup player when user is connected
    setPlayer({...user, x: 0, y: 0, objects: []})
  }, [user])

  useEffect(() => {
    console.log(getGameStateValue(gameState))
  }, [gameState]);

  useEffect(() => {
    if (!user || !room) return;

    socket.emit("room:join", room, user);
    socket.on("map:update", (room: RoomData) => {
      setBoard(room.board);
      const activePlayer = room.players.find(_player => _player.id === user.id)
      if(!activePlayer) return
      setPlayer({...user, objects: activePlayer?.objects, x: activePlayer.x, y: activePlayer?.y})
    });
    socket.on('state:update', (state: GameStateValue) => {
      setGameState(state)
    })
    socket.on("room:victory", (victoryPlayer: Player) => {
    //   alert(`${victoryPlayer.name} is the winner!!!!`)
	  setWinner(victoryPlayer)
	  setShowLeaderboard(true)
    })
  }, [user, room]);

  return isConnected ? (
    <BoardGame showLeaderboard={showLeaderboard} winner={winner}/>
  ) : (
    isConnected ? (
      <Room setRoomChosen={setRoomChosen} />
    ) : (
      <LoginForm onSubmit={handleSubmit} setIsConnected={setIsConnected} />
    )
  );
}

export default App;
