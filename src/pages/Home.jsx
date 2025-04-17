import GameCard from '../components/GameCard'
import { useState, useEffect } from 'react'
import { searchGames, getPopularGames } from '../services/api'

function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [games, setGames] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPopularGames = async () => {
      try {
        const popularGames = await getPopularGames()
        setGames(popularGames)
      } catch (err) {
        console.log(err)
        setError('Не получилось загрузить игрули...')
      } finally {
        setLoading(false)
      }
    }

    loadPopularGames()
  }, [])

  const handleSearch = async e => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    if (loading) return

    setLoading(true)
    try {
      const searchResults = await searchGames(searchQuery)
      setGames(searchResults)
      setError(null)
    } catch (err) {
      console.log(err)
      setError('Игра не нашлась, жаль...')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='py-8 px-0 w-full'>
      <form onSubmit={handleSearch} className='max-w-[600px] mx-auto mt-0 mb-8 flex gap-4 py-0 px-4'>
        <input
          type='text'
          placeholder='Найди игру мечты...'
          className='flex-1 py-3 px-4 border-0 rounded-[4px] bg-[#333] text-white text-base focus:outline-0 focus:shadow-xl outline-indigo-600 focus:outline-2'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button
          type='submit'
          className='py-3 px-6 bg-red-700 text-white rounded-[4px] cursor-pointer font-medium duration-200 whitespace-nowrap hover:bg-red-500'
        >
          Искать
        </button>
      </form>

      {error && <div className='error-message'>{error}</div>}

      {loading ? (
        <div className='loading'>Загрузка...</div>
      ) : (
        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 p-6 w-full box-border'>
          {games.map(game => (
            <GameCard game={game} key={game.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
