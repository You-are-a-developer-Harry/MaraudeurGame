import * as styles from'./style.module.css';
import * as canvas from '../index.css';
import { Dice } from "../../components/Dice/index";

import { useState, useEffect } from 'react';

export const DiceBtn = () => {
  const [isCanvasVisible, setIsCanvasVisible] = useState(false);

useEffect(() => {

}, [isCanvasVisible])

  function displayBtn() {
    setIsCanvasVisible(true);
    setTimeout(() => {
        setIsCanvasVisible(false);
        console.log(isCanvasVisible)
    }, 3000);
  }
  
  return (
    <>
      <img
        className={styles.diceBtn}
        onClick={displayBtn}
        src="../../public/image/1.png"
      />

      {
      isCanvasVisible && <Dice/>
      }
    </>
  );
}
