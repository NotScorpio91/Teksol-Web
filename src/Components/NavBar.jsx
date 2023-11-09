import React from 'react'
import Logo from '../Components/Logo'
import Button from '../Components/Button'
import Services from "./Services"
import Company from './Company'
function NavBar() {
  const Mouseover = (()=>{
    
  },[]);
  return (
    <div className='flex justify-center items-center ' >
    
          <nav className='flex justify-center items-center space-x-[700px]  w-[100vw] h-[64px] bg-black bg-opacity-50 ring-1 ring-gray-950 fixed top-0  backdrop-blur-[12px] z-50'>
        <div className="L.H.S">
        <a href="/"><Logo/></a>
        </div>
        <div className="R.H.S flex space-x-12 items-center">
      
          <div>
            <ul className=' flex justify-center items-center space-x-12 '>
              
              <Company/>
              <Services />
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
