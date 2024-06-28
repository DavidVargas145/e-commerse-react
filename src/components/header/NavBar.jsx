import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget'


export const NavBar = () => {
  return (

    <header>

      <Link to="/" className='logo'>
        <img src="https://scontent.fclo1-4.fna.fbcdn.net/v/t1.18169-9/3521_331621733606691_795428481_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=q-17zoAD89UQ7kNvgF0kNun&_nc_ht=scontent.fclo1-4.fna&oh=00_AYBb9XA8bdHh0FQRfEmZZPfSRoWwh-PqmGIVYJAJhwIN4w&oe=66A62201" alt="Logo" />
      </Link>
      <nav className='navbar'>

        <Link to="/category/hombre">Hombre</Link>
        <Link to="/category/mujer">Mujer</Link>
        <Link to="/category/ninos">Niños</Link>

        <CartWidget/>
      </nav>
    </header>
  )
}
