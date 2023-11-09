import React,{useEffect} from 'react'
import Button from './Button'
import { PiPlanetLight } from 'react-icons/pi'
import { PiTestTubeBold } from 'react-icons/pi'
import { FaRobot } from 'react-icons/fa'
import { CiMobile3 } from 'react-icons/ci'
import { BiSolidPen } from 'react-icons/bi'
import { FaWandMagicSparkles } from 'react-icons/fa6'
import { BsCheckCircle } from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';
function QuoteForm() {
    useEffect(()=>{
        AOS.init({duration:500})
      },[])
    return (
        <div className='bg-black h-screen'>

            <div className='flex  justify-center mt-60 '>
                <div className="">
                    <section >
                        <div className=" flex ">
                            <div className="">
                                <h2 className="mb-4 text-5xl tracking-tight font-normal  text-[#FFF] font-poppins antialiased "data-aos="fade-up">Get a Quote?</h2>
                                <p className="mb-9 font-light  text-gray-300  w-[500px] font-poppins antialiased  "data-aos="fade-up">Your answer will help us better understanding your situation.</p>
                                <form action="#" className="">
                                    <div>
                                        <div className='text-white py-3 text-base] font-poppins antialiased  ' data-aos="fade-up">
                                            <label htmlFor="">What's your name? </label>
                                        </div>
                                        <input type="text" id="name" className="shadow-sm bg-[#18181C] border-gray-300 text-[#9E9E9E] text-sm rounded-[5px] focus:ring-primary-500 focus:border-primary-500 block w-[500px] py-[12px] px-[28px] placeholder-[#9E9E9E] font-poppins antialiased " placeholder="Your name" required data-aos="fade-up" />
                                    </div>
                                    <div>
                                        <div className='text-white py-3 text-base] font-poppins antialiased  ' data-aos="fade-up">
                                            <label htmlFor="">Email</label>
                                        </div>
                                        <input type="email" id="email" className="shadow-sm bg-[#18181C] border-gray-300 text-[#9E9E9E] text-sm rounded-[5px] focus:ring-primary-500 focus:border-primary-500 block w-[500px] py-[12px] px-[28px] placeholder-[#9E9E9E] font-poppins antialiased " placeholder="Your email" required data-aos="fade-up" />
                                    </div>
                                    <div>
                                        <div className='text-white py-3 text-base] font-poppins antialiased 'data-aos="fade-up" >
                                            <label htmlFor="">Phone</label>
                                        </div>
                                        <input type="search" id="phone" className="shadow-sm bg-[#18181C] border-gray-300 text-[#9E9E9E] text-sm rounded-[5px] focus:ring-primary-500 focus:border-primary-500 block w-[500px] py-[12px] px-[28px] placeholder-[#9E9E9E] font-poppins antialiased " placeholder="Your phone" required data-aos="fade-up" />
                                    </div>
                                    <div data-aos="fade-up">
                                        <h1 className='text-white py-3 text-base] font-poppins text-lg pt-12 antialiased ' >What service do you require? </h1>
                                        <p className='text-gray-300 font-poppins antialiased text-sm pb-1' >Choose at least one option:</p>
                                        <div className='flex  justify-between  items-center my-10'>
                                            <div className="L.H.S ">
                                                <label className="relative cursor-pointer "data-aos="fade-up" >
                                                    <input type="checkbox" className="peer sr-only" name="size-choice" />
                                                    <div className=" rounded-[5px]  shadow-md ring ring-transparent grayscale transition-all active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">

                                                        <div className='my-3 pl-4 antialiased bg-[#18181c] rounded-[5px] w-[245px] py-[12px] text-white flex items-center '>
                                                            <i className='text-white antialiased mx-[6px]'><PiPlanetLight /></i>
                                                            <p className="text-white font-poppins font-medium" >Web Development</p>
                                                        </div>

                                                    </div>
                                                    <span className="absolute top-[29px] right-3 z-10 opacity-0 transition-all peer-checked:opacity-100 text-white ">
                                                        <BsCheckCircle />
                                                    </span>
                                                </label>
                                                <label className="relative cursor-pointer " data-aos="fade-up">
                                                    <input type="checkbox" className="peer sr-only" name="size-choice" />
                                                    <div className=" rounded-[5px]  shadow-md ring ring-transparent grayscale transition-all active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">

                                                        <div className='my-3 pl-4 antialiased bg-[#18181c] rounded-[5px] w-[245px] py-[12px] text-white flex items-center '>
                                                            <i className='text-white antialiased mx-[6px]'><PiTestTubeBold /></i>
                                                            <p className="text-white font-poppins font-medium">QA & Testing</p>
                                                        </div>

                                                    </div>
                                                    <span className="absolute top-[18px] right-3 z-10 opacity-0 transition-all peer-checked:opacity-100 text-white ">
                                                        <BsCheckCircle />
                                                    </span>
                                                </label>
                                                <label className="relative cursor-pointer " data-aos="fade-up">
                                                    <input type="checkbox" className="peer sr-only" name="size-choice" />
                                                    <div className=" rounded-[5px]  shadow-md ring ring-transparent grayscale transition-all active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">

                                                        <div className='my-2 pl-4  antialiased bg-[#18181c] rounded-[5px] w-[245px] py-[12px] text-white flex items-center '>
                                                            <i className='text-white antialiased mx-[6px]'><FaRobot /></i>
                                                            <p className="text-white font-poppins font-medium">ML & AI</p>
                                                        </div>

                                                    </div>
                                                    <span className="absolute top-[18px] right-3 z-10 opacity-0 transition-all peer-checked:opacity-100 text-white ">
                                                        <BsCheckCircle />
                                                    </span>
                                                </label>
                                            </div>

                                            <div className='R.H.S' >
                                                <label className="relative cursor-pointer "data-aos="fade-up">
                                                    <input type="checkbox" className="peer sr-only" name="size-choice" />
                                                    <div className=" rounded-[5px]  shadow-md ring ring-transparent grayscale transition-all active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">

                                                        <div className='my-3 pl-4 antialiased bg-[#18181c] rounded-[5px] w-[245px] py-[12px] text-white flex items-center '>
                                                            <i className='text-white antialiased mx-[6px]'><CiMobile3 /></i>
                                                            <p className="text-white font-poppins font-medium">Mobile App</p>
                                                        </div>

                                                    </div>
                                                    <span className="absolute top-[29px] right-3 z-10 opacity-0 transition-all peer-checked:opacity-100 text-white ">
                                                        <BsCheckCircle />
                                                    </span>
                                                </label>
                                                <label className="relative cursor-pointer "data-aos="fade-up">
                                                    <input type="checkbox" className="peer sr-only" name="size-choice" />
                                                    <div className=" rounded-[5px]  shadow-md ring ring-transparent grayscale transition-all active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">

                                                        <div className='my-3 pl-4 antialiased bg-[#18181c] rounded-[5px] w-[245px] py-[12px] text-white flex items-center '>
                                                            <i className='text-white antialiased mx-[6px]'><BiSolidPen /></i>
                                                            <p className="text-white font-poppins font-medium">UI / UX</p>
                                                        </div>

                                                    </div>
                                                    <span className="absolute top-[18px] right-3 z-10 opacity-0 transition-all peer-checked:opacity-100 text-white ">
                                                        <BsCheckCircle />
                                                    </span>
                                                </label>
                                                <label className="relative cursor-pointer "data-aos="fade-up">
                                                    <input type="checkbox" className="peer sr-only" name="size-choice" />
                                                    <div className=" rounded-[5px]  shadow-md ring ring-transparent grayscale transition-all active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">

                                                        <div className='my-2 pl-4 antialiased bg-[#18181c] rounded-[5px] w-[245px] py-[12px] text-white flex items-center '>
                                                            <i className='text-white antialiased mx-[6px]'><FaWandMagicSparkles /></i>
                                                            <p className="text-white font-poppins font-medium">Custom Solution</p>
                                                        </div>

                                                    </div>
                                                    <span className="absolute top-[18px] right-3 z-10 opacity-0 transition-all peer-checked:opacity-100 text-white ">
                                                        <BsCheckCircle />
                                                    </span>
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="sm:col-span-2 mb-9" data-aos="fade-up">
                                        <div className='text-white py-3 text-base] font-poppins antialiased ' >
                                            <label htmlFor="">Description </label>
                                        </div>
                                        <textarea id="message" rows="6" className="block  py-[12px] px-[28px] h-[50px]  w-[500px] bg-[#18181c] text-[#9E9E9E] rounded-[5PX] focus:ring-primary-500 focus:border-primary-50 placeholder-[#9E9E9E] font-poppins antialiased text-sm " placeholder="Write a quick overview of your project"></textarea>
                                    </div>
                                    <div className='flex'data-aos="fade-up">

                                    <Button title='Submit'/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

        </div>

    )
}

export default QuoteForm
