import { getCurrentRoom } from "./socketHelpers";
import { stateMachines } from "./data";
import { Socket } from "socket.io";
import { logger } from "./logger";

export const startGame = (socket: Socket) => {
  const currentRoom = getCurrentRoom(socket)
  logger.info('Game start in room %s', currentRoom)
  stateMachines.get(currentRoom)!.send('START')
}
