import style from "./style.module.css";
import { ProgressBar } from "../ProgressBar";
import { Game } from "@game/Game";
import { InventoryItem } from "../InventoryItem";
import { SpellButton } from "../SpellButton";
import { HPButton } from "../HPButton";
import Dice from "../Dice";
import { useState } from "react";
import { SpellAnimation } from "@components/SpellAnimation";

import spell1 from "@assets/images/spells/spell1.png";
import spell2 from "@assets/images/spells/spell2.png";
import spell3 from "@assets/images/spells/spell3.png";
import spell4 from "@assets/images/spells/spell4.png";
import spell5 from "@assets/images/spells/spell5.png";
import spell6 from "@assets/images/spells/spell6.png";
import spell7 from "@assets/images/spells/spell7.png";
import spell8 from "@assets/images/spells/spell8.png";
import { socket } from "@services/socket";
import { useGameStore } from "@stores/GameStore";
import { getGameStateValue } from "@utils/getGameStateValue";
import { ManaList } from "../ManaList";

import spellSound1 from "../../assets/sound/spellEffect1.mp3";
import spellSound2 from "../../assets/sound/spellEffect2.mp3";
import spellSound3 from "../../assets/sound/spellEffect3.mp3";
import spellSound4 from "../../assets/sound/spellEffect4.mp3";
import spellSound5 from "../../assets/sound/spellEffect5.mp3";
import spellSound6 from "../../assets/sound/spellEffect6.mp3";

const spells = [
  {
    name: 'Patronome',
    image: spell1,
    sound: spellSound1,
    mana: 1,
    description: 'Une description du sort'
  },
  {
    name: 'Expelliarmus',
    image: spell2,
    sound: spellSound2,
    mana: 1,
    description: 'Une description du sort'
  },
  {
    name: 'Defendio',
    image: spell3,
    sound: spellSound3,
    mana: 1,
    description: 'Une description du sort'
  },
  {
    name: 'Periculum',
    image: spell4,
    sound: spellSound4,
    mana: 1,
    description: 'Une description du sort'
  },
  {
    name: 'Sectumsempra',
    image: spell5,
    sound: spellSound5,
    mana: 1,
    description: 'Une description du sort'
  },
  {
    name: 'Stupefy',
    image: spell6,
    sound: spellSound6,
    mana: 1,
    description: 'Une description du sort'
  },
  {
    name: 'Reverso',
    image: spell7,
    mana: 1,
    description: 'Une description du sort'
  },
  {
    name: 'Doloris',
    image: spell8,
    mana: 1,
    description: 'Une description du sort'
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
  const gameState = useGameStore((state) => state.gameState)
  const [displayAnimation, setDisplayAnimation] = useState(false);
  const [selectedSpell, setSelectedSpell] = useState(spells[0]);
  const [userMana, setUserMana] = useState(0);

  const handlePlay = () => {
    socket.emit('state:start');
  }

  const handleSpellClick = (spell: any) => {
    setSelectedSpell(spell);
    setDisplayAnimation(true);
    setTimeout(() => {
      setDisplayAnimation(false);
      setUserMana(userMana - spell.mana);
    }, 1500)
  }

  const handleRollDice = () => {
    setDisplayDice(true)
    const diceValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(diceValue);

    setTimeout(() => {
      setDisplayDice(false);
      if(userMana + diceValue >= 10) {
        setUserMana(10)
      } else {
        setUserMana(userMana + diceValue)
      }
    }, 5000)
  }

  return (
    <div className={style.boardGameGrid}>
      <div className={style.MenuWrapper}>
        <div>
          <h2>{getGameStateValue(gameState)}</h2>
          <div className={style.inventoryGrid}>
            {inventory.map((item, key) => (
              <InventoryItem image={item.image} key={key} />
            ))}
          </div>
        </div>

        <HPButton onClick={handleRollDice}>Roll the dice</HPButton>
      </div>

      <div className={style.boardCenter}>
        <ManaList manaToUse={userMana}/>
        <Game />
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
                    mana={spell.mana}
                    description={spell.description}
                    key={key}
                  />
                )
              })}
            </div>
          </div>
          <HPButton onClick={handlePlay}>Play !</HPButton>
        </div>
      </div>

      {
        displayDice && <Dice diceValue={diceValue} />
      }

      {
        displayAnimation &&
        <SpellAnimation spell={selectedSpell}/>
      }
    </div>
  )
}
