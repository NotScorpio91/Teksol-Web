import React, {useEffect} from 'react'
import logo from '../assets/png/logo.png'
import facebook from '../assets/svg/facebook.svg'
import linkedin from '../assets/svg/linkedin.svg'
import github   from '../assets/svg/github.svg'
import discord   from '../assets/svg/discord.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Footer() {
  useEffect(()=>{
		AOS.init({duration:2000})
	  },[])
  return (
    <div ClassName='flex justify-center items-center '>
      <div className=' flex flex-col justify-center items-center pt-40'data-aos="fade-up">

        <div className="top w-[1440px] h-[268px] bg-[#18181C] flex justify-center space-x-80 rounded-xl">
          <div className="lhs flex flex-col justify-between mt-[60px] ">
            <img className='w-[134px] ' src={logo} alt="logo" />
            <div className='mb-[42px]'>
              <h1 className='text-[#9E9E9E] font-poppins antialiased'><b className='text-[#FFF] font-poppins antialiased'>Address: </b> JH6X+FJ8, Jampur Road, Dera Ghazi Khan, Pakistan</h1>
           
              <h1 className='text-[#9E9E9E] font-poppins antialiased'><b className='text-[#FFF] font-poppins antialiased '>Ph: </b>+1 (609) 631-3330 / +92 304-2823804</h1>
          
              <h1 className=' text-[#FFF] font-poppins antialiased '> © 2023 Teksol | <span className='bg-gradient-to-r from-[#00c6ff] to-[#92EFFD] text-transparent bg-clip-text antialiased'>Sitemap</span></h1>

            </div> 
          </div>

          <div className="rhs flex justify-center items-center space-x-40">

           
            <div className=' flex justify-center items-center antialiased pb-14 pl-5 ' >
              <div className=' space-y-3 font-poppins antialiased '>
                <h1 className='text-white font-semibold font-poppins antialiased '>Company</h1>
                <p className='text-[#9E9E9E] text-sm  antialiased cursor-pointer font-poppins ' >Home</p>
                <p className='text-[#9E9E9E] text-sm  antialiased cursor-pointer font-poppins ' >About us</p>
                <p className='text-[#9E9E9E] text-sm  antialiased cursor-pointer font-poppins ' >Career</p>
                <p className='text-[#9E9E9E] text-sm  antialiased cursor-pointer font-poppins ' ><a href="https://theteksol.com/blog/">Blog</a></p>
              </div>
            </div>
            <div className=' flex justify-center items-center antialiased  ' >
              <div className=' space-y-3 font-poppins antialiased '>
                <h1 className='text-white font-semibold font-poppins antialiased '>Services</h1>
                <p className='text-[#9E9E9E] text-sm antialiased cursor-pointer font-poppins  ' >Web Development</p>
                <p className='text-[#9E9E9E] text-sm  antialiased cursor-pointer font-poppins ' >Mobile App Development</p>
                <p className='text-[#9E9E9E] text-sm  antialiased cursor-pointer font-poppins ' >UI/UX Consulting</p>
                <p className='text-[#9E9E9E] text-sm  antialiased cursor-pointer font-poppins ' >Digital Marketing</p>
                <p className='text-[#9E9E9E] text-sm  antialiased cursor-pointer font-poppins ' >AI/ML</p>
                <p className='text-[#9E9E9E] text-sm  antialiased cursor-pointer font-poppins ' >Custom Solutions</p>

              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom w-[1440px] h-[92px] flex justify-center space-x-[730px]  bg-black ">
          <div className="rhs text-[#9E9E9E] font-poppins flex justify-center items-center antialiased  ">
            <p className='antialiased font-poppins'>All Rights Reservd © 2023 Teksol 2023</p>
          </div>
          <div className="lhs flex justify-center items-center space-x-4">
      
            <a href="https://www.facebook.com/theteksol/" target='_blank' ><img className='w-[40px] h-[40px] transition-all active:scale-95'  src={facebook} alt="logo" /></a>
            <a href="https://pk.linkedin.com/company/theteksol" target='_blank'><img className='w-[40px] h-[40px] transition-all active:scale-95' src={linkedin} alt="logo" /></a>
            <a href="https://github.com/TekSol" target='_blank'><img className='w-[40px] h-[40px] transition-all active:scale-95'  src={github} alt="logo" /></a>
            <a href="https://discord.gg/B4QvhanbMM" target='_blank'><img className='w-[40px] h-[40px] transition-all active:scale-95'  src={discord} alt="logo" /></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
