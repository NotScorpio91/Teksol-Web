import React from 'react'
import NavBar from '../Components/NavBar'
import MobileNavBar from '../Components/MobileNavBar'

import Footer from '../Components/Footer'

function Career() {
    const Cards = [
        {
            title: 'Senior Software Engineer - Developer Environments',
            text: 'San Francisco, CA or Remote (U.S.)',
        },
  
    ]
    return (
        <>
            <NavBar />
            <MobileNavBar />
            <div className="flex justify-center items-center antialiased">
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
                    <div className="pt-52">
                        <div>
                            <h1 className="text-[#FFF] font-poppins sm:text-4xl text-4xl leading-[80px] font-black cursor-text sm:pb-20 text-center antialiased">
                                We'd love to work with someone like you.
                            </h1>
                        </div>
                        <div className='flex flex-col sm:grid sm:grid-cols-3 gap-8 justify-center items-center container cursor-pointer sm:pb-10'>
                        {Cards.map(item => (
                          <div key={Cards} className='w-full'>
                                <div className="bg-gradient-to-r from-primary-black to-black text-white w-full h-[350px] border border-primary-black hover:border-gray-600 rounded-none flex justify-start flex-col items-start p-10 gap-5 font-poppins ">
                                    <h1 className="text-white font-light sm:font-semibold  antialiased text-xl sm:text-5xl">
                                        {item.title}
                                    </h1>
                                    
                                    <p className="text-white font-light  antialiased text-base">
                                        {item.text}
                                    </p>
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
