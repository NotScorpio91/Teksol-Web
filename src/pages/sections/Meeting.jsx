import React from 'react'
import BigCard from '../../Components/Bigcard'
import google from '../../assets/png/google.png'
import Instagram from '../../assets/png/Instagram.png'
import microsoft from '../../assets/png/microsoft.png'
import Netflix from '../../assets/png/Netflix.png'
import Samsung from '../../assets/png/Samsung.png'
import Xiaomi from '../../assets/png/Xiaomi.png'



function Meeting() {
  return (
    <div className=' sm:my-32 my-10 sm:mb-72 mb-64'>
        <div className='sm:w-[1280px] sm:h-[625px] h-[400px]  flex flex-col justify-start items-center  mx-4 dark:bg-gradient-to-r dark:from-primary-black dark:to-black dark:text-white  border dark:border-primary-black dark:hover:border-gray-600 rounded-none  font-poppins text-gray-500 bg-gray-50 border-gray-300 hover:border-gray-400 shadow-xl dark:shadow-none'>
          <h1 className='dark:text-white text-black sm:leading-[64px] font-poppins antialiased font-semibold sm:text-[48px] px-8 sm:mt-20  sm:mb-10 mt-10 sm:my-0 text-base text-center'>TEKSOL Innovation Summit: Empowering Tomorrow's Tech Landscape</h1>
          <div className='grid grid-cols-3 sm:grid-cols-6 px-8  gap-10 my-8 sm:px-8  sm:my-0 items-center justify-center'>
            <img className='' src={Instagram} alt="Instagram" />
            <img className='' src={google} alt="google" />
            <img className='' src={microsoft} alt="microsoft" />
            <img className='' src={Netflix} alt="Netflix" />
            <img className='' src={Samsung} alt="Samsung" />
            <img className='' src={Xiaomi} alt="Xiaomi" />
            
          </div>
          <div className='relative  sm:top-20 '>
            <BigCard/>
          </div>
        </div>
    </div>
  )
}

export default Meeting