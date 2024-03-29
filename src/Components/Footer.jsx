import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../assets/png/logo.png'
import logo2 from '../assets/png/logodark.png'
import { FaFacebookSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa"
import discord from '../assets/png/discord.png'
import discord1 from '../assets/svg/discord.svg'
import facebook from '../assets/svg/facebook.svg'
import linkedin from '../assets/svg/linkedin.svg'
import github from '../assets/svg/github.svg'



function Footer({ container = '' }) {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className={`flex flex-col justify-center items-center select-none dark:bg-primary-black bg-gray-50 w-full mt-20 font-poppins border-t border-1 border-gray-200 dark:border-none  ${container}`}>
            <div className="top w-full h-full sm:max-w-screen-xl sm:h-[268px] flex justify-center py-5 ">
                <div className="lhs w-full flex flex-col sm:justify-around justify-center sm:mt-[60px] space-y-4 pb-10 px-4 sm:px-0 pointer-events-none select-none">
                    <img
                        className="sm:w-[134px] w-[70px] pb-5 hidden dark:block  "
                        src={logo1}
                        alt="logo"
                    />

                    <img
                        className="sm:w-[134px] w-[70px] pb-5 block dark:hidden "
                        src={logo2}
                        alt="logo"
                    />
                    <div className="sm:mb-[42px] space-y-1 ">
                        <h1 className="dark:text-[#9E9E9E] text-gray-500  antialiased text-xs sm:text-base">
                            <span className="dark:text-[#FFF] text-black antialiased ">
                                Address:{' '}
                            </span>{' '}
                            JH6X+FJ8, Jampur Road, Dera Ghazi Khan, Pakistan
                        </h1>

                        <h1 className="dark:text-[#9E9E9E] text-gray-500  antialiased text-xs sm:text-base">
                            <span className="dark:text-[#FFF] text-black  antialiased ">
                                Ph:{' '}
                            </span>
                            +1 (609) 631-3330 / +92 304-2823804
                        </h1>

                        <h1 className=" dark:text-[#FFF] text-black  antialiased  text-xs sm:text-base">
                            {' '}
                            © 2023 Teksol |{' '}
                            <span className="dark:bg-gradient-to-r dark:from-[#00c6ff] dark:to-[#92EFFD] bg-gradient-to-t from-black to-[#383838] text-transparent bg-clip-text antialiased">
                                Sitemap
                            </span>
                        </h1>
                    </div>
                </div>
                <div className="rhs  flex-col sm:flex-row justify-center items-center sm:space-x-32 hidden sm:flex w-full">
                    <div className=" flex justify-center items-center antialiased select-none ">
                        <div className=" space-y-3 flex flex-col antialiased ">
                            <h1 className="dark:text-[#FFF] text-black font-semibold  antialiased cursor-pointer ">
                                Company
                            </h1>
                            <a href="/" className="dark:text-[#9E9E9E] text-gray-500 text-sm  antialiased cursor-pointer  dark:hover:text-white hover:text-black ">
                                Home
                            </a>
                            <a href="https://theteksol.com/blog/" className="dark:text-[#9E9E9E] text-gray-500 text-sm  antialiased cursor-pointer  dark:hover:text-white hover:text-black ">
                                Blog
                            </a>
                            <Link className="dark:text-[#9E9E9E] text-gray-500 text-sm  antialiased cursor-pointer  dark:hover:text-white hover:text-black" to='/career'>
                                Career
                            </Link>
                            <a href="/#contact" className="dark:text-[#9E9E9E] text-gray-500 text-sm  antialiased cursor-pointer  dark:hover:text-white hover:text-black ">
                                Contact
                            </a>
                            <Link className="dark:text-[#9E9E9E] text-gray-500 text-sm  antialiased cursor-pointer  dark:hover:text-white hover:text-black" to="/about">
                                About us
                            </Link>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center antialiased select-none  ">
                        <div className=" sm:space-y-3 flex flex-col  antialiased ">
                            <h1 className="dark:text-[#FFF] text-black font-semibold  antialiased  cursor-pointe dark:hover:text-white hover:text-black">
                                Services
                            </h1>
                            <Link to='/work/web-development' className="dark:text-[#9E9E9E] text-gray-500 text-sm antialiased cursor-pointer   dark:hover:text-white hover:text-blackhidden sm:block">
                                Web Development
                            </Link>
                            <Link to='/work/app-development' className="dark:text-[#9E9E9E] text-gray-500 text-sm  antialiased cursor-pointer  dark:hover:text-white hover:text-black ">
                                Mobile App Development
                            </Link>
                            <Link to='/work/product-design' className="dark:text-[#9E9E9E] text-gray-500 text-sm  antialiased cursor-pointer  dark:hover:text-white hover:text-black ">
                                Product Design
                            </Link>
                            <Link to='/work/digital-marketing' className="dark:text-[#9E9E9E] text-gray-500 text-sm  antialiased cursor-pointer  dark:hover:text-white hover:text-black ">
                                Digital Marketing
                            </Link>
                            <Link to='/work/ai' className="dark:text-[#9E9E9E] text-gray-500 text-sm  antialiased cursor-pointer  dark:hover:text-white hover:text-black ">
                            AI/ML
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom w-full h-full sm:h-[92px] flex sm:flex-row flex-col justify-center  bg-gray-50 dark:bg-black border-t dark:border-none  ">
                <div className="lhs flex justify-center items-center gap-4 dark:pr-12 dark:sm:pr-0 sm:py-0 py-4">
                    <a
                        href="https://www.facebook.com/theteksol/"
                        target="_blank">
                        <FaFacebookSquare className=" sm:text-4xl text-[35px]  text-black dark:hidden block " />
                    </a>
                    <a
                        href="https://pk.linkedin.com/company/theteksol"
                        target="_blank">
                        <FaLinkedin className=" sm:text-4xl text-[35px]  text-black dark:hidden block " />
                    </a>
                    <a href="https://github.com/TekSol" target="_blank">
                        <FaGithubSquare className=" sm:text-4xl text-[35px]  text-black dark:hidden block"  />
                    </a>
                    <a href="https://discord.gg/B4QvhanbMM" target="_blank" className='dark:hidden block'>
                        <img src={discord} alt="Discord" className='sm:w-[41px] sm:h-[41px]  w-9 h-[38px] text-black' />
                        
                    </a>
                    <a
                        href="https://www.facebook.com/theteksol/"
                        target="_blank "className='dark:block hidden'>
                        <img src={facebook} alt="Discord" className='sm:w-[41px] sm:h-[41px]  w-9 h-[38px] text-black' />
                        
                    </a>
                    <a
                        href="https://pk.linkedin.com/company/theteksol"
                        target="_blank "className='dark:block hidden'>
                        <img src={linkedin} alt="Discord" className='sm:w-[41px] sm:h-[41px]  w-9 h-[38px] text-black' />
                        
                    </a>
                    <a href="https://github.com/TekSol" target="_blank" className='dark:block hidden'>
                    <img src={github} alt="Discord" className='sm:w-[41px] sm:h-[41px]  w-9 h-[38px] text-black' />
                        
                    </a>
                    <a href="https://discord.gg/B4QvhanbMM" target="_blank" className='dark:block hidden'>
                        <img src={discord1} alt="Discord" className='sm:w-[41px] sm:h-[41px]  w-9 h-[38px] text-black' />
                        
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
