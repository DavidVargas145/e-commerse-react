import React from 'react'
import { NavBar } from './NavBar'
import { Carrito } from './Carrito'
import { Link } from 'react-router-dom';


export const Header = (props) => {


  const cantidad = 55;


  return (
    <header>
      <Link to="/"><h1>GreenShop</h1></Link>
      <NavBar />
      <Carrito cantidad={cantidad} />

    </header>
  )
}
