import React from 'react'

function SecHeading() {
  return (
    <div className="w-full my-32 font-inter">
    <div className="flex sm:flex-row flex-col items-center justify-around gap-5 max-w-screen-xl mx-auto">
        <div className="flex flex-row items-center justify-center gap-4">
            <span className="sm:text-[4.5rem] text-5xl text-white">6</span>
            <div className="flex flex-col">
                <span className="text-white font-extralight sm:text-[1.5rem] text-base">years</span>
                <span className="text-white font-extralight sm:text-[1.5rem] text-base">on the market</span>
            </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
            <span className="sm:text-[4.5rem] text-5xl text-white">50</span>
            <div className="flex flex-col">
                <span className="text-white font-extralight sm:text-[1.5rem] text-base">talented</span>
                <span className="text-white font-extralight sm:text-[1.5rem] text-base">individuals</span>
            </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
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