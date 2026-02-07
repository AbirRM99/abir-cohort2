import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/products/:productid' element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App





