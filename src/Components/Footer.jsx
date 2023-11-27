import React from 'react'
import logo from '../assets/png/logo.png'
import facebook from '../assets/svg/facebook.svg'
import linkedin from '../assets/svg/linkedin.svg'
import github from '../assets/svg/github.svg'
import discord from '../assets/svg/discord.svg'

function Footer({container = ''}) {
    return (
        <div className={`flex flex-col justify-center items-center select-none bg-primary-black w-full mt-20 ${container}`}>
            <div className="top w-full h-full sm:max-w-screen-xl sm:h-[268px] flex justify-center py-5">
                <div className="lhs w-full flex flex-col sm:justify-around justify-center sm:mt-[60px] space-y-4 pb-10">
                    <img
                        className="sm:w-[134px] w-[70px] pb-5 "
                        src={logo}
                        alt="logo"
                    />
                    <div className="sm:mb-[42px] space-y-1 ">
                        <h1 className="text-[#9E9E9E] font-poppins antialiased text-xs sm:text-base">
                            <span className="text-[#FFF] font-poppins antialiased ">
                                Address:{' '}
                            </span>{' '}
                            JH6X+FJ8, Jampur Road, Dera Ghazi Khan, Pakistan
                        </h1>

                        <h1 className="text-[#9E9E9E] font-poppins antialiased text-xs sm:text-base">
                            <span className="text-[#FFF] font-poppins antialiased ">
                                Ph:{' '}
                            </span>
                            +1 (609) 631-3330 / +92 304-2823804
                        </h1>

                        <h1 className=" text-[#FFF] font-poppins antialiased  text-xs sm:text-base">
                            {' '}
                            © 2023 Teksol |{' '}
                            <span className="bg-gradient-to-r from-[#00c6ff] to-[#92EFFD] text-transparent bg-clip-text antialiased">
                                Sitemap
                            </span>
                        </h1>
                    </div>
                </div>
                <div className="rhs  flex-col sm:flex-row justify-center items-center sm:space-x-32 hidden sm:flex w-full">
                    <div className=" flex justify-center items-center antialiased select-none ">
                        <div className=" space-y-3 font-poppins antialiased ">
                            <h1 className="text-white font-semibold font-poppins antialiased cursor-pointer ">
                                Company
                            </h1>
                            <p className="text-[#9E9E9E] text-sm  antialiased cursor-pointer font-poppins hover:text-white   ">
                                Home
                            </p>
                            <p className="text-[#9E9E9E] text-sm  antialiased cursor-pointer font-poppins hover:text-white   ">
                                <a href="/about">About us</a>
                            </p>
                            <p className="text-[#9E9E9E] text-sm  antialiased cursor-pointer font-poppins hover:text-white   ">
                                Career
                            </p>
                            <p className="text-[#9E9E9E] text-sm  antialiased cursor-pointer font-poppins hover:text-white   ">
                                <a href="https://theteksol.com/blog/">Blog</a>
                            </p>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center antialiased select-none  ">
                        <div className=" sm:space-y-3 font-poppins antialiased ">
                            <h1 className="text-white font-semibold font-poppins antialiased  cursor-pointe hover:text-whiter ">
                                <a href="/services">Services</a>
                            </h1>
                            <p className="text-[#9E9E9E] text-sm antialiased cursor-pointer font-poppins  hover:text-white  hidden sm:block">
                                <a href="/services">Web Development</a>
                            </p>
                            <p className="text-[#9E9E9E] text-sm  antialiased cursor-pointer font-poppins hover:text-white   ">
                                <a href="/services">Mobile App Development</a>
                            </p>
                            <p className="text-[#9E9E9E] text-sm  antialiased cursor-pointer font-poppins hover:text-white   ">
                                <a href="/services">Digital Marketing</a>
                            </p>
                            <p className="text-[#9E9E9E] text-sm  antialiased cursor-pointer font-poppins hover:text-white   ">
                                <a href="/services">More</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom w-full h-full sm:h-[92px] flex sm:flex-row flex-col justify-center bg-black select-none ">
                <div className="lhs flex justify-center items-center space-x-4">
                    <a
                        href="https://www.facebook.com/theteksol/"
                        target="_blank">
                        <img
                            className=" sm:w-[40px] sm:h-[40px]  w-9 transition-all active:scale-95"
                            src={facebook}
                            alt="logo"
                        />
                    </a>
                    <a
                        href="https://pk.linkedin.com/company/theteksol"
                        target="_blank">
                        <img
                            className=" sm:w-[40px] sm:h-[40px]  w-9 transition-all active:scale-95"
                            src={linkedin}
                            alt="logo"
                        />
                    </a>
                    <a href="https://github.com/TekSol" target="_blank">
                        <img
                            className=" sm:w-[40px] sm:h-[40px]  w-9 transition-all active:scale-95"
                            src={github}
                            alt="logo"
                        />
                    </a>
                    <a href="https://discord.gg/B4QvhanbMM" target="_blank">
                        <img
                            className=" sm:w-[40px] sm:h-[40px]  w-9 transition-all active:scale-95"
                            src={discord}
                            alt="logo"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
