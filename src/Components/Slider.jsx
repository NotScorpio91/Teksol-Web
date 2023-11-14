import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Mousewheel, Keyboard } from 'swiper/modules';
import one from '../assets/testing/one.jpg'
import two from '../assets/testing/two.jpg'
import three from '../assets/testing/three.jpg'
import four from '../assets/testing/four.jpg'
import five from '../assets/testing/five.jpg'
import six from '../assets/testing/six.jpg'

function Slider(className) {
    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                cssMode={true}
                loop={true}
                mousewheel={true}
                keyboard={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Mousewheel, Keyboard]}

                className={`mySwiper  w-[1200px]  ${className}  `}
            >
                <SwiperSlide>

                    <div className="w-full bg-[#0A0A0A] border border-[#0A0A0A] rounded-lg shadow  ">
                        <a href="/project">
                            <img className="rounded-t-lg" src={one} alt="" />
                        <div className="p-5">
                          
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-poppins antialiased  ">Noteworthy technology acquisitions 2021</h5>
                           
                            <p className="mb-3 font-normal text-[#9E9E9E] font-poppins antialiased  ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            
                        </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="w-full bg-[#0A0A0A] border border-[#0A0A0A] rounded-lg shadow  ">
                        <a href="/project">
                            <img className="rounded-t-lg" src={two} alt="" />
                        <div className="p-5">
                          
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white  font-poppins antialiased ">Noteworthy technology acquisitions 2021</h5>
                         
                            <p className="mb-3 font-normal text-[#9E9E9E] font-poppins antialiased  ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            
                            
                        </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="w-full bg-[#0A0A0A] border border-[#0A0A0A] rounded-lg shadow  ">
                        <a href="/project">
                            <img className="rounded-t-lg" src={three} alt="" />
                        <div className="p-5">
                          
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-poppins antialiased  ">Noteworthy technology acquisitions 2021</h5>
                          
                            <p className="mb-3 font-normal text-[#9E9E9E] font-poppins antialiased  ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            
                            
                        </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="w-full bg-[#0A0A0A] border border-[#0A0A0A] rounded-lg shadow  ">
                        <a href="/project">
                            <img className="rounded-t-lg" src={four} alt="" />
                        <div className="p-5">
                           
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-poppins antialiased ">Noteworthy technology acquisitions 2021</h5>
                        
                            <p className="mb-3 font-normal text-[#9E9E9E] font-poppins antialiased  ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            
                            
                        </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="w-full bg-[#0A0A0A] border border-[#0A0A0A] rounded-lg shadow  ">
                        <a href="/project">
                            <img className="rounded-t-lg" src={three} alt="" />
                        <div className="p-5">
                            
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-poppins antialiased  ">Noteworthy technology acquisitions 2021</h5>
                            
                            <p className="mb-3 font-normal text-[#9E9E9E] antialiased  ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                           
                            
                        </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="w-full bg-[#0A0A0A] border border-[#0A0A0A] rounded-lg shadow  ">
                        <a href="/project">
                            <img className="rounded-t-lg" src={six} alt="" />
                        <div className="p-5">
                         
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-poppins antialiased ">Noteworthy technology acquisitions 2021</h5>
                            
                            <p className="mb-3 font-normal text-[#9E9E9E] font-poppins antialiased ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                               
                        </div>
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider
