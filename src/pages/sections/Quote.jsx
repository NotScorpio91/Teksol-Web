import React from 'react'
import Footer from '../../Components/Footer'
import QuoteForm from '../../Components/QuoteForm'
import NavBar from '../../Components/NavBar'


function Quote() {
  return (
    <div>
    <div className='flex justify-center items-center'>
      
          <div>
           <NavBar />
          </div>
        
    
    
    </div>
      <QuoteForm/>
      <div className='mt-20'>

      <Footer/>
      </div>
    </div>
  )
}

export default Quote
