import React, {useState} from 'react';
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
  const[menu, setMenu] = React.useState("menu");
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo nhi aa rha" className='logo'/>
      <ul className='navbar-menu'>
        <li className={menu==="Home" ? "active" : ""} onClick={()=>setMenu("Home")}>Home</li>
        <li className={menu==="Menu" ? "active" : ""} onClick={()=>setMenu("Menu")}>Menu</li>
        <li className={menu==="Mobile-app" ? "active" : ""} onClick={()=>setMenu("Mobile-app")}>Mobile-app</li>
        <li className={menu==="Contact-us" ? "active" : ""} onClick={()=>setMenu("Contact-us")}>Contact-us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="User Icon" />
        <div className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="Basket Icon  " />
          <div className='dot'></div>
        </div>
        <button>Sign In </button>
      </div>
    </div>
  )
}

export default Navbar
