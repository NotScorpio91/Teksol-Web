import { useState, useEffect } from 'react'
import Logo from '../Components/Logo'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link, useNavigate } from 'react-router-dom'
import LinkButton from './LinkButton'


import navbarWeb from '../assets/work-images/multimedia.jpg'
import navbarReactNative from '../assets/work-images/react-native.jpg'
import navbarProductDesign from '../assets/work-images/product-design.jpg'
import navbarBlockchain from '../assets/work-images/blockchain.svg'
import navbarAi from '../assets/work-images/ai.svg'
import navbarCustom from '../assets/work-images/community.jpg'
import logo1 from '../assets/png/logo.png'
import logo2 from '../assets/png/logodark.png'



export default function NavBAR() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [ocModal, setOcModal] = useState(false)
    const [featuredWork, setFeaturedWork] = useState([
        {
            title: 'Web Development',
            link: '/work/web-development',
            image: navbarWeb,
        },
        {
            title: 'Mobile Apps',
            link: '/work/app-development',
            image: navbarReactNative,
        },
        {
            title: 'Product Design',
            link: '/work/product-design',
            image: navbarProductDesign,
        },
        {
            title: 'Digital Marketing',
            link: '/work/digital-marketing',
            image: navbarBlockchain,
        },
        {
            title: 'AI/ML',
            link: '/work/ai',
            image: navbarAi,
        },
        {
            title: 'Custom Solutions',
            link: '/work/custom-solutions',
            image: navbarCustom,
        },
    ])
    const navigate = useNavigate()

    const handleOcModal = () => {
        setOcModal(!ocModal)
    }

    const handleWorkNavigation = (route) => {
        setOcModal(false)
        // window.location = route
        navigate(route)
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    return (
        <header className="sm:flex hidden justify-center items-center select-none bg-white dark:bg-primary-black bg-opacity-90 fixed top-0 z-10 w-full font-poppins ">
            <nav className="flex flex-row justify-between sm:justify-between items-center w-full sm:max-w-screen-xl h-[64px] backdrop-blur-[12px]">
                <div className="flex lg:flex-1 z-50">
                    <Link to='/'>
                        <Logo className="w-20 sm:w-[110px] hidden dark:block" logo={logo1} />
                        <Logo className="w-20 sm:w-[110px] block dark:hidden overflow-hidden" logo={logo2} />


                    </Link>
                </div>
            
                <div className="hidden sm:flex lg:gap-x-12">
                    <span
                        onClick={handleOcModal}
                        className="flex items-center gap-x-1
                            text-black dark:text-white   leading-[28px] text-sm cursor-pointer text-center hover:font-semibold antialiased outline-none ">
                        Our Work
                        <ChevronDownIcon
                            className={`h-5 w-5 flex-none text-black dark:text-white ${
                                ocModal ? 'rotate-180 transition-all' : ''
                            }`}
                            aria-hidden="true"
                        />
                    </span>
                    
                    <a href="https://theteksol.com/blog/"
                        className="text-black dark:text-white  leading-[28px] text-sm cursor-pointer text-center hover:font-semibold antialiased"
                       >
                        Blog
                    </a>
                    <Link
                        className="text-black dark:text-white  leading-[28px] text-sm cursor-pointer text-center hover:font-semibold antialiased"
                        to="/hire-dev" >
                        Hire developers
                    </Link>
                    <Link
                        className="text-black dark:text-white  leading-[28px] text-sm cursor-pointer text-center hover:font-semibold antialiased"
                        to="/career">
                        Career
                    </Link>
                    <a className="text-black dark:text-white  leading-[28px] text-sm cursor-pointer text-center hover:font-semibold antialiased"  href="#contact">
                    Contact
                    </a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end transition-all active:scale-95">
                    <LinkButton href="https://calendly.com/darkcoderse/30min?month=2023-11">Schedule Meeting</LinkButton>
                </div>
            </nav>

            {ocModal && (
                <div className="absolute w-full mx-auto left-0 right-0 top-16 z-0 backdrop-blur">
                    <div className="relative w-full bg-gray-200 dark:bg-primary-black opacity-80 dark:text-white text-black">
                        <div className="flex flex-row gap-1 sm:max-w-screen-xl mx-auto py-6">
                            {featuredWork.map(item => (
                                <div onClick={() => handleWorkNavigation(item.link)} className="flex flex-col w-full text-center gap-3 items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 p-4">
                                    <p>{item.title}</p>
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="w-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
