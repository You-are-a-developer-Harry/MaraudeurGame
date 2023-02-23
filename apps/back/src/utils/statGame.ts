import { getCurrentRoom } from "./socketHelpers";
import { stateMachines } from "./data";
import { Socket } from "socket.io";
import { logger } from "./logger";

export const startGame = (socket: Socket) => {
  const currentRoom = getCurrentRoom(socket)
  logger.info('Game start in room %s', currentRoom)
  stateMachines.get(currentRoom)!.send('START')

  // call the api to tell them the game started
  const token = '' // user.token
  fetch('https://hp-api-iim.azurewebsites.net/matches/start', {
      method: 'POST',
      body: JSON.stringify({ game: "MaraudeurGame", userIds: ["userID1","userID2","userID3","userID4"], type: "1v1"}),
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    })
}
