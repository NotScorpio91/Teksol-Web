import React from 'react'
import BigCard from '../../Components/Bigcard'

function Meeting() {
  return (
    <div className=' '>
        <div className='w-[1440px] h-[725px] bg-[#0A0A0A] flex flex-col justify-center items-center rounded-md font-inter '>
          <h1 className='text-[#FFF] leading-[64px]  antialiased font-semibold text-[48px] w-[567px] h-[128px] my-20  '>Companies we Worked With in SInce 2015</h1>
          <div className='flex space-x-5 '>
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

export default Meeting