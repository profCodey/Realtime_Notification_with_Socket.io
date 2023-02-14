import React from 'react'
import './navbar.css'
import Notification from "../../img/notification.svg"

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Lama App</span>
      <div className="icon">
        <img src={Notification} alt="" className='iconImg' />
        <div className="counter">2</div>
      </div>
    </div>
  )
}

export default Navbar 