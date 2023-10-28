import React from 'react'
import Button from './Button'
import earth  from  '../assets/svg/earth.svg'

function Infoform() {
    return (
        <div className='bg-black mt-10'>
            <div className='flex  justify-center space-x-24 '>
                <div className="lhs">
                   <img className='' src={earth} alt="earth" /> 
                </div>
                <div className="rhs">

                    <section >
                        <div className=" flex ">
                        <div className="">
                            <h2 className="mb-4 text-5xl tracking-tight font-normal  text-[#FFF] font-poppins ">Get In Touch</h2>
                            <p className="mb-8 lg:mb-10 font-light  text-[#9E9E9E]  w-[503px] font-poppins">A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </p>
                            <form action="#" className="space-y-8">
                                <div>
                                    <input type="email" id="email" className="shadow-sm bg-[#18181C] border-gray-300 text-[#9E9E9E] text-sm rounded-[5px] focus:ring-primary-500 focus:border-primary-500 block w-[408px] py-[12px] px-[28px] dark:placeholder-[#9E9E9E] font-poppins" placeholder="Your Email" required />
                                </div>
                                <div>
                                    <input type="text" id="subject" className="block py-[12px] px-[28px]  w-[408px] text-sm text-[#9E9E9E] bg-[#18181C] rounded-[5px]  focus:ring-primary-500 focus:border-primary-500 placeholder-[#9E9E9E] font-poppins" placeholder="Let us know how we can help you" required />
                                </div>
                                <div className="sm:col-span-2">
                                    <textarea id="message" rows="6" className="block  py-[12px] px-[28px] h-[156px] w-[408px] bg-[#18181c] text-[#9E9E9E] rounded-[5PX] focus:ring-primary-500 focus:border-primary-50 dark:placeholder-[#9E9E9E] font-poppins" placeholder="Leave a comment..."></textarea>
                                </div>
                                <Button />
                            </form>
                        </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}

export default Infoform
