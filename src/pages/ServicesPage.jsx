import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import MobileNavBar from '../Components/MobileNavBar'
import Footer from '../Components/Footer'
import AppLayout from '../Components/AppLayout'
import Container from '../Components/Container'
import { useParams } from 'react-router-dom'
import { MdArrowForward } from 'react-icons/md'
import Button from '../Components/Button'

import pI_sc_logo from '../assets/work-images/projects/socialcurrant_logo.svg'
import pI_sc_image from '../assets/work-images/projects/socialcurrant_image.png'
import pI_ef_image from '../assets/work-images/projects/earnfluencers_image.png'
import pI_kb_logo from '../assets/work-images/projects/kikboss_logo.png'
import pI_dn_logo from '../assets/work-images/projects/dentinect_logo.png'
import pI_tt_logo from '../assets/work-images/projects/thingtrax_logo.svg'
import pI_tt_image from '../assets/work-images/projects/thingtrax_image.png'


import Dcaa from '../assets/work-images/projects/dcaa-iian.png'
import Edukko from '../assets/work-images/projects/edukkolearn.png'
import SideKick from '../assets/work-images/projects/sidekick.png'

import senpai from '../assets/work-images/projects/senpaii.png'
import theseus from '../assets/work-images/projects/theseus.png'





const services = [
    {
        title: 'Web Development',
        slug: 'web-development',
        tagline: 'We are Web Development Experts.',
        projects: [
            {
                textColor: 'text-white',
                class: 'sm:col-span-2 flex flex-col   !bg-gradient-to-br from-[#30104C] to-[#2565F4]',
                imageClass: 'sm:absolute sm:w-[400px] sm:right-6  sm:-bottom-12 relative -bottom-20 w-fit',
                title: 'Social Currant',
                slug: 'social-currant',
                image: pI_sc_image,
                logo: pI_sc_logo,
                description: 'we match causes & campaigns with creators.',
                tech: [
                    {
                        name: 'VueJS',
                        icon: '',
                    },
                    {
                        name: 'Django',
                        icon: '',
                    },
                    {
                        name: 'Docusign',
                        icon: '',
                    },
                ],
                links: [
                    {
                        name: 'Visit the website',
                        href: 'https://socialcurrant.co/',
                    },
                ],
            },
            {
                textColor: '!text-white',
                class: '!bg-gradient-to-tl from-black to-[#3F51B5]',
                imageClass: 'absolute w-[400px] right-6 -bottom-12',
                title: 'Kikboss',
                slug: 'kikboss',
                image: '',
                logo: pI_kb_logo,
                description:
                    'KiKBoss is a platform, connecting sellers to potential buyers, and making it easy to buy and sell from anywhere, anytime online.',
                tech: [
                    {
                        name: 'Laravel',
                        icon: '',
                    },
                    {
                        name: 'jQuery',
                        icon: '',
                    },
                ],
                links: [
                    {
                        name: 'Visit the website',
                        href: 'https://kikboss.com/',
                    },
                ],
            },
            {
                textColor: '!text-black',
                class: '!bg-gradient-to-r from-white to-[#71569C]',
                imageClass: 'absolute w-[230px] right-10 -bottom-20',
                title: 'DentiNect',
                slug: 'dentinect',
                image: '',
                logo: pI_dn_logo,
                description:
                    'DentiNect- a Digitally Integrated Smart Oral Health Care Solution Aims to Provide the Highest Quality of Health Care at Fractional Costs.',
                tech: [
                    {
                        name: 'ExpressJS',
                        icon: '',
                    },
                    {
                        name: 'Bootstrap',
                        icon: '',
                    },
                ],
                links: [
                    {
                        name: 'Visit the website',
                        href: 'https://dentinect.co/',
                    },
                ],
            },
            {
                textColor: '!text-black',
                class: 'sm:col-span-2 flex flex-col h-[601px] !bg-gradient-to-r from-[#9333EA] to-gray-300',
                imageClass: 'sm:absolute sm:w-[230px] h-fit sm:right-16 sm:bottom-0 relative sm:px-0 px-16   -bottom-12',
                title: 'Earnfluencers',
                slug: 'earnfluencers',
                image: pI_ef_image,
                logo: '',
                description:
                    'Connect with brands, showcase your talent, and monetize your content. Join our community of successful TikTokers and turn your passion into profit.',
                tech: [
                    {
                        name: 'React',
                        icon: '',
                    },
                    {
                        name: 'Laravel',
                        icon: '',
                    },
                ],
                links: [
                    {
                        name: 'Visit the website',
                        href: 'https://earnfluencers.com/',
                    },
                ],
            },
            {
                textColor: 'text-white',
                class: 'sm:col-span-3 flex flex-col !bg-gradient-to-br from-[#E94B48] to-[#02C25F]',
                imageClass:
                    'sm:absolute sm:w-[600px] sm:right-16 sm:bottom-0 sm:!rounded-t-3xl sm:overflow-hidden sm:border-t-[10px] sm:border-x-[10px] border-black relative -bottom-10 border-t-[4px] border-x-[4px] !rounded-t-[6px]',
                title: 'Thingtrax',
                slug: 'thingtrax',
                image: pI_tt_image,
                logo: pI_tt_logo,
                description:
                    'The Leadership Dashboard is a control panel for CEOs that shows organisational effectiveness. It provides real-time visibility of the organisation’s progress against key metrics such as OEE, quality, and safety. ',
                tech: [
                    {
                        name: 'Django',
                        icon: '',
                    },
                    {
                        name: 'Python',
                        icon: '',
                    },
                ],
                links: [
                    {
                        name: 'Visit the website',
                        href: 'https://thingtrax.com/',
                    },
                ],
            },
        ],
        techstacks: [
            'NextJS',
            'ReactJS',
            'VueJS',
            'ExpressJS',
            'Django',
            'Laravel',
            'Bootstrap',
            'jQuery',
            'Docusign',
            'AWS',
            'Netlify',
            'Vercel',
            'TailwindCSS',
        ],
    },
    {
        title: 'App Development',
        slug: 'app-development',
        tagline: 'We are Mobile App Development Experts.',
        projects: [
            {
                textColor: 'text-white',
                class: 'sm:col-span-2 flex flex-col  !bg-gradient-to-r from-[#282828] to-[#171717]',
                imageClass: 'sm:relative  sm:left-[480px]  sm:bottom-[230px]    w-full sm:w-fit   relative  px-16 sm:px-0 -bottom-10 ',
                title: 'DCAA IIAN',
                slug: 'dcaa-iian',
                image: Dcaa,
                logo: '',
                description: 'investigates Accidents & Incidents related to civil aviation within the Emirate of Dubai',
                tech: [
                    {
                        name: 'VueJS',
                        icon: '',
                    },
                    {
                        name: 'Django',
                        icon: '',
                    },
                    {
                        name: 'Docusign',
                        icon: '',
                    },
                ],
                links: [
                    {
                        name: 'App Store',
                        href: 'https://apps.apple.com/us/app/dcaa-iian/id1466031139',
                    },
                    {
                        name: 'Play Store',
                        href: 'https://play.google.com/store/apps/details?id=com.iian.dcaa&hl=en&gl=US',
                    },
                ],
            },
            {
                textColor: '!text-black',
                class: '!bg-blue-100',
                imageClass: 'absolute w-[400px] right-6 -bottom-12',
                title: 'Niceonesa',
                slug: 'Niceonesa',
                image: '',
                logo: '',
                description:
                    'niceonesa app is an online store with nationally-focused sales..',
                tech: [
                    {
                        name: 'Laravel',
                        icon: '',
                    },
                    {
                        name: 'jQuery',
                        icon: '',
                    },
                ],
                links: [
                    {
                        name: 'App Store',
                        href: 'https://apps.apple.com/fm/app/nice-one-%D9%86%D8%A7%D9%8A%D8%B3-%D9%88%D9%86/id1271754138',
                    },
                    {
                        name: 'Play Store',
                        href: 'https://play.google.com/store/apps/details?id=com.NiceOne.App&hl=en&gl=US',
                    },
                ],
            },
            {
                textColor: 'text-white',
                class: 'bg-[#AF1F24]',
                imageClass: 'absolute  w-[230px] right-10 -bottom-20',
                title: 'AlMawashi ',
                slug: 'almawashi ',
                image: '',
                logo: '',
                description:
                    'AlMawashi provides all kinds of fresh, chilled, frozen, and processed halal meat.',
                tech: [
                    {
                        name: 'ExpressJS',
                        icon: '',
                    },
                    {
                        name: 'Bootstrap',
                        icon: '',
                    },
                ],
                links: [
                    {
                        name: 'App Store',
                        href: 'https://apps.apple.com/us/app/almawashi/id1146151226',
                    },
                    {
                        name: 'Play Store',
                        href: 'https://play.google.com/store/search?q=AlMawashi&c=apps&hl=en&gl=US',
                    },
                ],
            },
            {
                textColor: 'text-white',
                class: 'sm:col-span-2 flex flex-col  !bg-gradient-to-br from-[#122047] to-[#254499]',
                imageClass: 'sm:absolute  sm:h-fit sm:right-10 sm:-bottom-11 w-full sm:w-fit px-8 sm:px-0 relative  -bottom-9  ',
                title: 'Edukko Learn',
                slug: 'edukko-learn',
                image: Edukko,
                logo: '',
                description:
                    "Edukko is a learning platform intended to give educators parents and students a single robust secure integrated     framework to establish customized learning environments.",
                tech: [
                    {
                        name: 'React',
                        icon: '',
                    },
                    {
                        name: 'Laravel',
                        icon: '',
                    },
                ],
                links: [
                    {
                        name: 'App Store',
                        href: 'https://apps.apple.com/us/app/edukko-learn/id6443897514?platform=iphone',
                    },
                    {
                        name: 'Play Store',
                        href: 'https://play.google.com/store/apps/details?id=com.edukkostudent.android&hl=en_US',
                    },
                ],
            },
            {
                textColor: '!text-black',
                class: 'sm:col-span-3 flex flex-col bg-gradient-to-r from-[#FFD701] to-[#EAECED]',
                imageClass:
                    'sm:absolute sm:w-[320px] sm:right-16 sm:-bottom-1 sm:px-2 px-8  relative -bottom-10 ',
                title: 'Sidekick',
                slug: 'thingtrax',
                image: SideKick,
                logo: '',
                description:
                    'The Leadership Dashboard is a control panel for CEOs that shows organisational effectiveness. It provides real-time visibility of the organisation’s progress against key metrics such as OEE, quality, and safety. ',
                tech: [
                    {
                        name: 'Django',
                        icon: '',
                    },
                    {
                        name: 'Python',
                        icon: '',
                    },
                ],
                links: [
                    {
                        name: 'App Store',
                        href: 'https://apps.apple.com/us/app/sidekick-meet-train-play/id1626421655',
                    },
                    {
                        name: 'Play Store',
                        href: 'https://play.google.com/store/apps/details?id=com.app.sidekick&hl=en&gl=US',
                    },
                ],
            },
        ],
        techstacks: [
            'Android',
            'IOS',
            'Flutter',
            'React Native',
            'Kotlin',
            'Ionic',
            'Bootstrap',
            'Swift',
            'Beacon',
            'PhoneGap',
            'Wearables',
            'TailwindCSS',
        ],
    },
    {
        title: 'Prouct Design',
        slug: 'product-design',
        tagline: 'We are Prouct Design Development Experts.',
        projects: [
            {
                textColor: 'text-white',
                class: 'sm:col-span-3 flex flex-col   !bg-gradient-to-br from-[#DE0BC9] to-[#1286F0]',
                imageClass: 'sm:absolute  sm:right-0  sm:bottom-0    w-full sm:w-[550px]   relative right-2   sm:px-0 -bottom-10 ',
                title: 'Senpai',
                slug: 'senpai',
                image: senpai,
                logo: '',
                description: 'Senpai: Figma mobile app with a charming anime theme. Vibrant, playful, and user-friendly for an enchanting experience',
                tech: [
                    {
                        name: 'Figma',
                        icon: '',
                    },
                    {
                        name: 'TailwindCss',
                        icon: '',
                    },
                ],
                links: [
                    {
                        name: 'Visit the Design',
                        href: 'https://www.figma.com/file/vCpL0L7tEJ0dxJPMTjz243/Senpai-prod.?type=design&node-id=0-1&mode=design',
                    },
                ],
            },           
        ],
        techstacks: [
            'Adobe Photoshop',
            'Adobe Illustrator',
            'Canva',
            'InDesign',        
           'WordPress',
           'Figma',
           'Bootstrap',
           'GIMP',
            'Bootstrap',
            'TailwindCSS',
        ],
    },
    {
        title: ' Ai',
        slug: 'ai',
        tagline: 'We are Ai Development Experts.',
        projects: [
            {
                textColor: '!text-black',
                class: 'sm:col-span-3 flex flex-col   !bg-gradient-to-br from-white to-[#156AD6]',
                imageClass: 'sm:absolute  sm:right-20  sm:bottom-0    w-full sm:w-[550px]   relative    sm:px-0 -bottom-10 m:!rounded-t-3xl sm:overflow-hidden sm:border-t-[10px] sm:border-x-[4px] border-black  border-t-[4px] border-x-[4px] !rounded-t-[6px] ',
                title: 'Theseus Ai',
                slug: 'theseusai',
                image: theseus,
                logo: '',
                description: 'SpineAI uses AI-driven analysis with the help of top neurosurgeons and orthopedic surgeons. Hundreds of imaging data points analyzed.',
                tech: [
                    {
                        name: 'Python',
                        icon: '',
                    },
                    {
                        name: 'Scala',
                        icon: '',
                    },
                    {
                        name: 'JavaScript',
                        icon: '',
                    },
                ],
                links: [
                    {
                        name: 'Visit the Website',
                        href: 'https://www.theseusai.com/',
                    },
                ],
            },           
        ],
        techstacks: [
            'Python',
            'C++',
            'JavaScript',
            'Julia',        
           'Scala',
           'Java',
           'R',
           'Go',
        ],
    },
]

