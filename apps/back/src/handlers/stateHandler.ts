import { Server, Socket } from "socket.io";
import { getCurrentRoom } from "../utils/socketHelpers";
import { stateMachines } from "../utils/data";

export function stateHandler(io: Server, socket: Socket){
  const startGame = () => {
    const currentRoom = getCurrentRoom(socket)
    stateMachines.get(currentRoom)!.send('START')
  }
  socket.on('state:start', startGame)
}
