import Favorites from './pages/Favorites'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { GameProvider } from './contexts/GameContext'
import NavBar from './components/NavBar'

function App() {
  return (
    <GameProvider>
      <NavBar />
      <main className='flex flex-col flex-1 p-8 box-border w-full'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </GameProvider>
  )
}

export default App