function Card({ item }) {
    return (
        <div
            className={`bg-primary-black overflow-hidden relative text-white w-full h-fit sm:h-[350px] border border-primary-black hover:border-gray-600 rounded-none flex justify-start flex-row items-start p-10  sm:gap-5 px-4 sm:px-10    ${item.class} ${item.textColor}`}>
                
            <div className="flex flex-col gap-4 sm:w-[400px] w-full  "> 
                <h1
                    className={`text-white font-bold font-poppins antialiased text-2xl ${item.textColor}`}>
                    {item.title}
                </h1>
                <div
                    className={`text-xs sm:text-sm flex flex-row text-gray-700 text-left w-full font-poppins antialiased gap-3`}>
                    {item.tech &&
                        item.tech.map(tech => (
                            <div  className={`bg-black/30 text-white px-4 py-2`}>
                                {tech.name}
                            </div>
                        ))}
                </div>
                <p
                    className={`text-white font-light font-poppins antialiased text-sm sm:text-lg ${item.textColor}`}>
                    {item.description}
                </p>

                <div className="flex flex-row  gap-4">
                    {item.links &&
                        item.links.map(link => (
                            <a
                                href={link.href}
                                target="_blank"
                                className={`underline text-white underline-offset-[5px] flex flex-row gap-2 items-center ${item.textColor}`}
                                rel="noreferrer">
                                {link.name} <MdArrowForward />
                            </a>
                        ))}
                </div>
            </div>
            <div className={item.imageClass}>
                <img src={item.image} className="w-full" />
            </div>
        </div>
    )
}

