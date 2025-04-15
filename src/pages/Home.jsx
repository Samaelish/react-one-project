import GameCard from '../components/GameCard'
import { useState, useEffect } from 'react'
import { searchGames, getPopularGames } from '../services/api'
import '../css/Home.css'

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
        setError('Failed to load games...')
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
    <div className='home'>
      <form onSubmit={handleSearch} className='search-form'>
        <input
          type='text'
          placeholder='Search for games...'
          className='search-input'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button type='submit' className='search-button'>
          Search
        </button>
      </form>

      {error && <div className='error-message'>{error}</div>}

      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className='games-grid'>
          {games.map(game => (
            <GameCard game={game} key={game.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
