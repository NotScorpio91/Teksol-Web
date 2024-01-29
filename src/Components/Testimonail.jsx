import React from 'react'


function Testimonaial({title,rank,profile,text}) {
  return (
<div>
    <div className='aspect-auto p-8 dark:bg-gradient-to-r dark:from-primary-black dark:to-black dark:text-white  border dark:border-primary-black dark:hover:border-gray-600 rounded-none  font-poppins text-gray-500 bg-gray-50 border-gray-300 hover:border-gray-400 shadow-xl dark:shadow-none '>
      <div className="flex gap-4">
        <img className='w-12 h-12 rounded-full' src={profile} alt="profile" />
        <div>
        <h6 className='text-lg font-medium text-gray-700 dark:text-white'>{title}</h6>
        <p className='text-sm text-gray-500 dark:text-gray-300'>{rank}</p>
        </div>
      </div>
      <p className='mt-8'>{text}</p>
    </div>
</div>
  )
}

export default Testimonaial
