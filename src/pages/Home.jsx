import React from 'react'
import Logo from '../Components/Logo'
import Button from '../Components/Button'
import MainSection from './sections/MainSection'
import Infoform from '../Components/Infoform'
import Footer from '../Components/Footer'
import bg from '../assets/svg/bg.svg'
import Cards from './sections/Cards'
import Smcards from './sections/Smcards'
import Faq from './sections/Faq'
function Home() {

 
  return (
    <div className={`flex flex-col justify-center items-center bg-[url('${bg}')]`}>
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
      <MainSection/>
      <Cards/>
      <Smcards/>
      <Faq/>
      <Infoform/>
      <Footer/>
    </div>
  )
}

export default Home
