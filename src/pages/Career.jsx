import React from 'react'
import { MdArrowForward } from 'react-icons/md'
import NavBar from '../Components/NavBar'
import MobileNavBar from '../Components/MobileNavBar'
import Footer from '../Components/Footer'

function Career() {
    const Cards = [
        {
            title: 'Senior Software Engineer  Developer Environments',
            text: 'San Francisco, CA or Remote (U.S.)',
        },
  
    ]
    return (
        <>
            <NavBar />
            <MobileNavBar />
            <div className="flex justify-center items-center antialiased px-4 sm:px-0">
            <div
                aria-hidden="true"
                class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
                <div className="flex flex-col  w-[1200px]">
                    <div>
                        <div className="flex flex-col justify-center items-center sm:pt-80 pt-28 sm:mx-0 mx-4 max-w-screen-xl">
                            <h1 className="text-[#FFF] font-poppins sm:text-8xl text-4xl leading-[80px] font-black cursor-text sm:pb-20 text-center antialiased">
                                Scale up online.
                            </h1>
                            <p className="text-gray-100 font-poppins text-sm sm:text-xl font-medium sm:leading-7 sm:w-[577px] pb-14 text-center antialiased">
                                We're a team of professionals supporting
                                startups to scale up their businesses online.
                            </p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="sm:pt-52 pt-20">
                        <div>
                            <h1 className="text-[#FFF] font-poppins sm:text-4xl text-2xl sm:leading-[80px] font-semibold cursor-text sm:pb-20 pb-12 text-center antialiased">
                                We'd love to work with someone like you.
                            </h1>
                        </div>
                        <div className='flex flex-col sm:grid sm:grid-cols-3 gap-8 justify-center items-center container cursor-pointer sm:pb-10'>
                        {Cards.map(item => (
                          <div key={Cards} className='w-full'>
                                <div className="bg-gradient-to-r from-primary-black to-black text-white w-full sm:h-[350px] border border-primary-black hover:border-gray-600 rounded-none flex justify-center flex-col items-center py-10 sm:py-0  gap-5 font-poppins sm:px-7 px-3">
                                  <div className="flex flex-col sm:justify-between justify-around">

                                  <div className="">
                                    <h1 className="text-white  font-semibold  antialiased text-3xl sm:text-5xl">
                                        {item.title}
                                    </h1>
                                  </div>
                                    <a href="/career/form">
                                    <div className="flex justify-start items-center pt-4 ">

                                    <p className="text-white font-light  antialiased text-sm sm:text-base">
                                        {item.text}
                                    </p>
                                        <MdArrowForward className='sm:ml-1' size={18} />
                                    </div>
                                    </a>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Career
