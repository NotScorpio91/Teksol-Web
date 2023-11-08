import React from 'react'
import Footer from '../../Components/Footer'
import HireDevForm from '../../Components/HireDevForm'
import NavBar from '../../Components/NavBar'

function HireDev() {
  return (
    <div>
      <div>
      <NavBar />
      </div>
      <HireDevForm/>
      <div className='mt-40'>
      <Footer />
      </div>
    </div>
  )
}

export default HireDev
