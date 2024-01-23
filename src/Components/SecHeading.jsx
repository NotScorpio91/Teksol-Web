import React from 'react'

function SecHeading() {
  return (
    <div className="w-full my-32 font-poppins ">
    <div className="flex flex-row  items-center justify-around gap-5 max-w-screen-xl mx-auto">
        <div className="flex flex-row items-center justify-center gap-4">
            <span className="sm:text-[4.5rem] text-4xl dark:text-white text-black">6</span>
            <div className="flex flex-col">
                <span className="dark:text-white text-gray-500 font-extralight text-[14px] sm:text-[1.5rem]">years</span>
                <span className="dark:text-white text-gray-500 font-extralight text-[14px] sm:text-[1.5rem]">on the market</span>
            </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
            <span className="sm:text-[4.5rem] text-4xl dark:text-white text-black">50</span>
            <div className="flex flex-col">
                <span className="dark:text-white text-gray-500 font-extralight text-[14px] sm:text-[1.5rem] ">talented</span>
                <span className="dark:text-white text-gray-500  font-extralight text-[14px] sm:text-[1.5rem] ">individuals</span>
            </div>
        </div>
        <div className="sm:flex hidden flex-row items-center justify-center gap-4">
            <span className="text-[4.5rem] text-5xl dark:text-white text-black">+100</span>
            <div className="flex flex-col ">
                <span className="dark:text-white text-gray-500  font-extralight text-[1.5rem]">projects</span>
                <span className="dark:text-white text-gray-500  font-extralight text-[1.5rem]">delivered</span>
            </div>
        </div>
    </div>
</div>
  )
}

export default SecHeading