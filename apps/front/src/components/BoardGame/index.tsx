import style from "./style.module.css";
import { ProgressBar } from "../ProgressBar";
import { Game } from "@game/Game";
import { SpellButton } from "../SpellButton";
import { HPButton } from "../HPButton";
import Dice from "../Dice";
import { useEffect, useState } from "react";
import { SpellAnimation } from "@components/SpellAnimation";
import Leaderboard from "@components/Leaderboard";

import spell1 from "@assets/images/spells/spell1.png";
import spell2 from "@assets/images/spells/spell2.png";
import spell3 from "@assets/images/spells/spell3.png";
import spell4 from "@assets/images/spells/spell4.png";
import spell5 from "@assets/images/spells/spell5.png";
import spell6 from "@assets/images/spells/spell6.png";


import { socket } from '@services/socket'
import { ManaList } from '../ManaList'

import spellSound1 from '../../assets/sound/spellEffect1.mp3'
import spellSound2 from '../../assets/sound/spellEffect2.mp3'
import spellSound3 from '../../assets/sound/spellEffect3.mp3'
import spellSound4 from '../../assets/sound/spellEffect4.mp3'
import spellSound5 from '../../assets/sound/spellEffect5.mp3'
import spellSound6 from '../../assets/sound/spellEffect6.mp3'
import { getGameStateValue } from '@utils/getGameStateValue'
import { useGameStore } from '@stores/GameStore'
import { useSpellStore } from '@stores/SpellStore'
import { PlayerList } from '@components/PlayerList'
import { usePlayerStore } from '@stores/PlayerStore'

const spells = [
  {
    name: 'Patronome',
    image: spell1,
    sound: spellSound1,
    mana: 1,
    description: 'Une description du sort',
  },
  {
    name: 'Expelliarmus',
    image: spell2,
    sound: spellSound2,
    mana: 1,
    description: 'Une description du sort',
  },
  // {
  //   name: 'Defendio',
  //   image: spell3,
  //   sound: spellSound3,
  //   mana: 1,
  //   description: 'Une description du sort',
  // },
  // {
  //   name: 'Periculum',
  //   image: spell4,
  //   sound: spellSound4,
  //   mana: 1,
  //   description: 'Une description du sort',
  // },
  // {
  //   name: 'Sectumsempra',
  //   image: spell5,
  //   sound: spellSound5,
  //   mana: 1,
  //   description: 'Une description du sort',
  // },
  {
    name: 'Stupefy',
    image: spell6,
    sound: spellSound6,
    mana: 1,
    description: 'Une description du sort',
  },
]

type BoardGameProps = {
	showLeaderboard: boolean;
	winner: object;
}

export const BoardGame = ({ showLeaderboard, winner }: BoardGameProps ) => {
  const [diceValue, setDiceValue] = useState(1)
  const [displayDice, setDisplayDice] = useState(false)
  const [displayAnimation, setDisplayAnimation] = useState(false)
  const selectedSpell = useSpellStore((state) => state.spell)
  const setSelectedSpell = useSpellStore((state) => state.setSpell)
  const [userMana, setUserMana] = useState(1)
  const gameState = useGameStore((state) => state.gameState)
  const setAllowToCastSpell = useSpellStore(
    (state) => state.setAllowToCastSpell
  )
  const gamePlayer = usePlayerStore((state) => state.player)
  const allowToCastSpell = useSpellStore((state) => state.allowToCastSpell)
  const handlePlay = () => {
    socket.emit('state:start')
  }

  const handleSpellClick = (spell: any) => {
    setSelectedSpell(spell)
    setAllowToCastSpell(false)
    setDisplayAnimation(true)
    setTimeout(() => {
      setDisplayAnimation(false)
      setUserMana(userMana - spell.mana)
    }, 1500)
  }

  const handleRollDice = () => {
    setDisplayDice(true)
    setAllowToCastSpell(false)
    const diceValue = Math.floor(Math.random() * 6) + 1
    setDiceValue(diceValue)
    const finalMana = userMana + diceValue >= 10 ? 10 : userMana + diceValue

    setTimeout(() => {
      setUserMana(finalMana)
      socket.emit('spell:get-mana', gamePlayer, finalMana)
    }, 2000)

    setTimeout(() => {
      setDisplayDice(false)
    }, 3000)
  }

  // Allow to cast spell
  useEffect(() => {
    if (getGameStateValue(gameState) === 'MovePhase') {
      setAllowToCastSpell(true)
    }
  }, [gameState])

  console.log({gameState: getGameStateValue(gameState)})

  return (
    <div className={style.boardGameGrid}>
      <div className={style.MenuWrapper}>
        <div>
          <PlayerList />
        </div>

        <HPButton
          disabled={
            getGameStateValue(gameState) !== 'SpellPhase' || !allowToCastSpell
          }
          onClick={handleRollDice}
        >
          Get mana
        </HPButton>
      </div>

      <div className={style.boardCenter}>
        <ManaList manaToUse={userMana} />
        <Game/>
        <div className={style.wrapperProgressBar}>
          <ProgressBar countDownTime={20} activate={true} />
        </div>
      </div>

      <div className={style.rightMenu}>
        <div className={style.MenuWrapper}>
          <div>
            <h2>Spells</h2>
            <div className={style.spellGrid}>
              {spells.map((spell, key) => {
                return (
                  <SpellButton
                    spell={spell}
                    userMana={userMana}
                    handleClick={() => handleSpellClick(spell)}
                    key={key}
                    disabled={
                      getGameStateValue(gameState) !== 'SpellPhase' ||
                      !allowToCastSpell
                    }
                  />
                )
              })}
            </div>
          </div>
          {getGameStateValue(gameState) === 'Waiting' ? (
            <HPButton disabled={false} onClick={handlePlay}>
              Play !
            </HPButton>
          ) : null}
        </div>
      </div>

      {displayDice && <Dice diceValue={diceValue} />}

      {
        displayAnimation &&
        <SpellAnimation spell={selectedSpell}/>
      }
	  {showLeaderboard && <Leaderboard winPlayer={winner} />}
    </div>
  )
}
