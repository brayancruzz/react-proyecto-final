import './styles/App.css'
import './styles/Navbar.css'
import './styles/itemList.css'
import './styles/item.css'
import './styles/mainContainer.css'
import './styles/itemDetailContainer.css'
import './styles/ItemCount.css'
import './styles/CartWidget.css'
import React, { useState, createContext } from 'react'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailsContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notification/Notification'

function App() {
  return (
    <div className="App" >
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<h1>CART</h1>} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
