import React, { useState } from 'react';  // Optional, but can be kept if needed for hooks or other React functions
import Navbar from './components/NavBar/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopUp from './components/LoginPopUp/LoginPopUp';


const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin}/> : <></>}
      <div className='app'>
        <Navbar setShowLogin = {setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Cart />} />
          <Route path='/' element={<PlaceOrder />} />

        </Routes>
      </div>
      <Footer />

    </>
  )
}

export default App
