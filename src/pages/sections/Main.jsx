import React from 'react'
import Typewriter from 'typewriter-effect'
import LinkButton from '../../Components/LinkButton'

function Main() {
    return (
        <div className="Blackbg flex flex-col justify-center items-center sm:pt-80 pt-28 sm:mx-0 mx-4 max-w-screen-xl font-inter">
            <div
                aria-hidden="true"
                class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
            <div className="T.S flex flex-col justify-center items-center space-y-1 max-w-screen-xl">
                <h1 className="text-[#FFF]  sm:text-8xl text-3xl leading-[80px] font-black cursor-text sm:pb-20 text-center antialiased ">
                    <Typewriter
                        options={{
                            strings: ['Scale up online.'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>

                <p className="text-gray-100  text-sm sm:text-xl font-medium sm:leading-7 sm:w-[577px] pb-14 text-center antialiased ">
                    We're a team of professionals supporting startups to scale
                    up their businesses online.
                </p>

                <LinkButton href="/quote">Get Free Quote</LinkButton>
            </div>
            
        </div>
    )
}

export default Main
