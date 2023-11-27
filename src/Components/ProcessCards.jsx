import React from 'react'
import ProCard from './ProCard'
import Requirement from  '../assets/svg/requirement.svg'
import Design from  '../assets/svg/design.svg'
import Prototype from  '../assets/svg/pototype.svg'
import development from  '../assets/svg/development.svg'
import quality from  '../assets/svg/quality.svg'
import deployment from  '../assets/svg/deployment.svg'
import support from '../assets/svg/support.svg'

function ProcessCards() {
  const cards = [
    {
      title: '1. Requirement Gathering',
      icon: Requirement,
      items: [
        {
          title: 'We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.',
         
        },
      ]
    },
    {
      title: '2. UI/UX Design',
      icon: Design,
      items: [
        {
          title: 'We create catchy and charming designs with the latest tools of designing to make it a best user-friendly experience.',
        },
        
      ]
    },
    {
      title: '3. Prototype',
      icon: Prototype,
      items: [
        {
          title: 'After designing, you will get your prototype, which will be sent ahead for the development process for the product. ',
        
        },
      ]
    },
    {
      title: '4.  Development',
      icon: development,
      items: [
        {
          title: 'Development of mobile application/web/blockchain started using latest tools and technologies with transparency.',
        },
        
      ]
    },
    {
      title: '5. Quality Assurance',
      icon: quality,
      items: [
        {
          title: 'Hyperlink values quality and provides 100% bug free application with no compromisation in it.'
        },
      
        
      ]
    },
    {
        title: '6. Deployment',
        icon: deployment,
        items: [
          {
            title: 'After trial and following all processes, your app is ready to launch on the App store or Play Store.',
            titleClass: ''
          },
        
          
        ]
      },
      {
        title: '7. Support & Maintenance',
        icon: support,
        items: [
          {
            title: 'Our company offers you all support and the team is always ready to answer every query after deployment.',
            titleClass: ''
          },
        
          
        ]
      },
  ];

  return (
    <div className='flex justify-center items-center pt-24 font-inter'>
      <div className='w-[1200px] space-y-8'> 
      <div className='flex flex-col justify-center items-center pb-6'>
        <h1 className='text-[#FFF]  text-[42px]  font-semibold leading-[80px] w-fit h-fit cursor-text antialiased mb-7 '>Process We Follow</h1>
      </div>
        <div className='grid grid-cols-3 gap-10  cursor-pointer pb-52 '>
            {cards.map(card => (
              <ProCard title={card.title} png={card.icon} items={card.items} />
            ))}
        </div>


      </div>
    </div>
  )
}

export default ProcessCards
