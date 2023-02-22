import { logger } from "../utils/logger";
import { Socket } from "socket.io";

export function getCurrentRoom(socket: Socket){
  const rooms = Array.from(socket.rooms.values())
  if (rooms.length > 2) {
    logger.error('More than 2 rooms')
  }
  return rooms[1]
}
