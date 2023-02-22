import express, { Express } from "express";
import { Socket } from "socket.io";
import { config } from "@utils/config";
import { roomHandler } from "@handlers/roomHandler";
import { playerHandler } from "@handlers/playerHandler";

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
  io.socketsJoin('room1')

  roomHandler(io, socket)
  playerHandler(io, socket)
}

io.on('connection', onConnection)

/*
const machine = interpret(gameState).start()
function log(){
  let value = machine.getSnapshot().value
  if (typeof value === "string"){
    console.log(value)
  }else if(typeof value === "object"){
    console.log(value.Playing)
  }
}

log()
machine.send('START')
log()
machine.send('END_PHASE')
log()
machine.send('END_PHASE')
log()
machine.send('END_PHASE')
log()
machine.send('END_PHASE')
log()
setTimeout(() => {
  log()
  machine.send('END_PHASE')
  log()
  machine.send('STOP')
  log()
}, 1100)*/

server.listen(Number(config.port), () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${config.port}`
  )
})
