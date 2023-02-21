import express, { Express } from 'express'
import { Socket } from 'socket.io'
import { config } from "./utils/config";
import { roomHandler } from "./handlers/roomHandler";
import { logger } from "./utils/logger";
import { playerHandler } from "./handlers/playerHandler";

const app: Express = express()
const http = require('http')
const server = http.createServer(app)

const { Server } = require('socket.io')
const io = new Server(server, {
  cors: {
    origin: config.frontOrigin,
  },
})

const onConnection = (socket: Socket) => {
  io.socketsJoin("room1");

  roomHandler(io, socket)
  playerHandler(io, socket)
}

io.on('connection', onConnection)

server.listen(config.port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${config.port}`)
  logger.debug("Start")
})
