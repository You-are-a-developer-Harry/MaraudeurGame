import { useEffect, useRef, useState } from 'react'
import * as styles from './game.module.css'
import generator from "generate-maze"
import { Coordinates, MazeCell, Player } from 'types'
import { FootPrint } from './components/FootPrint'

const WIDTH = 20
const HEIGHT = 16
const BASE_PLAYER = {
    color: "black",
    id: 1,
    x: 0,
    y: 0
}

const MAX_DISTANCE_BY_TURN = 3

function generateBoard(): MazeCell[][] {
  const maze = generator(WIDTH, HEIGHT, true,  Math.random() * 1000)
  maze[BASE_PLAYER.x][BASE_PLAYER.y].player = BASE_PLAYER
  return maze 
}

function getDistance(playerPosition: Coordinates, cell: MazeCell, board: MazeCell[][]) {
  let distance = 0
  
}

export function Game() {
  const [cells, setCells] = useState(generateBoard())
  const player = useRef<Player>(BASE_PLAYER)
  

  const onClickCell = (cell: MazeCell) => {
    setCells(prev => {
      delete prev[player.current.y][player.current.x].player
      player.current.x = cell.x
      player.current.y = cell.y
      prev[cell.y][cell.x].player = player.current
      return [...prev]
    })
  }

  return (
    <div className={styles.gameContainer}>
      <div className={styles.game} style={{gridTemplateColumns: `repeat(${cells[0].length}, 1fr)`}}>
        {cells.map((row, y) =>
          row.map((cell, x) => {
            const height = 80 / cells.length
            return (
              <div
                style={{
                  width: `${height}vh`,
                  height: `${height}vh`,
                  borderRight: cell.right ? '2px solid' : '2px transparent',
                  borderTop: cell.top ? '2px solid' : '2px transparent',
                  borderLeft: cell.left ? '2px solid' : '2px transparent',
                  borderBottom: cell.bottom ? '2px solid' : '2px transparent',
                }}
                className={styles.cellWrapper}
                key={`${x}-${y}`}
                data-x={x}
                data-y={y}
              >
                <div className={styles.cell} onClick={() => onClickCell(cell)}>
                  {cell.player && <FootPrint />}
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
