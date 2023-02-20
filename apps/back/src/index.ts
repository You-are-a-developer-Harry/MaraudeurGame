import express, { Express, Request, Response } from 'express'
import { Socket } from 'socket.io'

const app: Express = express()
const http = require('http')
const server = http.createServer(app)
const port = 5000

const { Server } = require('socket.io')
const io = new Server(server, {
  cors: {
    origin: 'http://127.0.0.1:5173',
  },
})

app.get('/', (req: Request, res: Response) => {
  res.json({
    hello: 'world',
  })
})

io.on('connection', (socket: Socket) => {
  socket.emit('message', 'Hello')
  console.log(socket.id)
})

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
