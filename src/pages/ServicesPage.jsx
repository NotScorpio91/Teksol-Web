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

const services = [
    {
        title: 'Web Development',
        slug: 'web-development',
        tagline: 'We are Web Development Experts.',
        projects: [
            {
                textColor: 'text-white',
                class: 'sm:col-span-2 flex flex-col   !bg-[#242532]',
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
                textColor: '!text-black',
                class: '!bg-blue-100',
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
                textColor: 'text-white',
                class: '',
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
                textColor: 'text-white',
                class: 'sm:col-span-2 flex flex-col h-[601px] !bg-gray-800',
                imageClass: 'sm:absolute sm:w-[230px] h-fit sm:right-16 sm:-bottom-36 relative sm:px-0 px-8   -bottom-12',
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
                class: 'sm:col-span-3 flex flex-col bg-gradient-to-r from-[#302b63] to-[#24243e]',
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
                            <div className={`bg-black/30 text-white px-4 py-2`}>
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

    return (
        <AppLayout>
            <NavBar />
            <MobileNavBar />
            <div className="w-full h-fit sm:h-72 mt-16 bg-gray-800  ">
                <Container className=" h-fit sm:h-full !justify-center sm:!justify-start">
                    <h1 className=" text-[28px] text-center sm:text-start sm:text-[3.5rem] text-white">
                        {service.tagline}
                    </h1>
                </Container>
            </div>

            <Container className="h-full !justify-start !items-center sm:!items-start mt-10 !flex-col gap-4">
                <h2 className="text-xl text-white text-center sm:text-left ">Our Projects</h2>
                <div className="flex flex-col gap-y sm:grid sm:grid-cols-3 gap-8 justify-center items-center container cursor-pointer pb-10">
                    {service &&
                        service.projects &&
                        service.projects.map((project, index) => (
                            <Card item={project} />
                        ))}
                </div>
            </Container>

            <div className="w-full sm:h-[400px] h-fit mt-16 bg-gradient-to-tr from-gray-800 to-slate-800 ">
                <Container className="h-full !justify-center">
                    <div className="flex flex-col gap-8 text-center items-center justify-center">
                        <h1 className="sm:text-[2rem] text-[28px]  font-extralight text-white">
                            Ready to start your {service.title} project?
                        </h1>
                        <p className="sm:text-2xl text-lg font-extralight text-white">
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

                        <Button title="Hire Us" className='my-10 sm:my-0' />
                    </div>
                </Container>
            </div>

            <Footer container='!mt-0' />
        </AppLayout>
    )
}

export default ServicesPage
