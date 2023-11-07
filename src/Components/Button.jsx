import React from 'react'

function Button({ title = 'Text', className }) {
  return (
    <div className='flex'>
      <button type="button" className={`text-black bg-gradient-to-r from-[#00c6ff] to-[#92EFFD] hover:opacity-100 opacity-80  font-medium rounded-md text-sm px-[69px] py-3 text-center  font-poppins antialiased transition-all active:scale-95 ${className}`}>
        {title}</button>
    </div>
  )
}

export default Button
