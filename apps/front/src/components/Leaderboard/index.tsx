import React from 'react';
import styles from "./style.module.css";
import { HogwartHouse } from "types";
import GrifImg from '@assets/images/houses/lion.png'
import SlythImg from '@assets/images/houses/snake.png'
import HuffleImg from '@assets/images/houses/badger.png'
import RavenImg from '@assets/images/houses/eagle.png'

const Leaderboard = ({winPlayer}: {winPlayer: any}) => {
	console.log('leaderbord win', winPlayer)
	// set image and color depending on winner player
	let house = winPlayer.house.name
	let image
	let color
	switch (house) {
		case HogwartHouse.GRYFFONDOR:
			image = GrifImg
			color = '#b33429'
			break
		case HogwartHouse.SLYTHERIN:
			image = SlythImg

			color = '#386a2c'
			break
		case HogwartHouse.HUFFLEPUFF:
			image = HuffleImg
			color = '#dfbe45'
			break
		case HogwartHouse.RAVENCLAW:
			image = RavenImg
			color = '#408fb1'
			break
		default: HogwartHouse.GRYFFONDOR
			image = GrifImg
			color = '#b33429'
			break
	}
	
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>The winner is <span style={{color: color}}>{winPlayer.name}</span> from <span style={{color: color}}>{winPlayer.house.name}</span> !</h1>
			<img src={image} alt="" className={styles.house}/>
		</div>
	);
};

export default Leaderboard;