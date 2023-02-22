import { useEffect, useState } from "react";
import styles from "./game.module.css";
import { MazeCell } from "types";
import { FootPrint } from "./components/FootPrint";
import { useGameStore } from "@stores/GameStore";
import { socket } from "@services/socket";
import classNames from "classnames";

import { getAvailableCells } from "../utils/getAvailableCells";
import { CellObject } from "./components/CellObject";
import { CellWitch } from "./components/CellWitch";
import { useUserStore } from "@stores/UserStore";

const MAX_DISTANCE_BY_TURN = 3

export function Game() {
  const [dangerosityCells, setDangerosityCells] = useState<MazeCell[]>([])
  const [availableCells, setAvailableCells] = useState<MazeCell[]>([])
  const [selectedCell, setSelectedCell] = useState<{x: number, y: number} | undefined>()
  const cells = useGameStore((state) => state.board)
  const user = useUserStore((state) => state.user)

  const onClickCell = (cell: MazeCell) => {
    // Prevent the user to move at an unavailable position
    if (
      !availableCells.some(
        (availableCell) =>
          availableCell.x === cell.x && availableCell.y === cell.y
      )
    )
      return
    setSelectedCell({x: cell.x, y: cell.y})
    socket.emit('player:move', cell, user)
  }

  useEffect(() => {
    setSelectedCell(undefined)
  }, [cells]);


  const appendAvailableCells = () => {
    // TODO : select only current user
    const player = cells
      .flat()
      .find((cell) => cell.players?.some((player) => player.id === user?.id))
    if (!player) return
    setAvailableCells(
      getAvailableCells(
        { x: player.x, y: player.y },
        cells,
        MAX_DISTANCE_BY_TURN
      )
    )
  }

  const appendDangerosityCells = () => {
    const teachers = cells.flat().filter(cell => cell.teachers && cell.teachers.length).flat()
    const _dangerosityCells: MazeCell[] = []
    teachers.forEach(teacher => {
      _dangerosityCells.push(
        ...getAvailableCells({ x: teacher.x, y: teacher.y }, cells, 3)
      )
    })
    setDangerosityCells(_dangerosityCells)
  }

  const getCellColor = (cell: MazeCell) => {
    if (selectedCell && selectedCell.x === cell.x && selectedCell.y === cell.y){
      return styles.selectedCell
    }else if(availableCells.find(
      (availableCell) =>
        availableCell.x === cell.x && availableCell.y === cell.y
    )){
      return styles.visitedCell
    }
  }

  useEffect(() => {
    if (!cells.length) return
    appendAvailableCells()
    appendDangerosityCells()
  }, [cells])

  if (!cells.length) {
    return <p>loading</p>
  }

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
                    getCellColor(cell),
                    dangerosityCells.find(
                      (dangerosityCell) =>
                        dangerosityCell.x === cell.x &&
                        dangerosityCell.y === cell.y
                    )
                      ? styles.dangerosityCell
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
                    {(cell.players || []).map((player) => (
                      <FootPrint player={player} />
                    ))}
                    {cell.object && <CellObject object={cell.object} />}
                    {cell.teachers?.map((_) => (
                      <CellWitch />
                    ))}
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
