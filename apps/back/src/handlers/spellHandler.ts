import { Server, Socket } from 'socket.io'
import { MazeCell, Player } from '../types'
import { boards } from '../utils/data'
import { logger } from '../utils/logger'
import { getCurrentRoom } from '../utils/socketHelpers'

export function spellHandler(io: Server, socket: Socket) {
  const teleportTeacher = (teacher: Player, selectedCell: MazeCell) => {
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
  }

  socket.on('spell:teleport-teacher', teleportTeacher)
}
