import React from 'react'
import Accordion from '../../Components/Accordion'

function Faq() {

  return (
    <div className='  w-full sm:w-[1200px] ' >
      <h1 className='text-[#FFF] font-poppins sm:text-5xl  sm:leading-[80px] font-semibold antialiased mx-4 sm:text-left  sm:pl-5 pb-16' >Freqfently Asked Questions</h1>
<div className='flex flex-col sm:flex-row justify-center items-center mx-4 '>

          <div className='flex justify-center flex-col w-full' >
        <Accordion/>
        <Accordion/>
        <Accordion/>
        <Accordion/>
        <Accordion/>
          </div>
             <div className='flex justify-center flex-col w-full' >
        <Accordion/>
        <Accordion/>
        <Accordion/>
        <Accordion/>
        <Accordion/>
          </div>
    
</div>
   
    </div>
  )
}

export default Faq
