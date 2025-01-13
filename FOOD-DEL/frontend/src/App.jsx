import React from 'react';  // Optional, but can be kept if needed for hooks or other React functions
import Navbar from './components/NavBar/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/' element={<Cart/>} />
          <Route path='/' element={<PlaceOrder/>} />

      </Routes>
    </div>
  )
}

export default App
