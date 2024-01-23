import React from "react";
import About from "../assets/svg/about.svg";
import Talking from "../assets/svg/talking.svg";
import Accordion from "./Accordion";
import { FaCalendarDays } from "react-icons/fa6";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { BiMessageDetail } from "react-icons/bi";

function AboutUs() {
  return (
    <div className="flex justify-center items-center mt-16 font-poppins  ">
      <div 
              aria-hidden="true"
                class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
      <div className=" sm:w-[1200px] px-4  sm:px-11">
        <div className="flex  justify-center items-center">
          <div className="LHS flex flex-col gap-7 py-4  sm:w-full">
            <h1 className="dark:text-white text-black text-2xl text-center sm:text-start  font-semibold">
              ABOUT US
            </h1>
            <p className="dark:text-[#9E9E9E] text-gray-500 sm:text-base text-sm ">
            We are TEKSOL, a leading IT solutions provider. With expertise in software consultancy and development, we deliver tailored solutions using Laravel, Django, React, and Vue.js. Trusted by clients worldwide, we have successfully completed 100+ projects and offer outsourcing services. Our customer-centric approach
            ensures seamless collaboration, enabling us to understand your unique needs and deliver exceptional results. Experience innovation, integrity, and excellence with TEKSOL, your partner for transformative technology solutions. Contact us today to discuss your project and unlock your business's full potential.
            </p>
            <h2 className="dark:text-[#9E9E9E] text-gray-500 ">
              <span className="dark:text-white text-black ">TEKSOL</span> -
              Empowering Businesses through Innovative IT Solutions.
            </h2>
          </div>

          <div className="RHS w-full select-none hidden sm:block ">
            <img src={About} alt="" />
          </div>
        </div>
        <a href="https://calendly.com/darkcoderse/30min?month=2023-11">
          <div className="flex shadow-xl bg-gray-50 text-black w-full   border dark:border-primary-black dark:hover:border-gray-600 rounded-none border-gray-100 hover:border-gray-400 justify-center flex-col items-center p-10 gap-5 font-poppins text-center select-none group dark:bg-gradient-to-r dark:from-primary-black dark:to-black dark:text-white">
            <div className="flex flex-col justify-center items-center  ">
            <FaCalendarDays className="mb-7 text-black dark:text-white" size={100} />
              <h1 className="dark:text-white text-black  text-lg  cursor-pointer">
                Schedule a Meeting
              </h1>
              <p className="dark:text-[#9E9E9E] text-gray-500 text-sm  group-hover:bg-gradient-to-r from-[#00c6ff] to-[#92EFFD] group-hover:text-transparent group-hover:bg-clip-text group-transition-all cursor-pointer  ">
                30 Mint Meeting where we disucess about your business problems
              </p>
            </div>
          </div>
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-3  sm:gap-3 justify-around items-center select-none  ">
          <div className="text-white my-5 transition-all    cursor-pointer">
            <div className=" shadow-xl dark:bg-gradient-to-r from-primary-black to-black text-white w-full  dark:border dark:border-primary-black dark:hover:border-gray-600 border border-gray-100 hover:border-gray-400 rounded-none flex justify-center flex-col items-center p-10 gap-5 font-poppins   ">
              <BiMessageDetail size={100} className="dark:text-white text-black" />
              <h1 className="dark:text-white text-black font-semibold  antialiased "> 
                IT Consultancy
              </h1>

              <div className="text-sm dark:text-[#9E9E9E] text-gray-500 text-left w-[320px] h-[10px]  antialiased grid grid-cols-2 justify-center items-center  ">
                <p className=" text-center text-base  w-[320px] ">
                  Available 24/7
                </p>
              </div>
            </div>
          </div>
          <div className="text-white my-5 transition-all    cursor-pointer ">
            <div className="shadow-xl dark:bg-gradient-to-r from-primary-black to-black text-white w-full dark:border dark:border-primary-black dark:hover:border-gray-600 border border-gray-100 hover:border-gray-400 rounded-none flex justify-center flex-col items-center p-10 gap-5 font-poppins   ">
              <TbDeviceDesktopAnalytics size={100} className="dark:text-white text-black" />
              <h1 className="dark:text-white text-black font-semibold  antialiased ">
                Web Development
              </h1>

              <div className="text-sm dark:text-[#9E9E9E] text-gray-500 text-left w-[320px] h-[10px]  antialiased grid grid-cols-2 justify-center items-center  ">
                <p className=" text-center text-base  w-[320px] ">
                  LAMP • MERN • Django
                </p>
              </div>
            </div>
          </div>
          <div className="text-white my-5 transition-all    cursor-pointer ">
            <div className=" shadow-xl dark:bg-gradient-to-r from-primary-black to-black text-white w-full dark:border dark:border-primary-black dark:hover:border-gray-600 border border-gray-100 hover:border-gray-400 rounded-none flex justify-center flex-col items-center p-10 gap-5 font-poppins  ">
              <HiMiniDevicePhoneMobile size={100} className="dark:text-white text-black" />
              <h1 className="dark:text-white text-black font-semibold  antialiased ">
                Mobile App
              </h1>

              <div className="text-sm dark:text-[#9E9E9E] text-gray-500 text-left w-[320px] h-[10px]  antialiased grid grid-cols-2 justify-center items-center  ">
                <p className=" text-center text-base  w-[320px] ">
                  React Native • Flutter
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-around pb-5 sm:pt-40 pt-10">
          <div className="w-full  hidden sm:block ">
            <img src={Talking} alt="" />
          </div>
          <div className="w-full flex flex-col justify-centert gap-4 ">
            <h3 className=" text-sm  dark:bg-gradient-to-r dark:from-[#00c6ff] dark:to-[#92EFFD] text-transparent bg-clip-text transition-all cursor-pointer  pl-6  bg-gradient-to-t from-black to-[#383838]">
              WHY CHOOSE US
            </h3>
            <h1 className="dark:text-white text-black  text-3xl font-semibold cursor-pointer pl-6">
              FAQs
            </h1>
            <div className="flex  flex-col">
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
