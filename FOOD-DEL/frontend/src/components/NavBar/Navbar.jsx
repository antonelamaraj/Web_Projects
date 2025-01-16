import React, { useState } from 'react'
import './navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';


const Navbar = ({setShowLogin}) => {

  /*GJendja fillestare eshte home */
  const [menu, setMenu] = useState("home"); 
  return (
    <div className='navbar'>
       <Link to='/'> <img src={assets.logo} alt='logo'/></Link>
        <ul className='navbar-menu'>
            <Link to='/' onClick= {()=>setMenu("home")}className={menu==="home" ? "active" : ""}>Home</Link>
            <a href='#explore-menu' onClick= {()=>setMenu("menu")}className={menu==="menu"? "active" : ""}>menu</a>
            <a href='#app-download' onClick= {()=>setMenu("mobile-app")}className={menu==="mobile-app"? "active" : ""}>mobile-app</a>
            <a href='#footer' onClick= {()=>setMenu("contact-us")}className={menu==="contact-us"? "active" : ""}>Contact us</a>
        </ul>

        <div className="navbar-right"></div>
          <img src={assets.search_icon} alt='search icon' />
          <div className="navbar-search-icon">
              <Link to='/cart'><img src={assets.basket_icon} alt='basket icon' /></Link>
              <div className="dot"></div>
          </div>

          <button onClick={()=>setShowLogin(true)}>sign in</button>
    </div>
  )
}



export default Navbar