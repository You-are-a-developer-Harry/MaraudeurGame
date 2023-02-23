import { Player, RoomData } from "../types";

export function allowToCastSpell(room: RoomData, player: Player) {
  return !room.castedSpellsByUsers.some(userId => player.id === userId)
}