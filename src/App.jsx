import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import { NavBar } from './components/header/NavBar';
import { Cart } from './components/Cart';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CheckOut } from './components/CheckOut';



function App() {


  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
<NavBar/>

<main>
<Routes>
<Route path="/" element ={<ItemListContainer greeting={'Bienvenidos'} /> } />
<Route path="/category/:category" element={<ItemListContainer/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/checkout" element={<CheckOut/>}/>
<Route path="/item/:id" element={<ItemDetailContainer/>}/>

<Route path="*" element={<h1>Error 404</h1>}/>

</Routes>

</main>



        </BrowserRouter>


      </CartContextProvider>
    </>
  )
}

export default App
