import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { StoreContext } from '../../context/StoreContext'


const FoodItem = ({id, name, price, description, image}) => {

 
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  const conversionRate = 30; // adjust if needed (50–70 is good range)
  const convertedPrice = price * conversionRate;

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(convertedPrice);

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt={name} />
        {
          !cartItems[id]
          ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="Add" />
          : <div className='food-item-counter'>
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="Remove" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="Add"  />
            </div>
        }      
        </div>
      <div className='food-item-info'>
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />

        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>{formattedPrice}</p>
      </div>
    </div>
  )
}

export default FoodItem