import React from 'react';
import Product from './Component/Product';
import Cart from './Component/Cart';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Product />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
