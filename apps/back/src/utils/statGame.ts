import { getCurrentRoom } from "./socketHelpers";
import { boards, stateMachines } from "./data";
import { Socket } from "socket.io";
import { logger } from "./logger";
import axios from "axios"

export const startGame = (socket: Socket) => {
  const currentRoom = getCurrentRoom(socket)

  const usersInRoom = boards
    .get(currentRoom)!
    .players.map((player) => player.id)
  // call the api to tell them the game started
  let gameID = null
  const token = '' // user.token
  console.log({ game: "MaraudeurGame", userIds: usersInRoom, type: "1v1"})
  axios.post('https://hp-api-iim.azurewebsites.net/matches/start', {
     game: "MaraudeurGame", userIds: usersInRoom, type: "1v1"
    },
  )
    .then(res => res.data)
    .then((data: any) => {
      console.log({data})
      if (data.error || data.statusCode == 500) {
        throw data
      } else {
        //Handle successful started game
        boards.set(currentRoom, {...boards.get(currentRoom)!, gameId: data.id})
        logger.info('Game start in room %s', currentRoom)
        stateMachines.get(currentRoom)!.send('START')
      }
    })
    .catch((error) => {
      console.log({error})
      logger.error('Error: %s', error);
    });
}
