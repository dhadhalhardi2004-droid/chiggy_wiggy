import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import{Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
const App = () => {
  const[ShowLogin,setShowLogin]=useState(false)
  return (
    <>
    {ShowLogin?<LoginPopup/>:<></>}
    <div className='app'>

      
      <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path='/' element={<Home/>}>
         <Route path='/Cart' element={<Cart/>}></Route>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/PlaceOrder' element={<PlaceOrder/>}></Route>
      </Route>
    </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
