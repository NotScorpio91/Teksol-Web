import React from 'react'
import logo from '../assets/png/logo.png'

function Logo({className}) {
  return (
    <div>
    
      <img className={`w-[134px] ${className}`} src={logo} alt="logo" />
  
    </div>
  )
}

export default Logo
