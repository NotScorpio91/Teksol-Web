import React from 'react'
import NavBar from '../Components/NavBar'
import MobileNavBar from '../Components/MobileNavBar'
import Footer from '../Components/Footer'
import Button from '../Components/Button'

function CareerForm() {
    const aboutlist = [
        {
            heading: "What you'll be doing",
            list: 'Collaborating closely with Infrastructure and product teams, learning their pain points, and removing friction from iteration loops.',
            des: 'The US base salary range for this full-time position is $190,000 to $204,000 + equity + benefits. Our salary ranges are determined by role and level. Within the range, individual pay is determined by additional factors, including job-related skills, experience, and relevant education or training. Please note that the compensation details listed in US role postings reflect the base salary only, and do not include equity, or benefits.',
        },
    ]
    return (
        <>
            <NavBar />
            <MobileNavBar />
            <div className="flex justify-center px-4">
                <div
                    aria-hidden="true"
                    class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                    <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                    <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
                </div>
                <div className="w-[720px]  ">

                    <div className="flex flex-col justify-center items-start sm:pt-60 pt-28  max-w-screen-xl">
                        <h1 className="dark:text-[#FFF] text-black font-poppins sm:text-7xl text-4xl sm:leading-[80px] font-black cursor-text  text-start antialiased">
                            SENIOR SOFTWARE ENGINEER DEVELOPER ENVIRONMENTS
                        </h1>
                        <p className="dark:text-gray-100 text-gray-500 font-poppins text-sm sm:text-2xl font-medium sm:leading-7 pb-12 sm:pb-14 text-start antialiased">
                            San Francisco, CA or Remote (U.S.)
                        </p>
                        <p className="dark:text-gray-100 font-poppins text-sm sm:text-base sm:leading-7   text-start antialiased">
                            Do you have zero tolerance for manual operations?
                            Are you proud of your dotfiles and constantly look
                            for ways to improve yours and other’s workflow? Do
                            you gravitate towards CI and take pride in shaving
                            off minutes from build times? If any these ring
                            true, then we would love to chat.
                        </p>
                        <p className="dark:text-gray-100 font-poppins text-sm sm:text-base sm:leading-7  pb-14 text-start antialiased">
                            As Developer Productivity engineers we remove
                            friction and focus on delivering compounding
                            leverage across the entire software development
                            lifecycle. Our mission is to enable Discord to
                            seamlessly scale to thousands of engineers and
                            beyond while improving autonomy, velocity, and
                            reliability.
                        </p>
                    </div>
                    <div>
                        {aboutlist.map(item => (
                            <div key={aboutlist}>
                                <h3 className="dark:text-gray-100 font-poppins text-sm sm:text-xl font-medium sm:leading-7 pb-12 sm:pb-4 text-start antialiased">
                                    {item.heading}
                                </h3>
                                <p className="dark:text-gray-100 font-poppins text-sm sm:text-sm sm:leading-7 list-item ml-5  pb-14 text-start antialiased">
                                    {item.list}
                                </p>
                                <p className="tdark:text-gray-100 font-poppins text-sm sm:text-sm sm:leading-7  pb-14 text-start antialiased">
                                    {item.des}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="dark:bg-[#151515] bg-white mt-16 sm:mt-14  sm:mb-52 font-poppins ">
                        <div>
                            <h2 className=" sm:text-5xl text-3xl tracking-tight font-semibold    dark:text-[#FFF] text-black  antialiased ">
                                APPLY FOR THIS JOB
                            </h2>
                        </div>
                        <div className="sm:col-span-1 col-span-2  pt-10 sm:pt-16">
                            <section className="">
                                <form action="#" className="grid grid-cols-2">
                                    <div className="px-1 sm:col-span-1 col-span-2 ">
                                        <div className="dark:text-white text-black py-3 text-base]  antialiased  ">
                                            <label htmlFor="">First Name</label>
                                        </div>
                                        <input
                                            type="text"
                                            id="name"
                                            className="text-sm rounded-[5px]  block w-full  py-[12px] px-[14px] shadow-sm dark:bg-[#0A0A0A]  dark:text-white bg-gray-50 text-black  placeholder-[#9E9E9E] outline outline-1 dark:focus:outline-white outline-gray-300 dark:focus:outline-1 dark:outline-none  antialiased "
                                            placeholder="First Name"
                                            required
                                        />
                                    </div>
                                    <div className="px-1 sm:col-span-1 col-span-2 ">
                                        <div className="dark:text-white text-black py-3 text-base]  antialiased  ">
                                            <label htmlFor="">Last Name</label>
                                        </div>
                                        <input
                                            type="text"
                                            id="name"
                                            className=" text-sm rounded-[5px]  block w-full  py-[12px] px-[14px] shadow-sm dark:bg-[#0A0A0A]  dark:text-white bg-gray-50 text-black  placeholder-[#9E9E9E] outline outline-1 dark:focus:outline-white outline-gray-300 dark:focus:outline-1 dark:outline-none  antialiased "
                                            placeholder="Last Name"
                                            required
                                        />
                                    </div>
                                    <div className="px-1 sm:col-span-1 col-span-2 ">
                                        <div className="dark:text-white text-black py-3 text-base]  antialiased  ">
                                            <label htmlFor="">Your Email</label>
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            className=" text-sm rounded-[5px]  block w-full  py-[12px] px-[14px] shadow-sm dark:bg-[#0A0A0A]  dark:text-white bg-gray-50 text-black  placeholder-[#9E9E9E] outline outline-1 dark:focus:outline-white outline-gray-300 dark:focus:outline-1 dark:outline-none  antialiased "
                                            placeholder="Your Email"
                                            required
                                        />
                                    </div>

                                    <div className="px-1 sm:col-span-1 col-span-2 ">
                                        <div className="dark:text-white text-black py-3 text-base]  antialiased ">
                                            <label htmlFor="">
                                                Contact number
                                            </label>
                                        </div>
                                        <input
                                            type="search"
                                            id="phone"
                                            className=" text-sm rounded-[5px]  block w-full  py-[12px] px-[14px] shadow-sm dark:bg-[#0A0A0A]  dark:text-white bg-gray-50 text-black  placeholder-[#9E9E9E] outline outline-1 dark:focus:outline-white outline-gray-300 dark:focus:outline-1 dark:outline-none  antialiased "
                                            placeholder="(123) 456-7890"
                                            required
                                        />
                                    </div>
                                    <div className="px-1  col-span-2 ">
                                        <div className="dark:text-white text-black py-3 text-base]  antialiased  ">
                                            <label htmlFor="">First Name</label>
                                        </div>
                                        <input
                                            type="file"
                                            id="name"
                                            className=" text-sm rounded-[5px]  block w-full  py-[12px] px-[14px] shadow-sm dark:bg-[#0A0A0A]  dark:text-white bg-gray-50 text-black  placeholder-[#9E9E9E] outline outline-1 dark:focus:outline-white outline-gray-300 dark:focus:outline-1 dark:outline-none  antialiased "
                                            placeholder="First Name"
                                            required
                                        />
                                    </div>
                                    <div className="px-1 col-span-2">
                                        <div className="dark:text-white text-black py-3 text-base]  antialiased ">
                                            <label htmlFor="">
                                                Location (City)
                                            </label>
                                        </div>
                                        <input
                                            type="search"
                                            id="phone"
                                            className=" text-sm rounded-[5px]  block w-full  py-[12px] px-[14px] shadow-sm dark:bg-[#0A0A0A]  dark:text-white bg-gray-50 text-black  placeholder-[#9E9E9E] outline outline-1 dark:focus:outline-white outline-gray-300 dark:focus:outline-1 dark:outline-none  antialiased "
                                            placeholder=" Location (city)"
                                            required
                                        />
                                    </div>
                                    <div className="px-1 col-span-2">
                                        <div className="dark:text-white text-black py-3 text-base]  antialiased ">
                                            <label htmlFor="">
                                                Linkedin Profile
                                            </label>
                                        </div>
                                        <input
                                            type="search"
                                            id="phone"
                                            className=" text-sm rounded-[5px]  block w-full  py-[12px] px-[14px] shadow-sm dark:bg-[#0A0A0A]  dark:text-white bg-gray-50 text-black  placeholder-[#9E9E9E] outline outline-1 dark:focus:outline-white outline-gray-300 dark:focus:outline-1 dark:outline-none  antialiased "
                                            placeholder=""
                                            required
                                        />
                                    </div>
                                    <div className="px-1 col-span-2">
                                        <div className="dark:text-white text-black py-3 text-base]  antialiased ">
                                            <label htmlFor="">Website</label>
                                        </div>
                                        <input
                                            type="search"
                                            id="phone"
                                            className=" text-sm rounded-[5px]  block w-full  py-[12px] px-[14px] shadow-sm dark:bg-[#0A0A0A]  dark:text-white bg-gray-50 text-black  placeholder-[#9E9E9E] outline outline-1 dark:focus:outline-white outline-gray-300 dark:focus:outline-1 dark:outline-none  antialiased "
                                            placeholder=""
                                            required
                                        />
                                    </div>
                                    <div className="px-1 col-span-2">
                                        <div className="dark:text-white text-black py-3 text-base]  antialiased ">
                                            <label htmlFor="">
                                                Stack Overflow
                                            </label>
                                        </div>
                                        <input
                                            type="search"
                                            id="phone"
                                            className="s text-sm rounded-[5px]  block w-full  py-[12px] px-[14px] shadow-sm dark:bg-[#0A0A0A]  dark:text-white bg-gray-50 text-black  placeholder-[#9E9E9E] outline outline-1 dark:focus:outline-white outline-gray-300 dark:focus:outline-1 dark:outline-none  antialiased "
                                            placeholder=""
                                            required
                                        />
                                    </div>
                                    <div className="px-1 col-span-2">
                                        <div className="dark:text-white text-black py-3 text-base]  antialiased ">
                                            <label htmlFor="">
                                                Github Profile
                                            </label>
                                        </div>
                                        <input
                                            type="search"
                                            id="phone"
                                            className=" text-sm rounded-[5px]  block w-full  py-[12px] px-[14px] shadow-sm dark:bg-[#0A0A0A]  dark:text-white bg-gray-50 text-black  placeholder-[#9E9E9E] outline outline-1 dark:focus:outline-white outline-gray-300 dark:focus:outline-1 dark:outline-none  antialiased "
                                            placeholder=""
                                            required
                                        />
                                    </div>
                                    <div className="col-span-2 mb-9 px-1">
                                        <div className="dark:text-white text-black py-3 text-base]  antialiased ">
                                            <label htmlFor="">
                                                How did you hear about this job?{' '}
                                            </label>
                                        </div>
                                        <textarea
                                            id="message"
                                            rows="6"
                                            className="block  py-[12px] px-[14px] h-[120px] w-full  rounded-[5PX]    text-sm shadow-sm dark:bg-[#0A0A0A]  dark:text-white bg-gray-50 text-black  placeholder-[#9E9E9E] outline outline-1 dark:focus:outline-white outline-gray-300 dark:focus:outline-1 dark:outline-none  antialiased "
                                            placeholder="Write a quick overview of your project"></textarea>
                                    </div>

                                    <Button title="Submit" className="mx-1" />
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CareerForm
