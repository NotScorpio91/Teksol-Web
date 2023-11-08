import React from 'react'
import {TbBarrierBlock} from 'react-icons/tb'

function Pnf() {
  return (
    <div className='flex flex-col justify-center items-center pb-10 h-[100vh] bg-Black text-white'>
      <h1 className='font-poppins text-8xl antialiased font-black'>404</h1>
      <TbBarrierBlock size={180} color='white' />
      <p className='font-poppins text-7xl font-black antialiased'>Page Not Found</p>
    </div>
  )
}

export default Pnf
