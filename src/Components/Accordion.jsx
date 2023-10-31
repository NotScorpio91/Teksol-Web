import React, {useState} from 'react'
import  plus  from '../assets/svg/plus.svg'
import minus from '../assets/svg/minus.svg'


const Accordion = () => {

const [show,setShow]=useState(true)
const toggleFunction = ()=>{
  setShow(!show)
}

  return (
    <div className='accordion  flex flex-col justify-center items-center pt-4 h-[40vh]'>
      <div className=" w-[540px] h-[40px] pt-[12px]  rounded-[5px] bg-[#18181C] ">
      <div className=' flex justify-between items-left mx-[28px] '>
        <h1 className='text-[#FFF] font-poppins font-normal leading-5 text-sm'>How promote the product?</h1>
        <button onClick={toggleFunction}><img src={show ? minus : plus} alt="plus" /></button>
        </div>

        { show? <div className='h-[130px] bg-[#18181c]  rounded-[5px] flex  items-center '>
         <p className='text-sm leading-[28px] font-poppins font-normal text-[#9E9E9E] mx-[28px] border-t border-[#404047] '>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem  good design is not only aesthetically pleasing, but also functional. </p> 
      </div>:null}


      </div>
    </div>
  )
}

export default Accordion
