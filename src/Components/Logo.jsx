import React from 'react'

function Logo({className,logo}) {
  return (
    <div>
    
      <img className={`w-[134px] ${className}`} src={logo} alt="logo" />
    
    </div>
  )
}

export default Logo
