import React from 'react'
import Card from '../../Components/Card'
import { IoEarth } from 'react-icons/io5'
import { CiMobile3 } from 'react-icons/ci'
import { SiSololearn } from 'react-icons/si'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { FaPenFancy } from 'react-icons/fa6'
import { PiMagicWand } from 'react-icons/pi'
import { FaReact } from 'react-icons/fa6'
import { BiLogoVuejs } from 'react-icons/bi'
import { SiDjango } from 'react-icons/si'
import { TbBrandNodejs } from 'react-icons/tb'
import { SiFlutter } from 'react-icons/si'
import { SiPython } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { FaJava } from 'react-icons/fa6'
import { SiCplusplus } from 'react-icons/si'
import { FiFigma } from 'react-icons/fi'
import { SiAdobephotoshop } from 'react-icons/si'
import { SiAdobeillustrator } from 'react-icons/si'
import { SiAdobeindesign } from 'react-icons/si'
import { MdOutlineScreenSearchDesktop } from 'react-icons/md'
import { MdAnalytics } from 'react-icons/md'
import { SiVorondesign } from 'react-icons/si'
import { TbEdit } from 'react-icons/tb'
import { TbBrandKotlin } from 'react-icons/tb'
import { SiSwift } from 'react-icons/si'
function Cards() {
	const tkIconSize = 20;
    const cards = [
        {
            title: 'Web Development',
            slug: '/work/web-development',
            icon: <IoEarth size={40} />,
			text: 'Multi-functional web platforms, customized for your business needs',
            items: [
                {
                    title: 'REACT',
                    icon: <FaReact size={tkIconSize} className='hover:fill-white fill-gray-400' />,
                    iconClass: 'pb-1',
                },
                {
                    title: 'VUE',
                    icon: <BiLogoVuejs size={tkIconSize} className='hover:fill-white fill-gray-400' />,
                    iconClass: 'pb-1',
                },
                {
                    title: 'DJANGO',
                    icon: <SiDjango size={tkIconSize} className='hover:fill-white fill-gray-400' />,
                    iconClass: 'pb-1',
                },
                {
                    title: 'NODE.JS',
                    icon: <TbBrandNodejs size={tkIconSize} className='hover:fill-white fill-gray-400' />,
                    iconClass: 'pb-1',
                },
            ],
        },
        {
            title: 'React Native',
            slug: '/work/react-native',
            icon: <CiMobile3 size={40} />,
			text: 'Build apps at an affordable rate and in rapidly. (Android & IOS)',
            items: [
                {
                    title: 'REACT NATIVE',
                    icon: <FaReact size={tkIconSize} className='hover:fill-white fill-gray-400' />,
                    iconClass: 'pb-1',
                },
                {
                    title: 'FLUTTER',
                    icon: <SiFlutter size={tkIconSize} className='hover:fill-white fill-gray-400' />,
                    iconClass: 'pb-1',
                },
                {
                    title: 'KOTLIN',
                    icon: <TbBrandKotlin size={tkIconSize} className='hover:fill-white fill-gray-400' />,
                    iconClass: 'pb-1',
                },
                {
                    title: 'SWIFT',
                    icon: <SiSwift size={tkIconSize} className='hover:fill-white fill-gray-400' />,
                    iconClass: 'pb-1',
                },
            ],
        },
        {
            title: 'ML & AI',
            slug: '/work/ai',
            icon: <SiSololearn size={40} />,
			text: 'Both out of the box as well as custom-made to boost your application with Generative AI',
            items: [
                {
                    title: 'PYTHON ',
                    icon: <SiPython size={tkIconSize} className='hover:fill-white fill-gray-400' />,
                    iconClass: 'pb-1',
                },
                {
                    title: 'JavaScript',
                    icon: <IoLogoJavascript size={tkIconSize} className='hover:fill-white fill-gray-400' />,
                },
                {
                    title: 'JAVA',
                    icon: <FaJava size={tkIconSize} className='hover:fill-white fill-gray-400' />,
                    iconClass: 'pb-1',
                },
                {
                    title: 'C++',
                    icon: <SiCplusplus size={tkIconSize} className='hover:fill-white fill-gray-400' />,
                    iconClass: 'pb-1',
                },
            ],
        },
        {
            title: 'Digital Marketing',
            slug: '/work/digital-marketing',
            icon: <BsFillJournalBookmarkFill size={40} />,
			text: 'Need help running value-for-money ads? Let our experts do the work',
            items: [
                {
                    title: 'SEO',
                    icon: (
                        <MdOutlineScreenSearchDesktop
                            size={tkIconSize}
                            className='hover:fill-white fill-gray-400'
                        />
                    ),
                    iconClass: 'pb-1',
                },
                {
                    title: 'Data analysis',
                    icon: <MdAnalytics size={tkIconSize} className='hover:fill-white fill-gray-400' />,
                    iconClass: 'pb-1',
                },
                {
                    title: 'Web design',
                    icon: <SiVorondesign size={tkIconSize} className='hover:fill-white fill-gray-400' />,
                    iconClass: 'pb-1',
                },
                {
                    title: 'CMS',
                    icon: <TbEdit size={tkIconSize} className='hover:fill-white fill-gray-400' />,
                    iconClass: 'pb-1',
                },
            ],
        },
        {
            title: 'UI/UX',
            slug: '/work/ui-ux',
            icon: <FaPenFancy size={40} />,
			text: 'Re-brand your website with the on-the-edge design with the latest UX-UI to improve your brand...',
            items: [
                {
                    title: 'FIGMA',
                    icon: <FiFigma size={tkIconSize} className='hover:fill-white fill-gray-400' />,
                    iconClass: 'pb-1',
                },
                {
                    title: 'PHOTOSHOP',
                    icon: <SiAdobephotoshop size={tkIconSize} className='hover:fill-white fill-gray-400' />,
                    iconClass: 'pb-1',
                },
                {
                    title: 'INDESIGN',
                    icon: <SiAdobeindesign size={tkIconSize} className='hover:fill-white fill-gray-400' />,
                    iconClass: 'pb-1',
                },
                {
                    title: 'ILLUSTRATOR',
                    icon: <SiAdobeillustrator size={tkIconSize} className='hover:fill-white fill-gray-400' />,
                    iconClass: 'pb-1',
                },
            ],
        },
        {
            title: 'Custom Solutions',
            slug: '/work/custom-solutions',
            icon: <PiMagicWand size={40} />,
			text: 'Tailored to fit your unique needs, our custom software solutions pave the way for innovation and efficiency, delivering exactly what your business demands.',
            classNameForText: !'flex',
            items: [
                
            ],
        },
    ]

    return (
        <div className="flex justify-center items-center sm:pt-24 mx-4 sm:px-4">
            <div className="sm:w-[1280px]  space-y-8">
                <div className=" pb-6  text-left">
                    <h1 className="text-[#FFF] uppercase font-poppins sm:text-3xl text-lg sm:w-fit cursor-text antialiased bg-gradient-to-r from-[#00c6ff] to-[#92EFFD] text-transparent bg-clip-text hover: ">
                        What we do
                    </h1>
                    <p className="text-white font-poppins text-xs sm:text-[18px] font-extralight sm:leading-[28px] sm:w-[980px] mt-6 sm:h-[66px] cursor-text antialiased">
                        <span className="sm:font-semibold font-medium font-poppins">
                            At TEKSOL,
                        </span>{' '}
                        Our range of services are all built on our core
                        competency of database architecture and REST API
                        framework with expertise in Javascript development.
                    </p>
                </div>
                <div className="flex flex-col sm:grid sm:grid-cols-3 gap-8 justify-center items-center container cursor-pointer sm:pb-10">
                    {cards.map(card => (
                        <Card
                            title={card.title}
                            png={card.icon}
                            items={card.items}
							text={card.text}
                            slug={card.slug}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards
