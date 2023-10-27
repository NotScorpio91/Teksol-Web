import React from 'react'
import cardbg from '../assets/svg/cardbg.svg'
import card1bg from '../assets/svg/card1bg.svg'
import card2bg from '../assets/svg/card2bg.svg'
import card3bg from '../assets/svg/card3bg.svg'
import card6bg from '../assets/svg/card6bg.svg'
import card5bg from '../assets/svg/card5bg.svg'
   

function Cards() {
  return (
    <div className='flex justify-center pt-20 pl-[1000px] absolute'>
      
        <img src={cardbg} alt="bg" />
        
            <img className='relative right-[808px]' src={card1bg} alt="bg" />
            <img className='relative right-[780px] bottom-[118px]' src={card2bg} alt="" />
            <img className='relative right-[752px] bottom-[60px]'   src={card3bg} alt="" />
            <img  className='relative right-[1240px] top-[120px]' src={card6bg} alt="" />
            <img className='relative right-[1213px] top-[175px]'  src={card5bg} alt="" />
            
            

         
      
    </div>
  )
}

export default Cards

