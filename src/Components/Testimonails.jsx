import React from 'react'
import { IoStar } from "react-icons/io5";

function Testimonaials() {
  return (
    <section
  className="rounded-md sm:p-6 text-center shadow-lg md:p-12 md:text-left mt-40 font-inter">
  <div className="flex justify-center">
    <div className="max-w-3xl">
      <div
        className="m-4 block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20">
       
        <div className="md:flex md:flex-row">
          <div
            className="mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
              className="rounded-full shadow-md dark:shadow-black/30"
              alt="woman avatar" />
          </div>
          <div className="md:ml-6">
            <div>
            <p
              className="mb-6 font-light text-neutral-500 dark:text-neutral-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
              quam sapiente molestiae numquam quas, voluptates omnis nulla
              ea odio quia similique corrupti magnam.
              
            </p>

            </div>
            <div className='sm:flex sm:justify-between items-center'>
              <div>

            <p
              className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
              Anna Smith
            </p>
            <p
              className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
              Product manager
            </p>
            </div>
            <div className='flex justify-center items-center'>
            <IoStar size={20} color='yellow' />
            <IoStar size={20} color='yellow' />
            <IoStar size={20} color='yellow' />
            <IoStar size={20} color='yellow' />
            <IoStar size={20} color='yellow' />
            </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</section>
  )
}

export default Testimonaials
