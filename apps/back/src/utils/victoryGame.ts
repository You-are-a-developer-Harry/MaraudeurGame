import { Socket } from "socket.io";
import { getCurrentRoom } from "./socketHelpers";
import { boards, stateMachines } from "./data";
import { Player } from "../types";
import axios from "axios";
import { logger } from "./logger";

export const victoryGame = (player: Player, socket: Socket) => {
  const currentRoom = getCurrentRoom(socket)
  const gameId = boards
    .get(currentRoom)!.gameId

  axios.post('https://hp-api-iim.azurewebsites.net/matches/end', {
    gameId: gameId, userId: player.id
  }).then(data => {
    logger.info('Partie fini')
    console.log(data)
    stateMachines.get(currentRoom)!.send('STOP')
  }).catch((error) => {
    logger.error(error)
  })
}
