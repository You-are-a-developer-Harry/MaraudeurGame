import * as styles from './style.module.css';
import * as canvas from '../index.css';
import { Dice } from "../Dice/index";

import { useState, useEffect } from 'react';

export const DiceBtn = () => {
  const [isCanvasVisible, setIsCanvasVisible] = useState(false);

  useEffect(() => {

  }, [isCanvasVisible])

  function displayBtn() {
    setIsCanvasVisible(true);
    setTimeout(() => {
      setIsCanvasVisible(false);
    }, 3000);
  }

	const pickNumber = () => {
		const diceValues = [1, 2, 3, 4, 5, 6];

		const randomIndex = Math.floor(Math.random() * diceValues.length);

		const randomValue = diceValues[randomIndex];
		console.log('valeur du dé :' + randomValue);
		return randomValue
	}

  return (
    <>
      <div className={styles.diceBtn}
        onClick={displayBtn}>
        <p>Lancer le dé</p>
        <img
          src="../../public/image/1.png"
        />
      </div>


      {
        isCanvasVisible && <Dice diceValue={pickNumber()}/>
      }
    </>
  );
}
