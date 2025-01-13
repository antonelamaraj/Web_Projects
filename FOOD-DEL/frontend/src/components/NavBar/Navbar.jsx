import React, { useState } from 'react'
import './navbar.css';
import { assets } from '../../assets/assets';


const Navbar = () => {

  /*GJendja fillestare eshte home */
  const [menu, setMenu] = useState("home"); 
  return (
    <div className='navbar'>
        <img src={assets.logo} alt='logo'/>

        <ul className='navbar-menu'>
            <li onClick= {()=>setMenu("home")}className={menu==="home" ? "active" : ""}>Home</li>
            <li onClick= {()=>setMenu("menu")}className={menu==="menu"? "active" : ""}>Menu</li>
            <li onClick= {()=>setMenu("mobile-app")}className={menu==="mobile-app"? "active" : ""}>mobile-app</li>
            <li onClick= {()=>setMenu("contact-us")}className={menu==="contact-us"? "active" : ""}>contact us</li>
        </ul>

        <div className="navbar-right"></div>
          <img src={assets.search_icon} alt='search icon' />
          <div className="navbar-search-icon">
              <img src={assets.basket_icon} alt='basket icon' />
              <div className="dot"></div>
          </div>

          <button>sign in</button>
    </div>
  )
}

export default Navbar