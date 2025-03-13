import React from 'react'
import "./styles/Nav.css"
import logo from "../assets/medicareLOGO.png"

export default function Nav() {
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
      <li><a href="#"><label htmlFor="nav-check">Home</label></a></li>
      <li><a href="#About">About</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#contact"> &#x1F6D2; Cart <span></span></a></li>

      </label>
      
    </ul>
  </nav>
  )
}
