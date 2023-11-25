import React from 'react'
import Button from './Button'
import earth from '../assets/svg/earth.svg'

function InTouch() {
    return (
        <div className="mt-20 mx-4 sm:mx-0">
            <div className="flex flex-col sm:flex-row  justify-center sm:space-x-24 ">
                <div className="lhs select-none w-full ">
                    <img
                        className="select-none w-full pb-20 sm:pb-0"
                        src={earth}
                        alt="earth"
                    />
                </div>
                <div className="rhs">
                    <section className="">
                        <div className=" flex ">
                            <div className="">
                                <h2 className="mb-4 sm:text-5xl text-4xl tracking-tight font-normal  text-[#FFF] font-poppins antialiased ">
                                    Get In Touch
                                </h2>
                                <p className="mb-8 lg:mb-10 font-light sm:text-base text-sm  text-[#9E9E9E]  sm:w-[503px] font-poppins antialiased ">
                                    A good design is not only aesthetically
                                    pleasing, but also functional. It should be
                                    able to solve the problem{' '}
                                </p>
                                <form action="#" className="space-y-8 w-full">
                                    <div className="">
                                        <input
                                            type="email"
                                            id="email"
                                            className="shadow-sm bg-[#0A0A0A] border-gray-300 text-white sm:text-sm text-xs rounded-[5px]  block w-full sm:w-[408px] py-3 px-7 outline-[#9E9E9E] outline-1 placeholder-[#9E9E9E] font-poppins antialiased "
                                            placeholder="Your Email"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="block py-3 px-7 w-full  sm:w-[408px] sm:text-sm text-xs  text-white bg-[#0A0A0A] rounded-[5px]    placeholder-[#9E9E9E] font-poppins antialiased outline-[#9E9E9E] outline-1"
                                            placeholder="Let us know how we can help you"
                                            required
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <textarea
                                            id="message"
                                            rows="6"
                                            className="block  py-3 px-7 h-[156px] w-full sm:w-[408px] bg-[#0A0A0A] text-white rounded-[5PX] sm:text-sm text-xs   dark:placeholder-[#9E9E9E] font-poppins antialiased outline-[#9E9E9E] outline-1 "
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
