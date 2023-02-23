import { Server, Socket } from 'socket.io'
import { allowToCastSpell } from '../game/allowToCastSpell'
import { movePlayer } from '../game/movePlayer'
import { MazeCell, Player } from '../types'
import { boards, stateMachines, userCastedSpell } from '../utils/data'
import { logger } from '../utils/logger'
import { getCurrentRoom } from '../utils/socketHelpers'

export function spellHandler(io: Server, socket: Socket) {
  const teleportTeacher = (
    player: Player,
    teacher: Player,
    selectedCell: MazeCell
  ) => {
    logger.debug('Tp teacher')

    const roomData = boards.get(getCurrentRoom(socket))
    if (!roomData) {
      logger.debug('Room data not found')
      return
    }

    if (!teacher) {
      logger.debug('Teacher not found')
      return
    }

    const currentRoom = getCurrentRoom(socket)
    const currentCastedSpellByUser = userCastedSpell.get(currentRoom)!
    const usersInRoom = boards
      .get(currentRoom)!
      .players.map((player) => player.id)

    if (currentCastedSpellByUser.indexOf(player.id) === -1) {
      currentCastedSpellByUser.push(player.id)
    } else {
      return
    }

    const destinationCell = roomData.board
      .flat()
      .find((cell) => cell.x === selectedCell.x && cell.y === selectedCell.y)
    const originCell = roomData.board
      .flat()
      .find((cell) => cell.x === teacher.x && cell.y === teacher.y)

    if (!destinationCell || !originCell) {
      logger.error('Cell not found')
      return
    }
    originCell!.teachers?.pop()
    destinationCell!.teachers = [teacher, ...(destinationCell!.teachers || [])]
    teacher.x = destinationCell.x
    teacher.y = destinationCell.y

    socket.emit('map:update', roomData)

    if (
      usersInRoom.filter((item) => !currentCastedSpellByUser.includes(item))
        .length === 0
    ) {
      stateMachines.get(currentRoom)!.send('END_PHASE')
      userCastedSpell.set(currentRoom, [])
    }
  }

  const getMana = (player: Player, manaQuantity: number) => {
    logger.debug('Get mana')
    const roomData = boards.get(getCurrentRoom(socket))
    if (!roomData) {
      logger.debug('Room data not found')
      return
    }

    const currentRoom = getCurrentRoom(socket)
    const currentCastedSpellByUser = userCastedSpell.get(currentRoom)!
    const usersInRoom = boards
      .get(currentRoom)!
      .players.map((player) => player.id)

     if (currentCastedSpellByUser.indexOf(player.id) === -1) {
       currentCastedSpellByUser.push(player.id)
     } else {
       return
     }

    if (
      usersInRoom.filter((item) => !currentCastedSpellByUser.includes(item))
        .length === 0
    ) {
      stateMachines.get(currentRoom)!.send('END_PHASE')
      userCastedSpell.set(currentRoom, [])
    }
  }

  const speedUpSpell = (player: Player) => {
    logger.debug('Speed up spell')

    const roomData = boards.get(getCurrentRoom(socket))
    if (!roomData) {
      logger.debug('Room data not found')
      return
    }

    const currentRoom = getCurrentRoom(socket)
    const currentCastedSpellByUser = userCastedSpell.get(currentRoom)!
    const usersInRoom = boards
      .get(currentRoom)!
      .players.map((player) => player.id)

    if (currentCastedSpellByUser.indexOf(player.id) === -1) {
      currentCastedSpellByUser.push(player.id)
    } else {
      return
    }

     if (
       usersInRoom.filter((item) => !currentCastedSpellByUser.includes(item))
         .length === 0
     ) {
       stateMachines.get(currentRoom)!.send('END_PHASE')
       userCastedSpell.set(currentRoom, [])
     }
  }

  const teleportPlayer = (player: Player, cell: MazeCell) => {
    logger.debug('Teleport player')
    const roomData = boards.get(getCurrentRoom(socket))
    if (!roomData) {
      logger.debug('Room data not found')
      return
    }

    const currentRoom = getCurrentRoom(socket)
    const currentCastedSpellByUser = userCastedSpell.get(currentRoom)!
    const usersInRoom = boards
      .get(currentRoom)!
      .players.map((player) => player.id)

    if (currentCastedSpellByUser.indexOf(player.id) === -1) {
      currentCastedSpellByUser.push(player.id)
    } else {
      return
    }

    movePlayer(roomData.board, player, cell)
    socket.emit('map:update', roomData)

    if (
      usersInRoom.filter((item) => !currentCastedSpellByUser.includes(item))
        .length === 0
    ) {
      stateMachines.get(currentRoom)!.send('END_PHASE')
      userCastedSpell.set(currentRoom, [])
    }
  }


  socket.on('spell:get-mana', getMana)
  socket.on('spell:teleport-teacher', teleportTeacher)
  socket.on('spell:speed-up', speedUpSpell)
  socket.on('spell:teleport-player', teleportPlayer)
}
