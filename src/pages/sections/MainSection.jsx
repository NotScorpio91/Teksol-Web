import React from 'react'
import Button from '../../Components/Button'


function MainSection() {
  return (
    <div className='Blackbg flex flex-col justify-center items-center pt-32'>
        <div className='w-[1200px]'>
            <div className="T.S flex flex-col justify-center items-center space-y-1 ">
                <h1 className='text-[#FFF] font-poppins text-8xl leading-[80px] font-black cursor-text  h-[160px] text-center antialiased ' >Scale up online.</h1>
                <p className='text-gray-300 font-poppins text-xl font-medium leading-7 w-[577px] pb-14 text-center antialiased '>We’re a team of professionals supporting startups to scale up their businesses online.
             </p>
                <Button title='Get Quote' className='font-poppins font-extrabold text-xl'/>
            </div>
            <div className="B.S flex justify-center items-center my-[85px]">
                <div className='w-[866px] h-[553px] rounded-[28px] bg-[#131415] grid items-center'>

                </div>
            </div>
        </div>
    </div>

  )
}

export default MainSection
