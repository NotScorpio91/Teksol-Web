import React from 'react'
import plus from '../assets/svg/plus.svg'

const Accordion = () => {
  return (
    <div className='accordion'>
      <div className='iten'>
        <p className="number">number</p>
        <p className="text">question</p>
        <img src={plus} alt="plus" />
        <div className="hidden-box">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, id quo maxime dolore provident in culpa eaque magnam corrupti quibusdam! Officia ut dicta maxime veniam ipsa doloribus assumenda fugit molestiae.</p>
        </div>
      </div>
    </div>
  )
}

export default Accordion
