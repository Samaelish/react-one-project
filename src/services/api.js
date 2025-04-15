const BASE_URL = 'https://api.themoviedb.org/3'

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`)
  const data = await response.json()
  return data.results
}

export const getPopularGames = async () => {
  const response = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&page_size=10`)
  console.log(response)
  const data = await response.json()
  console.log(data)
  return data.results // Includes name, background_image, etc.
}

export const searchMovies = async query => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${encodeURIComponent(query)}`,
  )
  const data = await response.json()
  return data.results
}
