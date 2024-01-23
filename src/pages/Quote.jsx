import React from 'react'
import NavBar from '../Components/NavBar'
import MobileNavBar from '../Components/MobileNavBar'
import Footer from '../Components/Footer'
import Button from '../Components/Button'
import { PiPlanetLight } from 'react-icons/pi'
import { PiTestTubeBold } from 'react-icons/pi'
import { FaRobot } from 'react-icons/fa'
import { CiMobile3 } from 'react-icons/ci'
import { BiSolidPen } from 'react-icons/bi'
import { FaWandMagicSparkles } from 'react-icons/fa6'
import { BsCheckCircle } from 'react-icons/bs'

function Quote() {
    return (
        <div className="">
      
        <NavBar />
        <MobileNavBar />

        <div className="dark:bg-[#151515] bg-white  mt-16 sm:mt-14  sm:mb-52 font-poppins ">
            <div className="dark:bg-gradient-to-tr dark:from-gray-800 dark:to-slate-800 flex flex-col justify-center items-start sm:items-center px-4
             sm:py-20 py-10  bg-gradient-to-t from-gray-50 to-gray-300  ">
                <h2 className=" sm:text-5xl text-3xl tracking-tight font-normal sm:pr-52 text-black dark:text-[#FFF]  antialiased ">
                    Get a Quote?
                </h2>
                <p className=" font-light text-gray-500  dark:text-gray-300 text-sm sm:text-base  w-full sm:w-[500px]  antialiased  ">
                    Your answer will help us better understanding your
                    situation.
                </p>
            </div>

            <div className=" sm:flex  sm:justify-center px-4 pt-10 sm:pt-16">
                <section className=''>
                    <form action="#" className="">
                        <div>
                            <div className="dark:text-white text-black py-3 text-base]  antialiased  ">
                                <label htmlFor="">What's your name? </label>
                            </div>
                            <input
                                type="text"
                                id="name"
                                className="shadow-sm dark:bg-[#0A0A0A]  dark:text-white bg-gray-50 text-black text-sm rounded-[5px]  block w-full sm:w-[500px] py-[12px] px-[14px] placeholder-[#9E9E9E] outline outline-1 dark:focus:outline-white outline-gray-300 dark:focus:outline-1 dark:outline-none  antialiased"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div>
                            <div className="dark:text-white text-black py-3 text-base]  antialiased  ">
                                <label htmlFor="">Email</label>
                            </div>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm dark:bg-[#0A0A0A]  dark:text-white bg-gray-50 text-black text-sm rounded-[5px]  block w-full sm:w-[500px] py-[12px] px-[14px] placeholder-[#9E9E9E] outline outline-1 dark:focus:outline-white outline-gray-300 dark:focus:outline-1 dark:outline-none  antialiased "
                                placeholder="Your email"
                                required
                            />
                        </div>
                        <div>
                            <div className="dark:text-white text-black py-3 text-base]  antialiased ">
                                <label htmlFor="">Phone</label>
                            </div>
                            <input
                                type="search"
                                id="phone"
                                className="shadow-sm dark:bg-[#0A0A0A]  dark:text-white bg-gray-50 text-black text-sm rounded-[5px]  block w-full sm:w-[500px] py-[12px] px-[14px] placeholder-[#9E9E9E] outline outline-1 dark:focus:outline-white outline-gray-300 dark:focus:outline-1 dark:outline-none  antialiased"
                                placeholder="Your phone"
                                required
                            />
                        </div>
                        <div>
                            <h1 className="dark:text-white text-black py-3 text-base]  text-lg pt-12 antialiased ">
                                What service do you require?{' '}
                            </h1>
                            <p className="dark:text-gray-300 text-gray-500  antialiased text-sm ">
                                Choose at least one option:
                            </p>
                            <div className="flex justify-around flex-col sm:flex-row  sm:justify-between  items-center mb-10 select-none">
                                <div className="L.H.S w-full sm:w-[245px]">
                                    <label className="relative cursor-pointer ">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            name="size-choice"
                                        />
                                        <div className=" rounded-[5px]  shadow-xl ring ring-transparent grayscale transition-all sm:active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">
                                            <div className="my-3 pl-4 antialiased dark:bg-[#0A0A0A] bg-gray-50 rounded-[5px] w-full sm:w-[245px] py-[12px] text-white flex items-center ">
                                                <i className="dark:text-white text-black antialiased mx-[6px]">
                                                    <PiPlanetLight />
                                                </i>
                                                <p className="dark:text-white text-black  font-medium">
                                                    Web Development
                                                </p>
                                            </div>
                                        </div>
                                        <span className="absolute top-[29px] right-3 z-10 opacity-0 transition-all peer-checked:opacity-100 dark:text-white text-black ">
                                            <BsCheckCircle />
                                        </span>
                                    </label>
                                    <label className="relative cursor-pointer ">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            name="size-choice"
                                        />
                                        <div className=" rounded-[5px]  shadow-xl ring ring-transparent grayscale transition-all sm:active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">
                                            <div className="my-3 pl-4 antialiased dark:bg-[#0A0A0A] bg-gray-50 rounded-[5px] w-full sm:w-[245px] py-[12px] dark:text-white text-black flex items-center ">
                                                <i className="dark:text-white text-black antialiased mx-[6px]">
                                                    <PiTestTubeBold />
                                                </i>
                                                <p className="dark:text-white text-black font-medium">
                                                    QA & Testing
                                                </p>
                                            </div>
                                        </div>
                                        <span className="absolute top-[18px] right-3 z-10 opacity-0 transition-all peer-checked:opacity-100 dark:text-white text-black">
                                            <BsCheckCircle />
                                        </span>
                                    </label>
                                    <label className="relative cursor-pointer ">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            name="size-choice"
                                        />
                                        <div className=" rounded-[5px]  shadow-xl ring ring-transparent grayscale transition-all sm:active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">
                                            <div className="my-2 pl-4  antialiased dark:bg-[#0A0A0A] bg-gray-50 rounded-[5px] w-full sm:w-[245px] py-[12px] dark:text-white text-black flex items-center ">
                                                <i className="dark:text-white text-black antialiased mx-[6px]">
                                                    <FaRobot />
                                                </i>
                                                <p className="dark:text-white text-black  font-medium">
                                                    ML & AI
                                                </p>
                                            </div>
                                        </div>
                                        <span className="absolute top-[18px] right-3 z-10 opacity-0 transition-all peer-checked:opacity-100 dark:text-white text-black">
                                            <BsCheckCircle />
                                        </span>
                                    </label>
                                </div>

                                <div className="R.H.S w-full sm:w-[245px]">
                                    <label className="relative cursor-pointer ">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            name="size-choice"
                                        />
                                        <div className=" rounded-[5px]  shadow-xl ring ring-transparent grayscale transition-all sm:active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">
                                            <div className="my-3 pl-4 antialiased dark:bg-[#0A0A0A] bg-gray-50 rounded-[5px] w-full sm:w-[245px] py-[12px] dark:text-white text-black flex items-center ">
                                                <i className="dark:text-white text-black antialiased mx-[6px]">
                                                    <CiMobile3 />
                                                </i>
                                                <p className="dark:text-white text-black  font-medium">
                                                    Mobile App
                                                </p>
                                            </div>
                                        </div>
                                        <span className="absolute top-[29px] right-3 z-10 opacity-0 transition-all peer-checked:opacity-100 dark:text-white text-black ">
                                            <BsCheckCircle />
                                        </span>
                                    </label>
                                    <label className="relative cursor-pointer ">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            name="size-choice"
                                            />
                                        <div className=" rounded-[5px]  shadow-xl ring ring-transparent grayscale transition-all sm:active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">
                                            <div className="my-3 pl-4 antialiased dark:bg-[#0A0A0A] bg-gray-50 rounded-[5px] w-full sm:w-[245px] py-[12px] dark:text-white text-black flex items-center ">
                                                <i className="dark:text-white text-black antialiased mx-[6px]">
                                                    <BiSolidPen />
                                                </i>
                                                <p className="dark:text-white text-black  font-medium">
                                                    UI / UX
                                                </p>
                                            </div>
                                        </div>
                                        <span className="absolute top-[18px] right-3 z-10 opacity-0 transition-all peer-checked:opacity-100 dark:text-white text-black">
                                            <BsCheckCircle />
                                        </span>
                                    </label>
                                    <label className="relative cursor-pointer ">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            name="size-choice"
                                        />
                                        <div className=" rounded-[5px]  shadow-xl ring ring-transparent grayscale transition-all sm:active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">
                                            <div className="my-2 pl-4 antialiased dark:bg-[#0A0A0A] bg-gray-50 rounded-[5px] w-full sm:w-[245px] py-[12px] dark:text-white text-black flex items-center ">
                                                <i className="dark:text-white text-black antialiased mx-[6px]">
                                                    <FaWandMagicSparkles />
                                                </i>
                                                <p className="dark:text-white text-black  font-medium">
                                                    Custom Solution
                                                </p>
                                            </div>
                                        </div>
                                        <span className="absolute top-[18px] right-3 z-10 opacity-0 transition-all peer-checked:opacity-100 dark:text-white text-black ">
                                            <BsCheckCircle />
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-2 mb-9">
                            <div className="text-white py-3 text-base]  antialiased ">
                                <label htmlFor="">Description</label>
                            </div>
                            <textarea
                                id="message"
                                rows="6"
                                className="block  py-[12px] px-[14px] h-[120px] w-full sm:w-[500px] text-sm outline-none focus:outline focus:outline-1 focus:outline-white shadow-sm dark:bg-[#0A0A0A]  dark:text-white bg-gray-50 text-black  placeholder-[#9E9E9E] outline outline-1 dark:focus:outline-white outline-gray-300 dark:focus:outline-1 dark:outline-none  antialiased "
                                placeholder="Write a quick overview of your project"></textarea>
                        </div>

                        <Button title="Submit" />
                    </form>
                </section>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default Quote

