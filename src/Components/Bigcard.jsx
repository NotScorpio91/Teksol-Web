import React, { useEffect } from 'react'
import  bigcard from '../assets/svg/bigcard.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Bigcard() {
  useEffect(()=>{
    AOS.init({duration:500})
  },[])
  return (
    <div className='flex justify-center 'data-aos="fade-up">
      <div  className=' bigcardbg  w-[1110px] h-[425px] rounded-[20px] flex justify-between  '>

        <div className="lhs flex flex-col  text-start justify-center items pl-16 pt-11 space-y-4">
        <h1 className=' w-[182px] h-[32px] text-[#FFF] font-poppins font-normal  antianalized  'data-aos="fade-up">Love our Our Tool?</h1>
        <div className='flex flex-col w-[499px] h-[130px] space-y-4 '>
        <h1 className=' text-[#FFF] font-poppins font-semibold text-5xl antianalized'data-aos="fade-up">Fell Free to Join our</h1>
        <h1 className=' text-[#FFF] font-poppins font-semibold text-5xl'data-aos="fade-up"> 15 Days Free Trial</h1>
        </div>
       
        <div className='flex ' data-aos="fade-up">
        <button className='bg-black text-white hover:text-black hover:bg-white   rounded-[5px] w-[198px] h-[44px] font-poppins font-[400px] antialiased transition-all active:scale-95  '>Get Started</button>
        </div>

        </div>

        <div className="rhs flex pt-10  overflow-hidden" data-aos="fade-up">
            <img src={bigcard} alt="bg" />
        </div>
        
      </div>
    </div>
  )
}

export default Bigcard
