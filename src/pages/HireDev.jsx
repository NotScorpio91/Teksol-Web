import React from 'react'
import NavBar from '../Components/NavBar'
import MobileNavBar from '../Components/MobileNavBar'
import Footer from '../Components/Footer'
import HireDevForm from '../Components/HireDevForm'

function HireDev() {
  return (
    <div>
      <NavBar />
      <MobileNavBar/> 
      <HireDevForm/>     
      <Footer />    
    </div>
  )
}

export default HireDev
