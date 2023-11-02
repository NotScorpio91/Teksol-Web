import React from 'react'
import Accordion from '../../Components/Accordion'

function Faq() {
  return (
    <div className='mt-72'>
      <h1 className='text-[#FFF] font-poppins text-5xl  leading-[80px] font-semibold antialiased pl-5 pb-16' >Freqfently Asked Questions</h1>
      <span className='grid grid-cols-2'>
        <Accordion/>
        <Accordion/>
        <Accordion/>
        <Accordion/>
        <Accordion/>
        <Accordion/>
        <Accordion/>
        <Accordion/>
        <Accordion/>
        <Accordion/>
      </span>
    </div>
  )
}

export default Faq
