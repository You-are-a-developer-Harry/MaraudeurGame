import { useGameStore } from '@stores/GameStore'

export const PlayerList = () => {
  const players = useGameStore((state) => state.players)
  
  return (
    <div>
      <h2>Player list</h2>
      <div>
        {
          players.map(player => (
            <div>
              {player.name}
            </div>
          ))
        }
      </div>
    </div>
  )
}
