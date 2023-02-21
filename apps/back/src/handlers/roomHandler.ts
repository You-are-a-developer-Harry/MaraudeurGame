import { Server, Socket } from "socket.io";
import { generateBoard } from "../game/board";
import { initPlayer } from "../game/player";
import { logger } from "../utils/logger";
import { boards } from "../utils/data";

export function roomHandler(io: Server, socket: Socket) {
  const joinRoom = (room: string) => {
    logger.debug('A user joined the room : %s', room)
    const roomEmpty = io.sockets.adapter.rooms.get(room)?.size ?? true;
    if (roomEmpty) {
      logger.debug('Generate new board for room : %s', room)
      boards.set(room, generateBoard());
    }

    socket.join(room);
    initPlayer(boards.get(room)!)
    io.sockets.in(room).emit("map:update", boards.get(room));
  };

  socket.on("room:join", joinRoom);
}
