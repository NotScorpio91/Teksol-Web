import React from 'react'
import Logo from '../../Components/Logo'
import Button from '../../Components/Button'
import Quote from '../../Components/Quote'

function Quoteform() {
  return (
    <div>
      <nav className='flex justify-between items-center w-[1200px] h-[96px]'>
        <div className="L.H.S">
        <a href="#"><Logo/></a>
        </div>
        <div className="R.H.S flex space-x-12 items-center">
          <div>
            <ul className=' flex justify-center items-center space-x-12'>
              <a className='text-[#9E9E9E] font-poppins font-bold leading-[28px] text-[14px] cursor-pointer text-center hover:text-[#FFF] antialiased' href="#">Home</a>
              <a className='text-[#9E9E9E] font-poppins font-bold leading-[28px] text-[14px] cursor-pointer text-center hover:text-[#FFF] antialiased' href="#">About</a>
              <a className='text-[#9E9E9E] font-poppins font-bold leading-[28px] text-[14px] cursor-pointer text-center hover:text-[#FFF] antialiased' href="#">Blog</a>
              <a className='text-[#9E9E9E] font-poppins font-bold leading-[28px] text-[14px] cursor-pointer text-center hover:text-[#FFF] antialiased' href="#">Contact</a>
              <a className='text-[#9E9E9E] font-poppins font-bold leading-[28px] text-[14px] cursor-pointer text-center hover:text-[#FFF] antialiased' href="#">Services</a>
            </ul>
          </div>
          <div>
             <Button/>
          </div>
        </div>
      </nav>

      <Quote/>
      <Footer/>
    </div>
  )
}

export default Quoteform
