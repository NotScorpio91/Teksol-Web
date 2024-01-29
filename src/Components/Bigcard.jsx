import React from 'react'
import  bigcard from '../assets/svg/bigcard.svg'
import Button from './Button'

function Bigcard() {
  return (
    <div className='flex justify-center select-none font-poppins  px-4  '>
      <div  className=' dark:bg-gradient-to-r dark:from-blue-light dark:to-blue-dark  bg-white  md:w-[1080px] md:h-[425px] rounded-[20px] grid sm:grid-cols-2 justify-between   font-poppins text-gray-500 border border-gray-300   shadow-xl dark:shadow-none dark:border-none  '>

        <div className="lhs flex flex-col  items-center text-center sm:items-start sm:text-start justify-center items p-8 w-full ">
        <h1 className=' w-[182px] h-[32px] dark:text-white text-gray-500  font-normal  antianalized  '>Love our Our Tool?</h1>
        <div className='flex flex-col w-full sm:w-[499px] sm:h-[130px] pb-5'>
        <h1 className=' dark:text-white text-black  font-semibold text-xl sm:text-5xl antianalized'>Fell Free to Join our</h1>
        <h1 className=' dark:text-white text-black  font-semibold text-xl sm:text-5xl'> 15 Days Free Trial</h1>
        </div>
       
         
          <Button title='Get Started' className='dark:bg-gradient-to-r dark:from-primary-black dark:to-black dark:text-white' />
        

        </div>

        <div className="rhs  sm:pt-10  overflow-hidden sm:flex " >
            <img src={bigcard} alt="bg" />
        </div>
        
      </div>
    </div>
  )
}

export default Bigcard
