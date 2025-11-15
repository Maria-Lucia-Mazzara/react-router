import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './assets/Components/HomePage';
import ChiSiamo from './assets/Components/ChiSiamo';
import Prodotti from './assets/Components/Prodotti'


function App() {


  return (
    <>
      <BrowserRouter>
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
