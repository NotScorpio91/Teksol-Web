import React from 'react'
import Card from '../../Components/Card'

function Cards() {
  return (
    <div className='flex justify-center items-center pt-24'>
      <div className='w-[1200px] space-y-8'> 
        <h1 className='text-[#FFF] font-poppins text-[48px]  font-semibold leading-[80px] w-[342px] h-[80px] cursor-text antialiased '>Feature Boxes</h1>
        <p className='text-[#9E9E9E] font-poppins text-[18px]  font-normal leading-[28px] w-[577px] h-[66px] cursor-text antialiased'>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </p>
        <div className='grid grid-cols-3 cursor-pointer pb-52 '>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>

      </div>
    </div>
  )
}

export default Cards
