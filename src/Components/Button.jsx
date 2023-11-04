import React from 'react'

function Button({ title = 'Text', className }) {
  return (
    <div className='flex'>
      <button type="button" class={`text-white bg-gradient-to-r from-[#FF9898] to-[#8054FF] hover:opacity-100 opacity-80  font-medium rounded-md text-sm px-[69px] py-3 text-center  font-poppins antialiased transition-all active:scale-95 ${className}`}>
        {title}</button>
    </div>
  )
}

export default Button
