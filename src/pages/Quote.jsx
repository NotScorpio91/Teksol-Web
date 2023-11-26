import React from 'react'
import Footer from '../Components/Footer'
import QuoteForm from '../Components/QuoteForm'
import MobileNavBar from '../Components/MobileNavBar'


function Quote() {
  return (
    <div>
    <div className='flex justify-center items-center'>
      
          <div>
           <MobileNavBar />
          </div>
        
    
    
    </div>
      <QuoteForm/>
     

      <Footer/>
   
    </div>
  )
}

export default Quote
