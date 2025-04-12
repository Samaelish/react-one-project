import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

function Favorites() {
  const { favorites } = useMovieContext()

  return (
    <div className={`favorites${favorites.length ? '' : '-empty'}`}>
      <h2>{favorites.length ? 'Your Favorites' : 'No Favorite Movies Yet'}</h2>

      {favorites.length > 0 ? (
        <div className='movies-grid'>
          {favorites.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <p>Start adding movies to your favorites and they will appear here!</p>
      )}
    </div>
  )
}

export default Favorites
