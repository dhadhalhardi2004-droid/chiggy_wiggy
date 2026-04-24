import React, { useState, useContext } from 'react';
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to="/">
        <img src={assets.logo} alt="logo" className='logo'/>
      </Link>

      <ul className='navbar-menu'>
        <Link to="/" className={menu==="Home" ? "active" : ""} onClick={()=>setMenu("Home")}>Home</Link>
        <a href="#explore-menu" className={menu==="Menu" ? "active" : ""} onClick={()=>setMenu("Menu")}>Menu</a>
        <a href="#app-download" className={menu==="Mobile-app" ? "active" : ""} onClick={()=>setMenu("Mobile-app")}>Mobile-app</a>
        <a href="#footer" className={menu==="Contact-us" ? "active" : ""} onClick={()=>setMenu("Contact-us")}>Contact-us</a>
      </ul>

      <div className='navbar-right'>
        <img src={assets.search_icon} alt="search" />

        <div className='navbar-search-icon'>
          <Link to="/cart">
            <img src={assets.basket_icon} alt="basket" />
            <div className='dot'></div>
          </Link>
        </div>

        {!token ? (
          <button onClick={()=>setShowLogin(true)}>Sign In</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="profile" />

            <ul className='nav-profile-dropdown'>
              <li>
                <img src={assets.bag_icon} alt="bag" />
              </li>
              <hr/>
              <li>
                <img src={assets.logout_icon} alt="logout" />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;