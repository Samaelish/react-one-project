const BASE_URL = 'https://api.rawg.io/api'

export const getPopularGames = async () => {
  const response = await fetch(
    `${BASE_URL}/games?key=${import.meta.env.VITE_API_KEY}&ordering=-metacritic&page_size=50`,
  )
  const data = await response.json()
  return data.results
}

export const searchGames = async gameName => {
  const response = await fetch(
    `${BASE_URL}/games?key=${import.meta.env.VITE_API_KEY}&search=${encodeURIComponent(gameName)}`,
  )
  const data = await response.json()
  return data.results
}
