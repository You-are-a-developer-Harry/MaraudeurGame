import React from 'react';
import styles from "./style.module.css";
import { HogwartHouse } from "types";

const Leaderboard = ({winPlayer}: {winPlayer: any}) => {
	console.log('leaderbord win', winPlayer)
	// set image and color depending on winner player
	let house = winPlayer.house.name
	let image
	let color
	switch (house) {
		case HogwartHouse.GRYFFONDOR:
			image = 'image/griff.png'
			color = '#b33429'
			break
		case HogwartHouse.SLYTHERIN:
			image = 'image/serp.png'
			color = '#386a2c'
			break
		case HogwartHouse.HUFFLEPUFF:
			image = 'image/pouf.png'
			color = '#dfbe45'
			break
		case HogwartHouse.RAVENCLAW:
			image = 'image/serd.png'
			color = '#408fb1'
			break
		default: HogwartHouse.GRYFFONDOR
			image = 'image/grif.png'
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