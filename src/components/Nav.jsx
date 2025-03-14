import React from 'react'
import "./styles/Nav.css"
import logo from "../assets/medicareLOGO.png"
import { useSelector } from 'react-redux';
import CardList from './CardList'
import { useState } from 'react';

export default function Nav() {
  const CartTotal = useSelector((state) => state.cart.cartTotal);
  const [openCard, setOpenCard] = useState(false);

  const OpenCard = () =>{
    setOpenCard(!openCard)
  }
  return (
    <nav className="nav">
    <input type="checkbox" id="nav-check" />
    <div className="nav-header">
      <div className="nav-title">
        <img src={logo} alt="" />
      </div>
    </div>
    <div className="nav-btn">
      <label htmlFor="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <ul className="nav-list" >
    <label htmlFor="nav-check" className='navCheck'>

      <label htmlFor="nav-check" className='navCheck'>
      <li><a href="#Home">Home</a></li>
      </label>

      <label htmlFor="nav-check" className='navCheck'>
      <li><a href="#About">About</a></li>
      </label>

      <label htmlFor="nav-check" className='navCheck'>
      <li><a href="#contact">Contact</a></li>
      </label>

      <label htmlFor="nav-check" className='navCheck nav-cart'>
      <li className='Carts' onClick={OpenCard}><a href="#" className='Cart'> &#x1F6D2; Cart <span>{CartTotal}</span></a></li>
      </label>

     
      </label>
      
    </ul>
    <div className="CartList">
    <CardList width={ openCard ? "40%": "0%"} OpenCard={OpenCard}/>

    </div>
  </nav>
  )
}
