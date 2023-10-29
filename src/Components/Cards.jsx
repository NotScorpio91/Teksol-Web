import React from 'react'
import  svg  from '../assets/svg/svg.svg' 
 
function Cards() {
  return (
    <div className='card text-white flex justify-center pt-56 ' >
    <div className=' bg-[#18181C] w-[350px] h-[371px] rounded-2xl flex justify-center flex-col items-center'>
      <img className='w-[104px] h-[104px] pb-7 mb-16' src={svg} alt="" />
             <h1 className='text-white font-semibold font-poppinsantialiased '>Sections</h1>
      <h1 className='font-bold relative bottom-12 font-poppins '>Fully Customizable</h1>
             <h1 className='text-white font-semibold font-poppinsantialiased '>Sections</h1>
      <p className='text-sm text-[#9E9E9E] text-center w-[303px] h-[83px] font-poppins '>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem</p>
      </div>
    </div>
  )
}

export default Card
