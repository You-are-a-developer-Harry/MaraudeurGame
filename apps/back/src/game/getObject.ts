import { Board, Player } from "../types";

export function getObject(board: Board, player: Player) {
  board.flat().forEach(cell => {
    if(cell.players && cell.players.length && cell.object) {
      if(cell.players.find(_player => player.id === _player.id )) {
        player.objects.push(cell.object)
        console.log({ player })

        cell.object = undefined
      }
    }
  })
}