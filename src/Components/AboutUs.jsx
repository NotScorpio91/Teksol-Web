import React from "react";
import About from "../assets/svg/about.svg";
import Talking from "../assets/svg/talking.svg";
import Accordion from "./Accordion";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { BiMessageDetail } from "react-icons/bi";

function AboutUs() {
  return (
    <div className="flex justify-center items-center mt-16  ">
      <div className=" w-[1200px] px-1 rounded-md">
        <div className="flex  justify-center items-center">
          <div className="LHS flex flex-col gap-7 py-4  w-[100%]">
            <h1 className="text-white text-2xl font-poppins font-semibold">
              ABOUT US
            </h1>
            <p className="text-[#9E9E9E] text-lg font-poppins ">
              We are TEKSOL, a leading IT solutions provider. With expertise in
              software consultancy and development, we deliver tailored
              solutions using Laravel, Django, React, and Vue.js. Trusted by
              clients worldwide, we have successfully completed 100+ projects
              and offer outsourcing services. Our customer-centric approach
              ensures seamless collaboration, enabling us to understand your
              unique needs and deliver exceptional results. Experience
              innovation, integrity, and excellence with TEKSOL, your partner
              for transformative technology solutions. Contact us today to
              discuss your project and unlock your business's full potential.
            </p>
            <h2 className="text-[#9E9E9E] font-poppins">
              <span className="text-white font-poppins">TEKSOL</span> -
              Empowering Businesses through Innovative IT Solutions.
            </h2>
          </div>

          <div className="RHS w-full select-none ">
            <img src={About} alt="" />
          </div>
        </div>
        <a href="https://calendly.com/darkcoderse/30min?month=2023-11">
          <div className="flex w-[530px] h-[140px] bg-[#0A0A0A] p-4  mb-8 rounded-lg outline-2 hover:outline transition-all outline-[#9E9E9E]  active:scale-95  hover:scale-105 hover:transition-all select-none">
            <div className="flex flex-col justify-around  ">
              <h1 className="text-white font-poppins text-lg font-semibold cursor-pointer">
                Schedule a Meeting
              </h1>
              <p className="text-[#9E9E9E] text-sm font-poppins hover:bg-gradient-to-r from-[#00c6ff] to-[#92EFFD] hover:text-transparent hover:bg-clip-text transition-all cursor-pointer  ">
                30 Mint Meeting where we disucess about your business problems
              </p>
            </div>
          </div>
        </a>
        <div className="grid grid-cols-3 justify-around items-center select-none  ">
          <div className="text-white my-5 transition-all   hover:scale-105 hover:transition-all cursor-pointer">
            <div className=" bg-[#0A0A0A] w-[350px] h-[371px] rounded-2xl flex justify-center flex-col items-center space-y-7  ">
              <BiMessageDetail size={100} />
              <h1 className="text-white font-semibold font-poppins antialiased ">
                IT Consultancy
              </h1>

              <div className="text-sm text-[#9E9E9E] text-left w-[320px] h-[10px] font-poppins antialiased grid grid-cols-2 justify-center items-center  ">
                <p className=" text-center text-base rounded-md w-[320px] ">
                  Available 24/7
                </p>
              </div>
            </div>
          </div>
          <div className="text-white my-5 transition-all   hover:scale-105 hover:transition-all cursor-pointer ">
            <div className=" bg-[#0A0A0A] w-[350px] h-[371px] rounded-2xl flex justify-center flex-col items-center space-y-7  ">
              <TbDeviceDesktopAnalytics size={100} />
              <h1 className="text-white font-semibold font-poppins antialiased ">
                Web Development
              </h1>

              <div className="text-sm text-[#9E9E9E] text-left w-[320px] h-[10px] font-poppins antialiased grid grid-cols-2 justify-center items-center  ">
                <p className=" text-center text-base rounded-md w-[320px] ">
                  LAMP • MERN • Django
                </p>
              </div>
            </div>
          </div>
          <div className="text-white my-5 transition-all   hover:scale-105 hover:transition-all cursor-pointer ">
            <div className=" bg-[#0A0A0A] w-[350px] h-[371px] rounded-2xl flex justify-center flex-col items-center space-y-7  ">
              <HiMiniDevicePhoneMobile size={100} />
              <h1 className="text-white font-semibold font-poppins antialiased ">
                Mobile App
              </h1>

              <div className="text-sm text-[#9E9E9E] text-left w-[320px] h-[10px] font-poppins antialiased grid grid-cols-2 justify-center items-center  ">
                <p className=" text-center text-base rounded-md w-[320px] ">
                  React Native • Flutter
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-around pb-5 pt-40">
          <div className="w-full  ">
            <img src={Talking} alt="" />
          </div>
          <div className="w-full flex flex-col justify-centert gap-4 ">
            <h3 className=" text-sm font-poppins bg-gradient-to-r from-[#00c6ff] to-[#92EFFD] text-transparent bg-clip-text transition-all cursor-pointer  pl-6">
              WHY CHOOSE US
            </h3>
            <h1 className="text-white font-poppins text-3xl font-semibold cursor-pointer pl-6">
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
