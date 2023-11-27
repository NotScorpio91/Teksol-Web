import React from 'react'
import NavBar from '../Components/NavBar'
import MobileNavBar from '../Components/MobileNavBar'
import Footer from '../Components/Footer'
import QuoteForm from '../Components/QuoteForm'


function Quote() {
  return (
    <div>
    <div className='flex justify-center items-center'>
      
          <div>
            <NavBar />
           <MobileNavBar />
          </div>
        
    
    
    </div>
      <QuoteForm/>
     

      <Footer/>
   
    </div>
  )
}

export default Quote
