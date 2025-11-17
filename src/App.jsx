import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './assets/pages/HomePage';
import ChiSiamo from './assets/pages/ChiSiamo';
import Prodotti from './assets/pages/Prodotti';
import NavBar from './assets/Components/NavBar'


function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<ChiSiamo />} />
          <Route path="/products" element={<Prodotti />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
