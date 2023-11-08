import React,{useEffect} from 'react'
import Button from './Button'
import earth  from  '../assets/svg/earth.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function InTouch() {
    useEffect(()=>{
		AOS.init({duration:1000})
	  },[])

    return (
        <div className='bg-black mt-80'data-aos="fade-up">
            <div className='flex  justify-center space-x-24 '>
                <div className="lhs select-none ">
                   <img className='select-none' src={earth} alt="earth" data-aos="fade-up"/> 
                </div>
                <div className="rhs">

                    <section >
                        <div className=" flex ">
                        <div className="">
                            <h2 className="mb-4 text-5xl tracking-tight font-normal  text-[#FFF] font-poppins antialiased " data-aos="fade-up">Get In Touch</h2>
                            <p className="mb-8 lg:mb-10 font-light  text-[#9E9E9E]  w-[503px] font-poppins antialiased " data-aos="fade-up">A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </p>
                            <form action="#" className="space-y-8">
                                <div data-aos="fade-up">
                                    <input type="email" id="email" className="shadow-sm bg-[#18181C] border-gray-300 text-[#9E9E9E] text-sm rounded-[5px] focus:ring-primary-500 focus:border-primary-500 block w-[408px] py-[12px] px-[28px] dark:placeholder-[#9E9E9E] font-poppins antialiased " placeholder="Your Email" required />
                                </div>
                                <div data-aos="fade-up">
                                    <input type="text" id="subject" className="block py-[12px] px-[28px]  w-[408px] text-sm text-[#9E9E9E] bg-[#18181C] rounded-[5px]  focus:ring-primary-500 focus:border-primary-500 placeholder-[#9E9E9E] font-poppins antialiased " placeholder="Let us know how we can help you" required />
                                </div>
                                <div className="sm:col-span-2"data-aos="fade-up">
                                    <textarea id="message" rows="6" className="block  py-[12px] px-[28px] h-[156px] w-[408px] bg-[#18181c] text-[#9E9E9E] rounded-[5PX] focus:ring-primary-500 focus:border-primary-50 dark:placeholder-[#9E9E9E] font-poppins antialiased " placeholder="Leave a comment..."></textarea>
                                </div>
                                <div className='flex'data-aos="fade-up">
                                <Button title='Get In Touch'/>

                                </div>
                            </form>
                        </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}

export default InTouch
