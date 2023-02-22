import { Server, Socket } from "socket.io";
import { machine } from "../utils/gameState";

export function stateHandler(io: Server, socket: Socket){
  const startGame = () => {
    machine.send('START')
  }
  socket.on('state:start', startGame)
}
