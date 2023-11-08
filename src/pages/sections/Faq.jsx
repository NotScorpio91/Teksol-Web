import React, {useEffect} from 'react'
import Accordion from '../../Components/Accordion'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Faq() {
  useEffect(()=>{
		AOS.init({duration:500})
	  },[])
  return (
    <div className='mt-72'>
      <h1 className='text-[#FFF] font-poppins text-5xl  leading-[80px] font-semibold antialiased pl-5 pb-16'data-aos="fade-up" >Freqfently Asked Questions</h1>
<div className='flex '>

          <div>
        <Accordion/>
        <Accordion/>
        <Accordion/>
        <Accordion/>
        <Accordion/>
          </div>
        <div>
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
