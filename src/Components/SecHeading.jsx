import React from 'react'

function SecHeading() {
  return (
    <div className="w-full my-32 font-poppins ">
    <div className="flex flex-row  items-center justify-around gap-5 max-w-screen-xl mx-auto">
        <div className="flex flex-row items-center justify-center gap-4">
            <span className="sm:text-[4.5rem] text-3xl text-white">6</span>
            <div className="flex flex-col">
                <span className="text-white font-extralight sm:text-[1.5rem] text-sm">years</span>
                <span className="text-white font-extralight sm:text-[1.5rem] text-sm">on the market</span>
            </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
            <span className="sm:text-[4.5rem] text-3xl text-white">50</span>
            <div className="flex flex-col">
                <span className="text-white font-extralight sm:text-[1.5rem] text-sm">talented</span>
                <span className="text-white font-extralight sm:text-[1.5rem] text-sm">individuals</span>
            </div>
        </div>
        <div className="sm:flex hidden flex-row items-center justify-center gap-4">
            <span className="sm:text-[4.5rem] text-5xl text-white">+100</span>
            <div className="flex flex-col">
                <span className="text-white font-extralight sm:text-[1.5rem] text-base">projects</span>
                <span className="text-white font-extralight sm:text-[1.5rem] text-base">delivered</span>
            </div>
        </div>
    </div>
</div>
  )
}

export default SecHeading