import { Socket } from "socket.io";
import { getCurrentRoom } from "./socketHelpers";
import { boards } from "./data";
import { Player } from "../types";

export const victoryGame = (player: Player, socket: Socket) => {
  const currentRoom = getCurrentRoom(socket)
  const gameId = boards
    .get(currentRoom)!.gameId

}
