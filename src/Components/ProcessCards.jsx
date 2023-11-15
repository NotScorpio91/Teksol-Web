import React, { useEffect } from 'react'
import Card from '../../Components/Card'
import {IoEarth} from 'react-icons/io5'
import {CiMobile3} from 'react-icons/ci'
import {SiSololearn} from 'react-icons/si'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'
import {FaPenFancy} from 'react-icons/fa6'
import {PiMagicWand} from 'react-icons/pi'
import {FaReact} from 'react-icons/fa6'
import {BiLogoVuejs} from 'react-icons/bi'
import {SiDjango} from 'react-icons/si'
import {TbBrandNodejs} from 'react-icons/tb'
import {SiFlutter} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {FaJava} from 'react-icons/fa6'
import {SiCplusplus} from 'react-icons/si'
import {FiFigma} from 'react-icons/fi'
import {SiAdobephotoshop} from 'react-icons/si'
import {SiAdobeillustrator} from 'react-icons/si'
import {SiAdobeindesign} from 'react-icons/si'
import {MdOutlineScreenSearchDesktop} from 'react-icons/md'
import {MdAnalytics} from 'react-icons/md'
import {SiVorondesign} from 'react-icons/si'
import {TbEdit} from 'react-icons/tb'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Cards() {
  useEffect(()=>{
    AOS.init({duration:500})
  },[])
  const cards = [
    {
      title: 'Web App Development',
      icon: <IoEarth size={65}  />,
      items: [
        {
          title: 'REACT',
          icon: <FaReact size={35} color='9E9E9E' />,
        },
      ]
    },
    {
      title: 'Mobile App Development',
      icon: <CiMobile3 size={65} />,
      items: [
        {
          title: 'REACT NATIVE',
          icon: <FaReact size={35} color='9E9E9E' />,
        },
        
      ]
    },
    {
      title: 'ML & AI',
      icon: <SiSololearn size={65} />,
      items: [
        {
          title: 'PYTHON ',
          icon: <SiPython size={35} color='9E9E9E' />,
        },
      ]
    },
    {
      title: ' Digital Marketing',
      icon: <BsFillJournalBookmarkFill size={65} />,
      items: [
        {
          title: 'SEO',
          icon: <MdOutlineScreenSearchDesktop size={35} color='9E9E9E' />
        },
        
      ]
    },
    {
      title: 'UI/UX Consultation',
      icon: <FaPenFancy size={65} />,
      items: [
        {
          title: 'FIGMA',
          icon: <FiFigma size={35} color='9E9E9E' />
        },
    
      ]
    },
    {
      title: 'Custom Solutions',
      icon: <PiMagicWand size={65} />,
      items: [
        {
          title: 'Tailored to fit your unique needs, our custom software solutions pave the way for innovation and efficiency, delivering exactly what your business demands.',
          titleClass: ''
        },
      
        
      ]
    },
    
  ];


  return (
    <div className='flex justify-center items-center pt-24'>
      <div className='w-[1200px] space-y-8'> 
      <div className='flex flex-col justify-center items-center pb-36'>
      <h1 className='text-[#FFF] font-poppins text-lg w-fit h-[80px] cursor-text antialiased bg-gradient-to-r from-[#00c6ff] to-[#92EFFD] text-transparent bg-clip-text hover: 'data-aos="fade-up">Process</h1>
        <h1 className='text-[#FFF] font-poppins text-[42px]  font-semibold leading-[80px] w-fit h-fit cursor-text antialiased mb-7 'data-aos="fade-up">We Follow</h1>
      </div>
        <div className='grid grid-cols-3 cursor-pointer pb-52 '>
            {cards.map(card => (
              <Card title={card.title} png={card.icon} items={card.items} />
            ))}
        </div>

      </div>
    </div>
  )
}

export default Cards
