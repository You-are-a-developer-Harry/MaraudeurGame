import express, { Express } from "express";
import { Socket } from "socket.io";
import { config } from "./utils/config";
import { roomHandler } from "./handlers/roomHandler";
import { playerHandler } from "./handlers/playerHandler";
import { machine } from "./utils/gameState";
import { stateHandler } from "./handlers/stateHandler";

const app: Express = express()
const http = require('http')
const server = http.createServer(app)

app.get("/", (req, res) => {
  res.send('Hello world!')
})

const { Server } = require('socket.io')
export const io = new Server(server, {
  cors: {
    origin: config.frontOrigin,
  },
})

machine.start()

const onConnection = (socket: Socket) => {
  io.socketsJoin('room1')

  roomHandler(io, socket)
  stateHandler(io, socket)
  playerHandler(io, socket)
}

io.on('connection', onConnection)

server.listen(Number(config.port), () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${config.port}`
  )
})
