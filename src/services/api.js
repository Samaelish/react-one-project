const BASE_URL = 'https://api.rawg.io/api'

export const getPopularGames = async () => {
  const response = await fetch(`${BASE_URL}/games?key=${import.meta.env.VITE_API_KEY}&page_size=10`)
  console.log(response)
  const data = await response.json()
  console.log(data)
  return data.results
}

export const searchGames = async gameName => {
  const response = await fetch(
    `${BASE_URL}/games?key=${import.meta.env.VITE_API_KEY}&search=${encodeURIComponent(gameName)}`,
  )
  const data = await response.json()
  return data.results
}
