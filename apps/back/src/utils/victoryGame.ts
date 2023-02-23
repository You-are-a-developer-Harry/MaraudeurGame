import { Socket } from "socket.io";
import { getCurrentRoom } from "./socketHelpers";
import { boards, stateMachines } from "./data";
import { Player } from "../types";
import axios from "axios";

export const victoryGame = (player: Player, socket: Socket) => {
  const currentRoom = getCurrentRoom(socket)
  const gameId = boards
    .get(currentRoom)!.gameId

  axios.post('https://hp-api-iim.azurewebsites.net/matches/end', {
    gameId: gameId, userId: player.id
  }).then(data => {
    stateMachines.get(currentRoom)!.send('STOP')
  })
}
