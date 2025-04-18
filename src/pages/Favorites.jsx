import { useGameContext } from '../contexts/GameContext'
import GameCard from '../components/GameCard'

function Favorites() {
  const { favorites } = useGameContext()

  return (
    <div
      className={`${
        favorites.length ? 'p-8 w-full' : 'py-16 px-8 bg-[rgba(255,255,255,0.05)] rounded-xl my-8 mx-auto max-w-[600px]'
      }`}
    >
      <h2 className='text-center text-[2rem] mb-4 text-[#e50914]'>
        {favorites.length ? 'Твоё избранное' : 'В избранном пусто. Добавь что-нибудь!'}
      </h2>

      {favorites.length > 0 ? (
        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 p-6 w-full'>
          {favorites.map(game => (
            <GameCard game={game} key={game.id} />
          ))}
        </div>
      ) : (
        <p className='text-[#999] text-xl leading-[1.6]'>Начни добавлять в избранное игры и они появятся здесь!</p>
      )}
    </div>
  )
}

export default Favorites
