import React, {useEffect} from 'react'
import Accordion from '../../Components/Accordion'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Faq() {
  useEffect(()=>{
		AOS.init({duration:2000})
	  },[])
  return (
    <div className='mt-72'>
      <h1 className='text-[#FFF] font-poppins text-5xl  leading-[80px] font-semibold antialiased pl-5 pb-16'data-aos="fade-up" >Freqfently Asked Questions</h1>
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
