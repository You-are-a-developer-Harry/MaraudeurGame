import style from "./style.module.css";
import { ProgressBar } from "../ProgressBar";
import { Game } from "@game/Game";
import { InventoryItem } from "../InventoryItem";
import spell1 from "@assets/images/spells/spell1.png";
import spell2 from "@assets/images/spells/spell2.png";
import spell3 from "@assets/images/spells/spell3.png";
import spell4 from "@assets/images/spells/spell4.png";
import spell5 from "@assets/images/spells/spell5.png";
import spell6 from "@assets/images/spells/spell6.png";
import spell7 from "@assets/images/spells/spell7.png";
import spell8 from "@assets/images/spells/spell8.png";
import { SpellButton } from "../SpellButton";
import { HPButton } from "../HPButton";
import Dice from "../Dice";
import { useState } from "react";

const spells = [
  {
    name: 'Patronome',
    image: spell1,
  },
  {
    name: 'Avacadavra',
    image: spell2,
  },
  {
    name: 'Imperio',
    image: spell3,
  },
  {
    name: 'Mathieus Raimbus',
    image: spell4,
  },
  {
    name: 'Bombarda Maxima',
    image: spell5,
  },
  {
    name: 'Lumos',
    image: spell6,
  },
  {
    name: 'Reverso',
    image: spell7,
  },
  {
    name: 'Doloris',
    image: spell8,
  },
]

const inventory = [
  {
    image: spell1,
  },
  {
    image: spell2,
  },
  {
    image: spell3,
  },
  {
    image: spell4,
  },
  {
    image: spell5,
  },
  {
    image: spell6,
  },
  {
    image: spell7,
  },
  {
    image: spell8,
  },
]

export const BoardGame = () => {
  const [diceValue, setDiceValue] = useState(1)
  const [displayDice, setDisplayDice] = useState(false)

  const handlePlay = () => {
    alert('Play ! ')
  }

  const handleRollDice = () => {
    setDisplayDice(true)
    setDiceValue(Math.floor(Math.random() * 6) + 1)

    setTimeout(() => {
      setDisplayDice(false)
    }, 2500)
  }

  return (
    <div className={style.boardGameGrid}>
      <div className={style.MenuWrapper}>
        <div>
          <h2>Inventory</h2>
          <div className={style.inventoryGrid}>
            {inventory.map((item, key) => (
              <InventoryItem image={item.image} key={key} />
            ))}
          </div>
        </div>

        <HPButton onClick={handleRollDice}>Roll the dice</HPButton>
      </div>

      <div className={style.boardContainer}>
        <Game />
        <div className={style.wrapperProgressBar}>
          <ProgressBar countDownTime={20} activate={false} />
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
                    image={spell.image}
                    name={spell.name}
                    key={key}
                  />
                )
              })}
            </div>
          </div>
          <HPButton onClick={handlePlay}>Play !</HPButton>
        </div>
      </div>

      {displayDice && <Dice diceValue={diceValue} />}
    </div>
  )
}
