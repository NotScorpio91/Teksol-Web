import React from 'react'
import Button from '../../Components/Button'
import Typewriter from 'typewriter-effect';

function Main() {
  return (

    <div className='Blackbg flex flex-col justify-center items-center sm:pt-80 pt-28  sm:mx-0 mx-4 '>

      <div className="T.S flex flex-col justify-center items-center space-y-1 ">
        <h1 className='text-[#FFF] font-poppins sm:text-8xl text-3xl leading-[80px] font-black cursor-text  sm:pb-20   text-center antialiased ' >

          <Typewriter
            options={{
              strings: ['Scale up online.'],
              autoStart: true,
              loop: true,

            }}
          />
        </h1>

        <p className='text-gray-300 font-poppins text-sm sm:text-xl font-medium sm:leading-7 sm:w-[577px]  pb-14 text-center antialiased '>We’re a team of professionals supporting startups to scale up their businesses online.
        </p>

        <a href="/quote">

          <Button title='Get Quote' className='font-poppins font-extrabold  mb-[210px]'/>
        </a>


      </div>
    </div>



  )
}

export default Main
