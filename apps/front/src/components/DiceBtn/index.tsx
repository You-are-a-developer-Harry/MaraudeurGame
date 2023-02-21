import * as styles from'./style.module.css';
import * as canvas from '../index.css';
import { Dice } from "../../game/components/Dice";

import { useState } from 'react';

export function DiceBtn() {
  const [isCanvasVisible, setIsCanvasVisible] = useState(false);

  function displayBtn() {
    setIsCanvasVisible(true);
    console.log('hello')
  }
  
  return (
    <>
      <img
        className={styles.diceBtn}
        onClick={displayBtn}
        src="../../public/image/1.png"
      />
      {isCanvasVisible && <Dice />}
    </>
  );
}
