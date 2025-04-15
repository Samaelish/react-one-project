import '../css/GameCard.css'
import { useGameContext } from '../contexts/GameContext'

function GameCard({ game }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useGameContext()
  const favorite = isFavorite(game.id)

  const formatDate = dateString => {
    const months = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ]

    const [year, month, day] = dateString.split('-')
    return `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`
  }

  console.log(formatDate('2011-04-18')) // Now works: "April 18, 2011"

  function onFavoriteClick(e) {
    e.preventDefault()
    if (favorite) removeFromFavorites(game.id)
    else addToFavorites(game)
  }

  return (
    <div className='game-card'>
      <div className='game-poster'>
        <img loading='lazy' src={game.background_image} alt={game.name} />
        <div className='game-overlay'>
          <button className={`favorite-btn ${favorite ? 'active' : ''}`} onClick={onFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className='game-info'>
        <h3>Название: {game.name}</h3>
        <p>Год выпуска: {`${formatDate(game.released)}`}</p>
      </div>
    </div>
  )
}

export default GameCard
