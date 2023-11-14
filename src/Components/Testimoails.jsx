import React from 'react'
import pfp  from  '../assets/png/pfp.png'
import { FaStar } from "react-icons/fa6";

function Testimoails() {
  return (
    <div className='flex justify-center'>
      <div >
        <div className=' w-[540px] h-[337px] rounded-[20px] bg-[#0A0A0A] pl-9 pt-5'>
            <p className='text-[#FFF] font-poppins w-[450px] h-[186px]
            text-lg text-left leading-[38px] scale-[0.9] mb-3 antialiased '>Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.</p>
            <div className=' pl- ml-5 w-[400px] h-1 border-t border-[#404047] pt-4' >
                <div className='flex space-x-[71px]'>
                <div className="lhs flex space-x-4">
                <img className='w-[50px] h-[50px]' src={pfp} alt="" />
                <div>
                <h1 className='text-[#FFF] font-poppins font-semibold text-xl leading-[32px] antialiased   '>Jane Doe</h1>
                <p className='text-[#9E9E9E] font-poppins leading-7 text-[14px] an* antialiased   '>CEO of Inkyy.com</p>
                </div>
                </div>
                <div className="rhs flex space-x-2 items-center">
                <FaStar color={'#c4aa37'} size={22}/>
                <FaStar color={'#c4aa37'} size={22}/>
                <FaStar color={'#c4aa37'} size={22}/>
                <FaStar color={'#c4aa37'} size={22}/>
                <FaStar color={'#c4aa37'} size={22}/>
                
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimoails
