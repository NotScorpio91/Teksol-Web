import React from 'react'

function ServiceCard({heading,title,img1,img2,img3,distitle,dis}) {
    return (
        <div className='flex justify-center items-center mt-40 font-inter'>
            <div className='bg-[#0A0A0A] w-[1200px] px-1 rounded-md flex flex-col'>

                <div className="Heading flex flex-col gap-4 py-6 px-4 ">
                    <h1 className='text-white  font-bold text-4xl '>{heading}</h1>
                    <p className='text-[#9E9E9E] text-base '>{title}</p>
                </div>
                <div className="image grid grid-cols-3 justify-around gap-5 w-full rounded-lg  px-4 py-5">
                    <img className=' rounded-lg cursor-pointer shadow   hover:scale-105 hover:transition-all' src={img1} alt="" />
                    <img className=' rounded-lg cursor-pointer shadow   hover:scale-105 hover:transition-all' src={img2} alt="" />
                    <img className=' rounded-lg cursor-pointer shadow   hover:scale-105 hover:transition-all' src={img3} alt="" />

                </div>
                <div className="Dis flex flex-col justify-center  gap-6 px-4  pb-10 pt-12">

                    <div className=" flex flex-col gap-8 ">
                        <h1 className='text-white  text-3xl font-semibold'>{distitle}</h1>
                        <p className='text-[#9E9E9E] text-base  leading-6'>{dis}
                        </p>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
