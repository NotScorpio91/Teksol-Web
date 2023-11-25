import React from 'react'
import Slider from '../../Components/Slider'

function SliderSec() {
    return (
        <div className="flex flex-col justify-center items-center h-full pb-5 text-center">
            <h1 className="text-white font-poppins sm:text-[42px] text-base font-semibold sm:leading-[80px] sm:w-fit sm:h-fit cursor-text antialiased mb-7 ">
                Project Innovation, Functionality, and Impact.
            </h1>
            <p className="text-[#9E9E9E] font-poppins text-xs sm:text-[18px]  font-normal sm:leading-[28px] sm:w-[980px] h-full cursor-text antialiased">
                <span className="font-bold font-poppins h-full ">
                    At TEKSOL,
                </span>
                Embark on a journey of innovation with our latest project, where
                cutting-ing the next frontier of possibilities, where our
                project promises to redefine standards and leave a lasting
                impact in its domain.
            </p>
            <div className="w-[400px] sm:w-[1200px] B.S flex justify-center items-center my-[85px] ">
                <Slider />
            </div>
        </div>
    )
}

export default SliderSec
