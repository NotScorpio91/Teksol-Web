import React from 'react'
import logo from '../assets/png/logo.png'
import twitter from '../assets/svg/twitter.svg'
import linkedin from '../assets/svg/linkedin.svg'
import instagram from '../assets/svg/instagram.svg'

function Footer() {
  return (
    <div ClassName='flex justify-center items-center '>
      <div className=' flex flex-col justify-center items-center pt-40'>

        <div className="top w-[1440px] h-[268px] bg-[#18181C] flex justify-center space-x-80 rounded-xl">
          <div className="lhs flex flex-col justify-between mt-[60px] ">
            <img className='w-[134px] ' src={logo} alt="logo" />
            <div className='mb-[42px]'>
              <h1 className='text-[#9E9E9E] font-poppins antialiased'><b className='text-[#FFF] font-poppins antialiased'>Address: </b> JH6X+FJ8, Jampur Road, Dera Ghazi Khan, Pakistan</h1>
           
              <h1 className='text-[#9E9E9E] font-poppins antialiased'><b className='text-[#FFF] font-poppins antialiased '>Ph: </b>Ph: +1 (609) 631-3330 / +92 304-2823804</h1>
          
              <h1 className=' text-[#FFF] font-poppins antialiased '> © 2023 Teksol | <span className='bg-gradient-to-r from-[#FF9898] to-[#8054FF] text-transparent bg-clip-text antialiased'>Sitemap</span></h1>

            </div> 
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
