import React from 'react'
import "../assets/css/style.css";
import logo from  "../assets/images/logo.png";
const Welcome = () => {
  return (
    <div className="welcome-container">
        <img src={logo} alt="" className='welcome-logo' />
        <p>Chat and text directly with poeple present in the chat room.</p>
    </div>
  )
}

export default Welcome