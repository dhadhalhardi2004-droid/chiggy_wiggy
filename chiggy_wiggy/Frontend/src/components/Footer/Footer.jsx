import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
            <img src={assets.logo} alt="logo" />
            <p>ChiggyWiggy is your go-to food delivery platform, bringing your favorite meals from top restaurants straight to your home.!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="Facebook" />
                <img src={assets.twitter_icon} alt="Twitter" />
                <img src={assets.linkedin_icon} alt="LinkedIn" />
            </div>
            </div>

            <div className='footer-content-center'>
                <h2>company</h2>
                <ul>
                <li>Home</li>    
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>   
                </ul>

            </div>

            <div className='footer-content-right'>
                <h2>Get in touch</h2>
                <ul>
                    <li>1234567890</li>
                    <li>contact@chiggywiggy.com</li>
                </ul>

            </div>

            </div>
            <hr/>
                <p className='footer-copyright'>Copyright 2026 c chiggywiggy. All rights reserved.</p>
          
      
    </div>
  )
}

export default Footer
