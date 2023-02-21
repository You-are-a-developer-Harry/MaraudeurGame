import { useEffect, useRef, useState } from 'react'
import * as styles from './game.module.css'
import generator from 'generate-maze'
import { Coordinates, MazeCell, Player } from 'types'
import { FootPrint } from './components/FootPrint'
import classNames from 'classnames'
import { getAvailableCells } from './utils/getAvailableCells'

const WIDTH = 20
const HEIGHT = 16
const BASE_PLAYER = {
  color: 'black',
  id: 1,
  x: 0,
  y: 0,
}

const MAX_DISTANCE_BY_TURN = 3

function generateBoard(): MazeCell[][] {
  const maze = generator(WIDTH, HEIGHT, true, Math.random() * 1000)
  maze[BASE_PLAYER.x][BASE_PLAYER.y].player = BASE_PLAYER
  return maze
}

export function Game() {
  const [cells, setCells] = useState<MazeCell[][]>([])
  const [availableCells, setAvailableCells] = useState<MazeCell[]>([])
  const player = useRef<Player>(BASE_PLAYER)

  const onClickCell = (cell: MazeCell) => {
    // Prevent the user to move at an unavailable position
    if(!availableCells.some(availableCell => availableCell.x === cell.x && availableCell.y === cell.y)) return
    setCells((prev) => {
      delete prev[player.current.y][player.current.x].player
      player.current.x = cell.x
      player.current.y = cell.y
      prev[cell.y][cell.x].player = player.current
      return [...prev]
    })
  }

  useEffect(() => {
    if(!cells.length) return 
    setAvailableCells(
      getAvailableCells(
        { x: player.current.x, y: player.current.y },
        cells,
        MAX_DISTANCE_BY_TURN
      )
    )
  }, [player.current.x, player.current.y, cells])

  useEffect(() => {
    setCells(generateBoard())
  }, [])

  return (
    <div className={styles.gameContainer}>
      {cells.length && (
        <div
          className={styles.game}
          style={{ gridTemplateColumns: `repeat(${cells[0].length}, 1fr)` }}
        >
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
                  className={classNames(
                    styles.cellWrapper,
                    availableCells.find(
                      (availableCell) =>
                        availableCell.x === cell.x && availableCell.y === cell.y
                    )
                      ? styles.visitedCell
                      : null
                  )}
                  key={`${x}-${y}`}
                  data-x={x}
                  data-y={y}
                >
                  <div
                    className={styles.cell}
                    onClick={() => onClickCell(cell)}
                  >
                    {cell.player && <FootPrint />}
                  </div>
                </div>
              )
            })
          )}
        </div>
      )}
    </div>
  )
}
