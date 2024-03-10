import React,{useState,useEffect} from 'react';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import CartProvider from './context/CartContext';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

function App() {

  return (
    <>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />

      <BrowserRouter>

<CartProvider>

        <NavBar />

        <Routes>

          <Route path='/' element={<ItemListContainer />} />

          <Route path='/categoria/:categoryId' element={<ItemListContainer />} />

          <Route path='/item/:id' element={<ItemDetailContainer />} />

          <Route path='/checkout' element={<Checkout />} />

          <Route path='/cart' element={<Cart />} />

          <Route path='*' element={<Error />} />

        </Routes>

        {/* { <Footer />} */}

      </CartProvider>

      </BrowserRouter >


    </>
  )
}

export default App
