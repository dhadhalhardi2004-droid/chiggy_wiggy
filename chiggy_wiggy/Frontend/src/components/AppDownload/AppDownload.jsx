import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      
      <div className='app-download-container'>

        {/* LEFT SIDE */}
        <div className='app-download-left'>
          <h2>Download the app now!</h2>
          <p>
            Experience seamless online ordering only on the Chiggy Wiggy app
          </p>

          <div className='app-download-buttons'>
            <img src={assets.play_store} alt="Play Store" />
            <img src={assets.app_store} alt="App Store" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='app-download-right'>
          <div className="phone-container">
            
            {/* ✅ USE CORRECT IMAGE */}
            <img 
              src={assets.phone_with_qr} 
              alt="Phone" 
              className="phone-img" 
            />

            {/* ✅ YOUR QR OVERLAY */}
            <img 
              src={assets.qr_code} 
              alt="QR Code" 
              className="qr-overlay" 
            />

          </div>
        </div>

      </div>
    </div>
  )
}

export default AppDownload