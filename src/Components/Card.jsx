import React from 'react'
import  svg  from '../assets/svg/svg.svg' 
 
function Card() {
  return (
    <div className='text-white my-5 transition-all active:scale-95' >
    <div className=' bg-[#18181C] w-[350px] h-[371px] rounded-2xl flex justify-center flex-col items-center space-y-8'>
      <img className='w-[104px] h-[104px] pb-7' src={svg} alt="" />
             <h1 className='text-white font-semibold font-poppins antialiased '>Fully Customizable</h1>
      
             
      <p className='text-sm text-[#9E9E9E] text-center w-[303px] h-[83px] font-poppins antialiased '>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem</p>
      </div>
    </div>
  )
}

export default Card
