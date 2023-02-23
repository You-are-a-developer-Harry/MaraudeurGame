import { useEffect, useState } from 'react'
import styles from './game.module.css'
import { HogwartHouse, MazeCell, Player } from '../types'
import { FootPrint } from './components/FootPrint'
import { useGameStore } from '@stores/GameStore'
import { socket } from '@services/socket'
import classNames from 'classnames'

import { getAvailableCells } from '../utils/getAvailableCells'
import { CellObject } from './components/CellObject'
import { CellWitch } from './components/CellWitch'
import { useUserStore } from '@stores/UserStore'
import { usePlayerStore } from '@stores/PlayerStore'
import { getGameStateValue } from "@utils/getGameStateValue";
import { useSpellStore } from '@stores/SpellStore'

const MAX_DISTANCE_BY_TURN = 3
const BOARD_WIDTH = 20
const BOARD_HEIGHT = 16

const POSITION_BY_HOUSE: Record<string, number[]> = {
  [HogwartHouse.GRYFFONDOR]: [0, 0],
  [HogwartHouse.HUFFLEPUFF]: [BOARD_WIDTH - 1, 0],
  [HogwartHouse.SLYTHERIN]: [BOARD_WIDTH - 1, BOARD_HEIGHT - 1],
  [HogwartHouse.RAVENCLAW]: [0, BOARD_HEIGHT - 1],
}

function isSpawn(cell: MazeCell) {
  const houseKey = Object.keys(POSITION_BY_HOUSE).find(
    (house) =>
      cell.x === POSITION_BY_HOUSE[house][0] &&
      cell.y === POSITION_BY_HOUSE[house][1]
  )
  return houseKey?.toLowerCase()
}

function isAvailableCellForTp(cell: MazeCell, availableCellsForTp: MazeCell[]) {
  return availableCellsForTp.some(avCell => avCell.x === cell.x && avCell.y === cell.y)
}

export function Game() {
  const [availableCellsForTp, setAvailableCellsForTp] = useState<MazeCell[]>([])
  const [selectedTeacher, setSelectedTeacher] = useState<MazeCell>()
  const [dangerosityCells, setDangerosityCells] = useState<MazeCell[]>([])
  const [availableCells, setAvailableCells] = useState<MazeCell[]>([])
  const [selectedCell, setSelectedCell] = useState<
    { x: number; y: number } | undefined
    >()
  const [speedUser, setSpeedUser] = useState(3);
  const [turn, setTurn] = useState(0);
  const [turnSpeed, setTurnSpeed] = useState(0);
  const cells = useGameStore((state) => state.board)
  const user = useUserStore((state) => state.user)
  const gamePlayer = usePlayerStore((state) => state.player)
  const gameState = useGameStore((state) => state.gameState)
  const selectedSpell = useSpellStore((state) => state.spell)
  const setSelectedSpell = useSpellStore((state) => state.setSpell)

  const onClickCell = (cell: MazeCell) => {
    // Prevent the user to move at an unavailable position
    if (
      getGameStateValue(gameState) !== 'MovePhase' || !availableCells.some(
        (availableCell) =>
          availableCell.x === cell.x && availableCell.y === cell.y
      )
    )
      return
    setSelectedCell({ x: cell.x, y: cell.y })
    socket.emit('player:move', cell, gamePlayer)
    setTurn(prevState => prevState + 1);
  }

  useEffect(() => {
    if(turnSpeed + 2 === turn) {
      setSpeedUser(3);
    }
  }, [turn])

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
        speedUser
      )
    )
  }

  const appendDangerosityCells = () => {
    const teachers = cells
      .flat()
      .filter((cell) => cell.teachers && cell.teachers.length)
      .flat()
    const _dangerosityCells: MazeCell[] = []
    teachers.forEach((teacher) => {
      _dangerosityCells.push(
        ...getAvailableCells({ x: teacher.x, y: teacher.y }, cells, 3)
      )
    })
    setDangerosityCells(_dangerosityCells)
  }

  const getCellColor = (cell: MazeCell) => {
    if (
      selectedCell &&
      selectedCell.x === cell.x &&
      selectedCell.y === cell.y
    ) {
      return styles.selectedCell
    } else if (
      availableCells.find(
        (availableCell) =>
          availableCell.x === cell.x && availableCell.y === cell.y
      )
    ) {
      return styles.visitedCell
    }
  }

  // Teleport teacher spell
  const onClickTeacher = (teacher: MazeCell) => {
    if (selectedSpell.name === 'Expelliarmus') {
      setSelectedTeacher(teacher)
    }
  }
  const appendAvailableCellsForTp = () => {
    const playerCells = cells.flat().filter((cell) => cell.players?.length)
    const forbiddenCells = playerCells
      .map((cell) => getAvailableCells(cell, cells, MAX_DISTANCE_BY_TURN))
      .flat()
    const availableCells = cells
      .flat()
      .filter(
        (cell) =>
          ![...playerCells, ...forbiddenCells].find(
            (forbiddenCell) =>
              forbiddenCell.x === cell.x && forbiddenCell.y === cell.y
          )
      )
    setAvailableCellsForTp(availableCells)
  }
  const teleportTeacher = (cell: MazeCell) => {
    const teacher = selectedTeacher?.teachers?.length
      ? selectedTeacher.teachers[0]
      : undefined
    socket.emit('spell:teleport-teacher', teacher, cell)
    setAvailableCellsForTp([])
    setSelectedSpell(null)
  }

  useEffect(() => {
    if (!selectedTeacher) return
    appendAvailableCellsForTp()
  }, [selectedTeacher])

  useEffect(() => {
    if (!cells.length) return
    appendAvailableCells()
    appendDangerosityCells()
  }, [cells])

  useEffect(() => {

    if (!selectedSpell) return

    if(selectedSpell.name === "Patronome") {
      setSpeedUser(5);
      setTurnSpeed(turn);
    }

  }, [selectedSpell])


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
                    getGameStateValue(gameState) === 'MovePhase' ? getCellColor(cell) : null,
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
                      <FootPrint
                        player={player}
                        object={
                          player.objects?.length ? player.objects[0] : undefined
                        }
                      />
                    ))}
                    {cell.object && <CellObject object={cell.object} />}
                    {cell.teachers?.map((_) => (
                      <CellWitch
                        clickable={selectedSpell?.name === 'Expelliarmus'}
                        onClick={() => onClickTeacher(cell)}
                        selected={
                          selectedTeacher?.x === cell.x &&
                          selectedTeacher?.y === cell.y
                        }
                      />
                    ))}
                    {/* Spawn point */}
                    {isSpawn(cell) && (
                      <div
                        className={classNames(
                          styles.cell,
                          styles.spawn,
                          styles[isSpawn(cell) + 'Spawn']
                        )}
                      ></div>
                    )}
                    {/* Available cells for tp */}
                    {isAvailableCellForTp(cell, availableCellsForTp) && (
                      <div
                        onClick={() => teleportTeacher(cell)}
                        className={classNames(
                          styles.cell,
                          styles.availableCellForTp
                        )}
                      ></div>
                    )}
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
