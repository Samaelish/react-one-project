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
    <div className='transform hover:-translate-y-[1rem] duration-300 group relative rounded-lg overflow-hidden bg-[#1a1a1a] h-full max-w-[500px] flex flex-col'>
      <div className='relative w-full aspect-[2/3] bg-[#2d3748]'>
        <img
          loading='lazy'
          src={game.background_image}
          alt={game.name}
          className='w-full h-full object-cover bg-[#1a202c]'
        />
        <div className='absolute inset-0 bg-opacity-50 opacity-100 md:opacity-0 transition-opacity duration-200 group-hover:md:opacity-100'>
          <button
            className={`absolute top-4 right-4 text-2xl p-2 bg-[rgba(0,0,0,0.5)] rounded-full w-[40px] h-[40px] flex justify-center items-center hover:border-indigo-700 border-2 ${
              favorite ? 'text-[#ff4757]' : 'text-white'
            }`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className='p-4 flex-1 flex flex-col gap-2'>
        <h3 className='text-base m-0'>Название: {game.name}</h3>
        <p className='text-[#999] text-[0.9rem]'>Год выпуска: {`${formatDate(game.released)}`}</p>
      </div>
    </div>
  )
}

export default GameCard
