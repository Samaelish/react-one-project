import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='bg-black md:px-8 md:py-4 flex justify-between items-center shadow-[0_2px_4px_rgba(0,0,0,0.1)] p-4'>
      <div className='font-bold md:text-2xl text-[1.2rem]'>
        <Link to='/'>Игрули</Link>
      </div>
      <div className='flex md:gap-8 gap-4'>
        <Link
          to='/'
          className='text-base md:px-2 md:py-4 transition-colors duration-200 bg-black hover:bg-gray-800 rounded p-2'
        >
          Главная
        </Link>
        <Link
          to='/favorites'
          className='text-base md:px-2 md:py-4 transition-colors duration-200 bg-black hover:bg-gray-800 rounded p-2'
        >
          Избранное
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
