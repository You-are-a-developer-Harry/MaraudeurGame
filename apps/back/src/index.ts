import express, { Express } from "express";
import { Socket } from "socket.io";
import { config } from "./utils/config";
import { roomHandler } from "./handlers/roomHandler";
import { playerHandler } from "./handlers/playerHandler";
import { stateHandler } from "./handlers/stateHandler";
import { Spell } from "./entities/Spell";
import { AppDataSource } from "../dbConfig";
import { logger } from "./utils/logger";
import { spellHandler } from "./handlers/spellHandler";
import cors from 'cors'

const app: Express = express()
const http = require('http')
const server = http.createServer(app)
app.use(cors({origin: '*'}))
AppDataSource.initialize()

app.get("/", (req, res) => {
  res.send('Hello world!')
})

app.get('/spells', async (req, res) => {
  logger.info('Successfully get spells')
  const spellRepository = AppDataSource.getRepository(Spell)
  const spells = await spellRepository.find({relations: {sound: true}})
  res.send(spells)
})

const { Server } = require('socket.io')
export const io = new Server(server, {
  cors: {
    origin: '*',
  },
})

const onConnection = (socket: Socket) => {
  roomHandler(io, socket)
  stateHandler(io, socket)
  playerHandler(io, socket)
  spellHandler(io, socket)
}

io.on('connection', onConnection)

server.listen(Number(config.port), () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${config.port}`
  )
})
