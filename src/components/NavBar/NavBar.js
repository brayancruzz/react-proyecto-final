import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
      <nav className="NavBar" >
        <Link to='/'>
          <h3>Tienda de Consolas</h3>
        </Link>
        <div className="Categories">
          <NavLink to='/category/consolas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Consolas</NavLink>
          <NavLink to='/category/celulares' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
          <NavLink to='/category/pc' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>PC</NavLink>
        </div>
        <CartWidget />
      </nav>
  )
}

export default NavBar