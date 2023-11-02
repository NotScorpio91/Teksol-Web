import React from 'react'
import logoo  from  '../assets/svg/logoo.svg'
import twitter from  '../assets/svg/twitter.svg'
import linkedin from  '../assets/svg/linkedin.svg'
import instagram from '../assets/svg/instagram.svg'

function Footer() {
  return (
    <div ClassName='flex justify-center items-center '>
      <div className=' flex flex-col justify-center items-center pt-40'>

      <div className="top w-[1440px] h-[268px] bg-[#18181C] flex justify-center space-x-80 rounded-xl">
        <div className="lhs flex flex-col justify-center space-y-6">
          <img className='w-[56px] h-[45.073px]' src={logoo} alt="logo"/>
          
             <h1 className='text-white font-semibold font-poppins antialiased '>Sections</h1>
          <p className='w-[303px] h-[83px] text-[#9E9E9E] font-poppins antialiased '>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </p>  
        </div>

        <div className="rhs flex justify-center items-center space-x-32">
             
            <div className=' space-y-4 font-poppins '>
             <h1 className='text-white font-semibold font-poppins antialiased '>Sections</h1>
             <p className='text-[#9E9E9E] text-sm antialiased' >Home</p>
             <p className='text-[#9E9E9E] text-sm antialiased' >Section One</p>
             <p className='text-[#9E9E9E] text-sm antialiased' >Section Two</p>
             <p className='text-[#9E9E9E] text-sm antialiased' >Section Tree</p>
            </div>
            <div className=' flex justify-center items-center antialiased ' >
            <div className=' space-y-4 font-poppins antialiased '>
             <h1 className='text-white font-semibold font-poppins antialiased '>Sections</h1>
             <p className='text-[#9E9E9E] text-sm  antialiased ' >Home</p>
             <p className='text-[#9E9E9E] text-sm  antialiased ' >Section One</p>
             <p className='text-[#9E9E9E] text-sm  antialiased ' >Section Two</p>
             <p className='text-[#9E9E9E] text-sm  antialiased ' >Section Tree</p>
            </div>
            </div>
            <div className=' flex justify-center items-center antialiased ' >
            <div className=' space-y-4 font-poppins antialiased '>
             <h1 className='text-white font-semibold font-poppins antialiased '>Sections</h1>
             <p className='text-[#9E9E9E] text-sm antialiased  ' >Home</p>
             <p className='text-[#9E9E9E] text-sm  antialiased ' >Section One</p>
             <p className='text-[#9E9E9E] text-sm  antialiased ' >Section Two</p>
             <p className='text-[#9E9E9E] text-sm  antialiased ' >Section Tree</p>
            </div>
            </div>
        </div>
      </div>
      <hr />
      <div className="bottom w-[1440px] h-[92px] flex justify-center space-x-[730px]  bg-black ">
        <div className="rhs text-[#9E9E9E] font-poppins flex justify-center items-center antialiased  ">
        <p className='antialiased font-poppins'>All Rights Reservd Inkyy.com 2022</p>
        </div>
        <div className="lhs flex justify-center items-center space-x-4">
         <img className='w-[40px] h-[40px]' src={twitter} alt="logo" />
         <img className='w-[40px] h-[40px]' src={linkedin} alt="logo" />
         <img className='w-[40px] h-[40px]' src={instagram} alt="logo" />
        </div>
      </div>

      </div>
    </div>
  )
}

export default Footer
