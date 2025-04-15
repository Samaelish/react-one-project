import { Link } from 'react-router-dom'
import '../css/NavBar.css'

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <Link to='/'>Игрули</Link>
      </div>
      <div className='navbar-links'>
        <Link to='/' className='nav-link'>
          Главная
        </Link>
        <Link to='/favorites' className='nav-link'>
          Избранное
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
