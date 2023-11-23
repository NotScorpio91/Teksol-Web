import React from 'react'


function Card({ png, title, items, classNameForText = '' }) {

  return (
    <div className='text-white my-5 transition-all w-full  sm:hover:scale-105 sm:hover:transition-all select-none ' >
      <div className=' bg-[#0A0A0A] w-full  sm:w-[350px] h-[371px] rounded-2xl flex justify-center flex-col items-center space-y-7 '>
         {png} 
        <h1 className='text-white font-semibold font-poppins antialiased text-base '>{title}</h1>


        <div className={`text-sm text-[#9E9E9E] text-left w-full  font-poppins antialiased grid grid-cols-2 justify-center items-center ${classNameForText}`}>{items.map(item => (
          <p className={`flex flex-col  my-3 items-center rounded-md text-xs sm:text-sm w-full justify-center    ${item?.titleClass}`}>
            <div className={`${item?.iconClass}`}>

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
