import { useState } from 'react'
import * as styles from './game.module.css'
import generator from "generate-maze"
import { MazeCell } from './MazeCell'

const WIDTH = 20
const HEIGHT = 16

function generateBoard(): MazeCell[][] {
  const maze = generator(WIDTH, HEIGHT, true,  Math.random() * 1000)
  return maze
}

export function Game() {
  const [cells, setCells] = useState(generateBoard())
  console.log(cells)
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
                  borderRight: cell.right ? "2px solid" : "2px transparent",
                  borderTop: cell.top ? "2px solid" : "2px transparent",
                  borderLeft: cell.left ? "2px solid" : "2px transparent",
                  borderBottom: cell.bottom ? "2px solid" : "2px transparent",
                }}
                className={styles.cellWrapper}
                key={`${x}-${y}`}
                data-x={x}
                data-y={y}
              >
                <div className={styles.cell} />
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
