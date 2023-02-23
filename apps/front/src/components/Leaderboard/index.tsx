import React from 'react';
import styles from "./style.module.css";

const Leaderboard = ({winPlayer}: {winPlayer: string}) => {
	console.log('leaderbord win', winPlayer)
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>The winner is <span>{winPlayer}</span> !</h1>
		</div>
	);
};

export default Leaderboard;