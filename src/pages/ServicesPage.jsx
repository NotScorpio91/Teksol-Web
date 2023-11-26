import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import AppLayout from '../Components/AppLayout'
import Container from '../Components/Container'
import { useParams } from 'react-router-dom'

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
                class: 'col-span-2 !bg-[#242532]',
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
                class: '',
                title: 'Kikboss',
                slug: 'kikboss',
                image: '',
                logo: pI_kb_logo,
                description:
                    'KiKBoss is a platform that is bridging the gaps, connecting sellers to potential buyers, and making it easy to buy and sell from anywhere, anytime online.',
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
                        name: 'Demo',
                        href: 'https://kikboss.com/',
                    },
                ],
            },
            {
                class: '',
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
                        name: 'Demo',
                        href: 'https://dentinect.co/',
                    },
                ],
            },
            {
                class: 'col-span-2',
                title: 'Earnfluencers',
                slug: 'earnfluencers',
                image: pI_ef_image,
                logo: '',
                description:
                    'Connect with brands, showcase your talent, and monetize your content. Join our community of successful TikTokers and turn your passion into profit. Sign up today and unlock your earning potential!',
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
                        name: 'Demo',
                        href: 'https://earnfluencers.com/',
                    },
                ],
            },
            {
                class: 'col-span-3',
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
                        name: 'Demo',
                        href: 'https://thingtrax.com/',
                    },
                ],
            },
        ],
    },
]

function Card({ item }) {
    return (
        <div
            className={`bg-primary-black text-white w-full h-[350px] border border-primary-black hover:border-gray-600 rounded-none flex justify-start flex-col items-start p-10 gap-5 ${item.class}`}>
            {item.logo && (
                <img src={item.logo} alt={`Project Logo: ${item.title}`} />
            )}
            <h1 className="text-white font-light font-poppins antialiased text-xl">
                {item.title}
            </h1>
            <p className="text-white font-light font-poppins antialiased text-base">
                {item.description}
            </p>

            <div
                className={`text-sm flex flex-row text-gray-700 text-left w-full font-poppins antialiased gap-3`}>
                {item.tech &&
                    item.tech.map(tech => (
                        <div className={` `}>{tech.title}</div>
                    ))}
            </div>
            <div className="flex flex-row gap-4">
                {item.links &&
                    item.links.map(link => (
                        <a
                            href={link.href}
                            target="_blank"
                            className="underline text-white underline-offset-[5px] flex flex-row gap-2 items-center"
                            rel="noreferrer">
                            {link.name}{' '}
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.25 12H19"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"></path>
                                <path
                                    d="M15 7.25L19.75 12L15 16.75"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"></path>
                            </svg>
                        </a>
                    ))}
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
            <div className="w-full h-72 mt-16 bg-gray-800">
                <Container className="h-full !justify-start">
                    <h1 className="text-[3.5rem] text-white">
                        {service.tagline}
                    </h1>
                </Container>
            </div>

            <Container className="h-full !justify-start !items-start mt-20 !flex-col gap-16">
                <h2 className="text-3xl text-white text-left">Our Projects</h2>
                <div className="flex flex-col sm:grid sm:grid-cols-3 gap-8 justify-center items-center container cursor-pointer pb-10">
                    {service &&
                        service.projects &&
                        service.projects.map((project, index) => (
                            <Card item={project} />
                        ))}
                </div>
            </Container>
            <Footer />
        </AppLayout>
    )
}

export default ServicesPage
