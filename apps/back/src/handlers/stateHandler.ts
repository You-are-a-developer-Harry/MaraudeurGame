import { Server, Socket } from "socket.io";
import { startGame } from "../utils/statGame";

export function stateHandler(io: Server, socket: Socket){
  const start = () => startGame(socket)
  socket.on('state:start', start)
}
