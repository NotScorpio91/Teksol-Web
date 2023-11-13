import React, { useState, useEffect }  from 'react'
import plus from '../assets/svg/plus.svg'
import minus from '../assets/svg/minus.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Accordion = () => {

	const [show, setShow] = useState(true)
	const toggleFunction = () => {
		setShow(!show)
	}
	useEffect(()=>{
		AOS.init({duration:500})
	  },[])

	return (
		<div className="w-[540px] h-fit  py-3  rounded-[5px] bg-[#0A0A0A] relative mx-5 my-3 " >
			<div className='flex justify-between items-left  mx-7 relative'>
				<h1 className='text-[#FFF] font-poppins font-normal leading-5 text-sm antialiased '>How promote the product?</h1>
				<button onClick={toggleFunction}><img src={show ? plus : minus} alt="plus" /></button>
			</div>
			<div className={`relative h-[130px] bg-[#0A0A0A]  rounded-md flex items-center   ${show ? 'hidden' : 'flex-1'}`}>
				<p className='text-sm leading-7 font-poppins font-normal text-[#9E9E9E] mx-7 pt-3 border-t border-[#404047]  antialiased ' >A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem  good design is not only aesthetically pleasing, but also functional. </p>
			</div>
		</div>
	)
}

export default Accordion
