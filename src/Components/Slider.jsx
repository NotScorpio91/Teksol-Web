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
        <div className='w-full font-poppins'>
            <Swiper

                slidesPerView={1}
                spaceBetween={20}
                cssMode={true}
                loop={true}
                mousewheel={true}
                keyboard={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,

                }}
                breakpoints={{
                    1200: {
                        width: 1200,
                        slidesPerView: 3,
                    },
                }}
                modules={[Autoplay, Mousewheel, Keyboard]}

                className={`mySwiper mx-4 sm:mx-0       ${className}  `}
            >
                <SwiperSlide>

                    <div className="w-full bg-[#0A0A0A] border border-[#0A0A0A] rounded-lg shadow  active:scale-95  active:transition-all ">
                        <a href="/project">
                            <img className="rounded-t-lg" src={one} alt="" />
                            <div className="p-5">

                                <h5 className="mb-2 sm:text-2xl text-lg font-semibold sm:font-bold tracking-tight text-white  antialiased  ">Noteworthy technology acquisitions 2021</h5>

                                <p className="mb-3 text-xs sm:text-base font-normal text-[#9E9E9E]  antialiased  ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="w-full bg-[#0A0A0A] border border-[#0A0A0A] rounded-lg shadow  active:scale-95  active:transition-all  ">
                        <a href="/project">
                            <img className="rounded-t-lg" src={six} alt="" />
                            <div className="p-5">

                                <h5 className="mb-2 sm:text-2xl text-lg font-semibold sm:font-bold tracking-tight text-white  antialiased  ">Noteworthy technology acquisitions 2021</h5>

                                <p className="mb-3 text-xs sm:text-base font-normal text-[#9E9E9E]  antialiased  ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="w-full bg-[#0A0A0A] border border-[#0A0A0A] rounded-lg shadow  active:scale-95  active:transition-all ">
                        <a href="/project">
                            <img className="rounded-t-lg" src={two} alt="" />
                            <div className="p-5">

                                <h5 className="mb-2 sm:text-2xl text-lg font-semibold sm:font-bold tracking-tight text-white  antialiased  ">Noteworthy technology acquisitions 2021</h5>

                                <p className="mb-3 text-xs sm:text-base font-normal text-[#9E9E9E]  antialiased  ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="w-full bg-[#0A0A0A] border border-[#0A0A0A] rounded-lg shadow  active:scale-95  active:transition-all ">
                        <a href="/project">
                            <img className="rounded-t-lg" src={three} alt="" />
                            <div className="p-5">

                                <h5 className="mb-2 sm:text-2xl text-lg font-semibold sm:font-bold tracking-tight text-white  antialiased  ">Noteworthy technology acquisitions 2021</h5>

                                <p className="mb-3 text-xs sm:text-base font-normal text-[#9E9E9E]  antialiased  ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="w-full bg-[#0A0A0A] border border-[#0A0A0A] rounded-lg shadow  active:scale-95  active:transition-all ">
                        <a href="/project">
                            <img className="rounded-t-lg" src={four} alt="" />
                            <div className="p-5">

                                <h5 className="mb-2 sm:text-2xl text-lg font-semibold sm:font-bold tracking-tight text-white  antialiased  ">Noteworthy technology acquisitions 2021</h5>

                                <p className="mb-3 text-xs sm:text-base font-normal text-[#9E9E9E]  antialiased  ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="w-full bg-[#0A0A0A] border border-[#0A0A0A] rounded-lg shadow  active:scale-95  active:transition-all ">
                        <a href="/project">
                            <img className="rounded-t-lg" src={five} alt="" />
                            <div className="p-5">

                                <h5 className="mb-2 sm:text-2xl text-lg font-semibold sm:font-bold tracking-tight text-white  antialiased  ">Noteworthy technology acquisitions 2021</h5>

                                <p className="mb-3 text-xs sm:text-base font-normal text-[#9E9E9E]  antialiased  ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            </div>
                        </a>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Slider
