import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Card({ png, title, items, }) {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, []);
  return (
    <div className='text-white my-5 transition-all active:scale-95  hover:scale-105 hover:transition-all  ' >
      <div className=' bg-[#18181C] w-[350px] h-[371px] rounded-2xl flex justify-center flex-col items-center space-y-7  ' data-aos="fade-up">
        {png}
        <h1 className='text-white font-semibold font-poppins antialiased '>{title}</h1>


        <div className='text-sm text-[#9E9E9E] text-left w-[320px] h-[83px] font-poppins antialiased grid grid-cols-2 justify-center items-center '>{items.map(item => (
          <p className={`flex ml-2 my-3 items-center rounded-[5px] w-[320px] ${item?.titleClass}`}>
            <div className='flex justify-center items-center mx-2'>
              {item.icon}
            </div>
            {item.title}
          </p>
        ))}</div>
      </div>
    </div>
  )
}

export default Card
