import '../css/GameCard.css'
import { useGameContext } from '../contexts/GameContext'

function GameCard({ game }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useGameContext()
  const favorite = isFavorite(game.id)

  const formatDate = dateString => {
    // Если дата отсутствует или не является строкой, возвращаем заглушку
    if (!dateString) return 'Дата не указана'

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

    try {
      const [year, month, day] = dateString.split('-')

      // Проверяем, что все компоненты даты существуют
      if (!year || !month || !day) return 'Некорректная дата'

      // Преобразуем месяц в число и проверяем диапазон
      const monthIndex = parseInt(month) - 1
      if (monthIndex < 0 || monthIndex >= months.length) return 'Некорректная дата'

      return `${parseInt(day)} ${months[monthIndex]} ${year}`
    } catch (error) {
      console.error('Ошибка форматирования даты:', error)
      return 'Некорректный формат даты'
    }
  }

  function onFavoriteClick(e) {
    e.preventDefault()
    if (favorite) removeFromFavorites(game.id)
    else addToFavorites(game)
  }

  return (
    <div className='game-card'>
      <div className='game-poster'>
        <img loading='lazy' src={game.background_image} alt={game.name} style={{ backgroundColor: '#1a202c' }} />
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
