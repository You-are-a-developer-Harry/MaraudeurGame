import { RoomData } from "../types";

export function updatePlayers(gameData: RoomData) {
  gameData!.players = gameData.board
    .flat()
    .filter((cell) => cell.players?.length)
    .map((cell) => cell.players!)
    .flat()
}