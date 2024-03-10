import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { getFirestore,doc,getDoc } from 'firebase/firestore';

function App() {

  return (
    <>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />

      <BrowserRouter>

        <NavBar />

        <Routes>

          <Route path='/' element={<ItemListContainer />} />

          <Route path='/categoria/:categoryId' element={<ItemListContainer />} />

          <Route path='/detalle/:id' element={<ItemDetailContainer />} />

          <Route path='*' element={<Error />} />

        </Routes>

      {/* <Footer /> */}

    </BrowserRouter >
      

    </>
  )
}

export default App
