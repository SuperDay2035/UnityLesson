import React from 'react'
import "./navbar.css"
import UnityLogo from '../../Images/Logo.png'
function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={UnityLogo} alt="" />
        </div>
        <div className="login">
           <button className='btn-start'>Start</button>
        </div>
    </div>
  )
}

export default Navbar
