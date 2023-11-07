import React from 'react'
import BigCard from '../../Components/Bigcard'

function Smcards() {
  return (
    <div className=' '>
        <div className='w-[1440px] h-[725px] bg-[#18181C] flex flex-col justify-center items-center rounded-md 'data-aos="fade-up" >
          <h1 className='text-[#FFF] leading-[64px] font-poppins antialiased font-semibold text-[48px] w-[567px] h-[128px] my-20  'data-aos="fade-up">Companies we Worked With in SInce 2015</h1>
          <div className='flex space-x-5 'data-aos="fade-up">
            <div className='w-[160px] h-[92px] rounded-[10px] bg-[#000]'></div>
            <div className='w-[160px] h-[92px] rounded-[10px] bg-[#000]'></div>
            <div className='w-[160px] h-[92px] rounded-[10px] bg-[#000]'></div>
            <div className='w-[160px] h-[92px] rounded-[10px] bg-[#000]'></div>
            <div className='w-[160px] h-[92px] rounded-[10px] bg-[#000]'></div>
            <div className='w-[160px] h-[92px] rounded-[10px] bg-[#000]'></div>
            
          </div>
          <div className='relative top-32 '>
            <BigCard/>
          </div>
        </div>
    </div>
  )
}

export default Smcards