import React, { useState } from 'react'
import plus from '../assets/svg/plus.svg'
import minus from '../assets/svg/minus.svg'


const Accordion = () => {

	const [show, setShow] = useState(true)
	const toggleFunction = () => {
		setShow(!show)
	}

	return (
		<div className="w-[540px] h-fit  py-3  rounded-[5px] bg-[#18181C] relative mx-5 my-3">
			<div className='flex justify-between items-left mx-[28px] relative'>
				<h1 className='text-[#FFF] font-poppins font-normal leading-5 text-sm antialiased '>How promote the product?</h1>
				<button onClick={toggleFunction}><img src={show ? plus : minus} alt="plus" /></button>
			</div>
			<div className={`relative h-[130px] bg-[#18181c]  rounded-[5px] flex items-center   ${show ? 'hidden' : 'flex-1'}`}>
				<p className='text-sm leading-[28px] font-poppins font-normal text-[#9E9E9E] mx-[28px]  pt-3 border-t border-[#404047]  antialiased '>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem  good design is not only aesthetically pleasing, but also functional. </p>
			</div>
		</div>
	)
}

export default Accordion