function ServicesPage() {
    const { slug } = useParams()
    const [service, setService] = useState({})

    useEffect(() => {
        const selectedService = services.find(item => item.slug == slug)
        if (selectedService) {
            setService(selectedService)
        }
    }, [slug])

    useEffect(() => {
        document.body.scrollTo(0, 0)

    }, [])

    return (
        <AppLayout>
            <NavBar />
            <MobileNavBar />
            <div className="w-full h-fit sm:h-72 mt-16 dark:bg-gray-800 bg-white  ">
            <div 
                aria-hidden="true"
                className="absolute inset-0 dark:grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 hidden">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
            <div 
                aria-hidden="true"
                className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40  ">
                <div className="blur-[106px] h-36 bg-gradient-to-t from-gray-500 to-gray-50 "></div>
                <div className="blur-[106px] h-36 bg-gradient-to-t from-gray-500 to-gray-50 "></div>
            </div>
                <Container className=" h-fit sm:h-full !justify-center sm:!justify-start">
                    <h1 className=" text-[28px] text-center sm:text-start sm:text-[3.5rem] dark:text-white text-black">
                        {service.tagline}
                    </h1>
                </Container>
            </div>

            <Container className="h-full !justify-start !items-center sm:!items-start mt-10 !flex-col gap-4">
                <h2 className="text-xl dark:text-white text-gray-500 text-center sm:text-left ">Our Projects</h2>
                <div className="flex flex-col gap-y sm:grid sm:grid-cols-3 gap-8 justify-center items-center container cursor-pointer pb-10">
                    {service &&
                        service.projects &&
                        service.projects.map((project, index) => (
                            <Card item={project} />
                        ))}
                </div>
            </Container>

            <div className="w-full sm:h-[400px] h-fit mt-16 dark:bg-gradient-to-tr dark:from-gray-800 dark:to-slate-800 bg-gradient-to-t from-gray-50 to-gray-300 ">
                <Container className="h-full !justify-center">
                    <div className="flex flex-col gap-8 text-center items-center justify-center">
                        <h1 className="sm:text-[2rem] text-[28px]  font-extralight dark:text-white text-black">
                            Ready to start your {service.title} project?
                        </h1>
                        <p className="sm:text-2xl text-lg font-extralight dark:text-white text-gray-500">
                            We can help you with:
                        </p>

                        <div
                            className={`text-xs sm:text-sm flex flex-row text-gray-700 text-center items-center justify-center sm:w-[800px] flex-wrap font-poppins antialiased gap-3`}>
                            {service.techstacks &&
                                service.techstacks.map(techstack => (
                                    <div
                                        className={`bg-black/30 text-white px-4 py-2`}>
                                        {techstack}
                                    </div>
                                ))}
                        </div>
                        <a href="/hire-dev">
                        <Button title="Hire Us" className='my-10 sm:my-0'  />
                            </a>        
                    </div>
                </Container>
            </div>

            <Footer container='!mt-0' />
        </AppLayout>
    )
}

export default ServicesPage
