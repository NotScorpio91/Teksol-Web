import React from 'react'
import Logo from '../Components/Logo'
import Button from '../Components/Button'
import {BsCaretDownFill} from 'react-icons/bs'

function NavBar() {
  const Mouseover = (()=>{
    
  },[]);
  return (
    <div className='flex justify-center items-center ' >
    
          <nav className='flex justify-center items-center space-x-[700px]  w-[100vw] h-[85px] bg-transparent ring-1 ring-white fixed top-0  backdrop-blur-md z-50'>
        <div className="L.H.S">
        <a href="/"><Logo/></a>
        </div>
        <div className="R.H.S flex space-x-12 items-center">
      
          <div>
            <ul className=' flex justify-center items-center space-x-12'>
              <a className='text-[#9E9E9E] font-poppins font-bold leading-[28px] text-[14px] cursor-pointer text-center hover:text-[#FFF] antialiased flex justify-center items-center group  ' href="/">Company
              <BsCaretDownFill className='hover:rotate-180 hover:transition-all hover:hidden group-hover:rotate-180 '  />
              <div className='w-96 h-40 bg-white group-hover:flex hidden absolute top-40 ' >

              </div>
              </a>
              <a className='text-[#9E9E9E] font-poppins font-bold leading-[28px] text-[14px] cursor-pointer text-center hover:text-[#FFF] antialiased' href="/">Services</a>
              <a className='text-[#9E9E9E] font-poppins font-bold leading-[28px] text-[14px] cursor-pointer text-center hover:text-[#FFF] antialiased' href="/HireDev">Hire developers</a>
              <a className='text-[#9E9E9E] font-poppins font-bold leading-[28px] text-[14px] cursor-pointer text-center hover:text-[#FFF] antialiased' href="https://theteksol.com/blog/">Blog</a>
            </ul>
          </div>
          <div>
             
             <a href="https://calendly.com/darkcoderse/30min?month=2023-11"><Button title='Schedule Meeting '/></a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
