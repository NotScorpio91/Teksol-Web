import React from 'react'
import one from '../assets/testing/one.jpg'
import two from '../assets/testing/two.jpg'
import three from '../assets/testing/three.jpg'
import four from '../assets/testing/four.jpg'
import five from '../assets/testing/five.jpg'
import six from '../assets/testing/six.jpg'
function ProjectCard() {
  return (
    <div className=' flex justify-center mt-40 '>
      <div className='bg-[#0A0A0A] w-[1200px] px-1 rounded-md'>
        <div>
          <div className="L.H.S flex justify-between items-center pl-[150px] my-6 ">
            <div className='flex justify-center items-center gap-6 '>
              <img className='rounded-full w-[150px] h-36 ' src={one} alt="" />
              <div>
                <h1 className='text-white font-semibold font-poppins antialiased '>Project Listing Card | Project Management Tool</h1>
                <p className='text-sm text-[#9E9E9E]   font-poppins antialiased'>Learn how to grow your business.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t-[1px]  border-black '>
          <div className='flex justify-between my-4 mx-40 '>
            <div className='flex  flex-col '>
              <h1 className='text-white  font-poppins antialiased '>Start Date</h1>
              <p className='text-lg text-[#9E9E9E] font-semibold   font-poppins antialiased'>Nov 1, 2023 </p>
            </div>
            <div>
              <h1 className='text-white  font-poppins antialiased '>Due Date</h1>
              <p className='text-lg text-[#9E9E9E] font-semibold   font-poppins antialiased'>Nov 13, 2023 </p>
            </div>
            <div>


              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-white ">Members</span>
               
              </div>
              <div className='flex justify-between items-center gap-2'>

              <div className="w-36 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
              </div>
              <span className="text-sm font-medium text-white ">45%</span>
              </div>


            </div>
            <div>
              <h1 className='font-poppins text-white'>Members</h1>
              <div className="flex -space-x-4 rtl:space-x-reverse">
                <img className="w-10 h-10 border-2 border-white rounded-full " src={two} alt="" />
                <img className="w-10 h-10 border-2 border-white rounded-full " src={three} alt="" />
                <img className="w-10 h-10 border-2 border-white rounded-full " src={four} alt="" />
                <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white  border-2 border-white rounded-full bg-black bg-opacity-80 backdrop-blur-sm  z-10" href="#">+5</a>
              </div>
            </div>
              
          </div>
        </div>
        <div>
          <div className='flex flex-col-2 justify-between mx-10 mt-20'>
            

          </div>
        </div>
      </div>
    </div>

  )
}

export default ProjectCard
