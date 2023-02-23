import { useGameStore } from '@stores/GameStore'
import { getHouseImage } from '@utils/getHouseImage'
import styles from './player-list.module.css'

export const PlayerList = () => {
  const players = useGameStore((state) => state.players)

  return (
    <div>
      <h2>Player list</h2>
      <div className={styles.playerList}>
        {players.map((player) => (
          <div className={styles.playerListRow}>
            <img src={getHouseImage(player.house.name)} alt="" /> 
            <p>{player.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
