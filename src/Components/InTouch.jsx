import React from 'react'
import Button from './Button'
import earth from '../assets/svg/earth.svg'

function InTouch() {
    return (
        <div id='contact' className="mt-20 mx-4 sm:mx-0 font-poppins sm:scroll-mt-32 scroll-mt-20 ">
            <div className="flex flex-col sm:flex-row  justify-center sm:space-x-24 ">
                <div className="lhs w-full pointer-events-none select-none">
                    <img
                        className="select-none w-full pb-20 sm:pb-0 hidden sm:block"
                        src={earth}
                        alt="earth"
                    />
                </div>
                <div className="rhs">
                    <section className="">
                        <div className=" flex ">
                            <div className="">
                                <h2 className="mb-4 sm:text-5xl text-4xl tracking-tight font-normal  text-black dark:text-[#FFF]  antialiased ">
                                    Get In Touch
                                </h2>
                                <p className="mb-8 lg:mb-10 font-light sm:text-base text-sm  dark:text-[#9E9E9E] text-gray-500  sm:w-[503px]  antialiased ">
                                    A good design is not only aesthetically
                                    pleasing, but also functional. It should be
                                    able to solve the problem{' '}
                                </p>
                                <form action="#" className="space-y-8 w-full">
                                    <div className="">
                                        <input
                                            type="email"
                                            id="email"
                                            className="dark:bg-[#0A0A0A] bg-gray-50  dark:text-white text-black sm:text-sm text-xs rounded-[5px]  block w-full sm:w-[408px] py-3 px-7 outline-none focus:outline dark:focus:outline-white focus:outline-1 focus:outline-gray-500 placeholder-[#9E9E9E] outline-gray-300 outline-1 dark:outline-none antialiased "
                                            placeholder="Your Email"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="block py-3 px-7 w-full  sm:w-[408px] dark:bg-[#0A0A0A] bg-gray-50  dark:text-white text-black sm:text-sm text-xs rounded-[5px] outline-none focus:outline dark:focus:outline-white focus:outline-1 focus:outline-gray-500 placeholder-[#9E9E9E] outline-gray-300 outline-1 dark:outline-none antialiased"
                                            placeholder="Let us know how we can help you"
                                            required
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <textarea
                                            id="message"
                                            rows="6"
                                            className="block  py-3 px-7 h-[156px] w-full sm:w-[408px] dark:bg-[#0A0A0A] bg-gray-50  dark:text-white text-black sm:text-sm text-xs rounded-[5px]  outline-none focus:outline dark:focus:outline-white focus:outline-1 focus:outline-gray-500 placeholder-[#9E9E9E] outline-gray-300 outline-1 dark:outline-none antialiased "
                                            placeholder="Leave a comment..."></textarea>
                                    </div>

                                    <Button title="Get In Touch" />
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default InTouch
