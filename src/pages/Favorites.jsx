import '../css/Favorites.css'
import { useGameContext } from '../contexts/GameContext'
import GameCard from '../components/GameCard'

function Favorites() {
  const { favorites } = useGameContext()

  return (
    <div className={`favorites${favorites.length ? '' : '-empty'}`}>
      <h2>{favorites.length ? 'Твоё избранное' : 'В избранном пусто. Добавь что-нибудь!'}</h2>

      {favorites.length > 0 ? (
        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 p-6 w-full box-border'>
          {favorites.map(game => (
            <GameCard game={game} key={game.id} />
          ))}
        </div>
      ) : (
        <p>Начни добавлять в избранное игры и они появятся здесь!</p>
      )}
    </div>
  )
}

export default Favorites
