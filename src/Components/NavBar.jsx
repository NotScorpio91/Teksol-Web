import { Fragment, useState } from 'react'
import Logo from '../Components/Logo'
import { IoEarth } from 'react-icons/io5'
import { CiMobile3 } from 'react-icons/ci'
import { SiSololearn } from 'react-icons/si'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { FaPenFancy } from 'react-icons/fa6'
import { PiMagicWand } from 'react-icons/pi'
import { FaBookBookmark } from 'react-icons/fa6'
import { BiMessageDetail } from 'react-icons/bi'
import { ImOffice } from 'react-icons/im'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, } from '@heroicons/react/20/solid'

const company = [

    { name: 'About us', href: '/about', icon: FaBookBookmark },
    { name: 'Contact', href: '/', icon: BiMessageDetail },
    { name: 'Career', href: '/', icon: ImOffice },
]


const services = [

    { name: 'Web Development ', href: '/services', icon: IoEarth },
    { name: 'Mobile App Development', href: '/services', icon: CiMobile3 },
    { name: 'UI/UX Consulting', href: '/services', icon: SiSololearn },
    { name: 'Digital Marketing', href: '/services', icon: BsFillJournalBookmarkFill },
    { name: 'AI/ML', href: '/service', icon: FaPenFancy },
    { name: 'Custom Solutions', href: '/service', icon: PiMagicWand },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBAR() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="flex justify-center   items-center select-none">
            <nav className="flex flex-row justify-between px-4 sm:px-10   sm:justify-around items-center w-full  sm:w-[1536px] h-[64px] bg-black bg-opacity-50 border-b border-1 border-gray-950 fixed top-0  backdrop-blur-[12px] z-10   ">
                <div className="flex lg:flex-1 z-50">
                    <a href="/"><Logo className='w-20 sm:w-[134px]' /></a>
                </div>
                <div className="flex lg:hidden ">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm 
            text-[#9E9E9E] font-poppins font-bold leading-[28px] text-[14px] cursor-pointer text-center hover:text-[#FFF] antialiased active:text-white outline-none ">
                            Company
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute top-[50px]  z-10  flex -ml-[22px] w-80  px-4 backdrop:blur-md ">
                                <div className="w-fit flex-auto  overflow-hidden rounded-[5px] bg-black bg-opacity-95 backdrop:blur-md text-base leading-6 shadow-lg ring-1 ring-[#0A0A0A] ">
                                    <div className="p-1 grid grid-cols-2 ">
                                        {company.map((item) => (
                                            <div key={item.name} className="group relative flex items-center   p-1 hover:text-white hover:bg-[#0A0A0A] rounded-md  ">
                                                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg   hover:transition-all">
                                                    <item.icon className="h-6 w-6 text-[#9E9E9E] group-hover:text-white" aria-hidden="true" />
                                                </div>
                                                <div>
                                                    <a href={item.href} className="font-semibold text-[#9E9E9E] hover:text-white">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    <Popover.Group className="hidden lg:flex lg:gap-x-12">
                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm 
            text-[#9E9E9E] font-poppins font-bold leading-[28px] text-[14px] cursor-pointer text-center hover:text-[#FFF] antialiased active:text-white outline-none">
                                Services
                                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute top-[50px]  z-10  flex -ml-[22px] w-[540px] px-4 backdrop:blur-md">
                                    <div className="w-fit flex-auto  overflow-hidden rounded-[5px] bg-black bg-opacity-95 backdrop:blur-md text-base leading-6 shadow-lg ring-1 ring-[#0A0A0A] ">
                                        <div className='p-1 grid grid-cols-2 '>
                                            {services.map((item) => (
                                                <div
                                                    key={item.name}
                                                    className="group relative flex items-center  p-1 hover:text-white hover:bg-[#0A0A0A] rounded-md "
                                                >
                                                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg   hover:transition-all">
                                                        <item.icon className="h-6 w-6 text-[#9E9E9E] group-hover:text-white" aria-hidden="true" />
                                                    </div>
                                                    <div>

                                                    </div>
                                                    <div>
                                                        <a href={item.href} className="font-semibold text-[#9E9E9E] hover:text-white">
                                                            {item.name}
                                                            <span className="absolute inset-0" />
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </Popover.Panel>
                            </Transition>
                        </Popover>
                    </Popover.Group>
                    <a className='text-[#9E9E9E] font-poppins font-bold leading-[28px] text-[14px] cursor-pointer text-center hover:text-[#FFF] antialiased' href="/hire-dev">Hire developers</a>
                    <a className='text-[#9E9E9E] font-poppins font-bold leading-[28px] text-[14px] cursor-pointer text-center hover:text-[#FFF] antialiased' href="https://theteksol.com/blog/">Blog</a>

                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end transition-all active:scale-95">
                <a className='text-black bg-gradient-to-r from-[#00c6ff] to-[#92EFFD] hover:opacity-100 opacity-80  font-medium rounded-md text-sm px-8 py-3 text-center transition-all active:scale-95 font-poppins antialiased ' href="https://calendly.com/darkcoderse/30min?month=2023-11">Schedule Meeting </a>
        </div>
                <Dialog as="div" className="lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0  right-0 z-10 w-full overflow-y-auto bg-black px-4 py-[18px] sm:max-w-sm sm:ring-1 ">
                        <div className="flex items-center justify-between">
                            <a href="/"><Logo className='w-20 ' /></a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Disclosure as="div" className="-mx-3">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7
                      text-white font-poppins hover:bg-[#0A0A0A] antialiased">
                                                    Company
                                                    <ChevronDownIcon
                                                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...company].map((item) => (
                                                        <Disclosure.Button
                                                            key={item.name}
                                                            as="a"
                                                            href={item.href}
                                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white font-poppins  antialiased"
                                                        >
                                                            {item.name}
                                                        </Disclosure.Button>
                                                    ))}
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <div className="mt-6 flow-root">
                                        <div className="-my-6 divide-y divide-gray-500/10">
                                            <div className="space-y-2 py-6">
                                                <Disclosure as="div" className="-mx-3">
                                                    {({ open }) => (
                                                        <>
                                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white font-poppins hover:bg-[#0A0A0A] antialiased">
                                                                Services
                                                                <ChevronDownIcon
                                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                                    aria-hidden="true"
                                                                />
                                                            </Disclosure.Button>
                                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                                {[...services].map((item) => (
                                                                    <Disclosure.Button
                                                                        key={item.name}
                                                                        as="a"
                                                                        href={item.href}
                                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white font-poppins  antialiased "
                                                                    >
                                                                        {item.name}
                                                                    </Disclosure.Button>
                                                                ))}
                                                            </Disclosure.Panel>
                                                        </>
                                                    )}
                                                </Disclosure>
                                            </div>

                                        </div>
                                    </div>
                                    <a
                                        href="/hire-dev"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white font-poppins hover:bg-[#0A0A0A] antialiased"
                                    >
                                        Hire developers
                                    </a>
                                    <a
                                        href="https://theteksol.com/blog/"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white font-poppins hover:bg-[#0A0A0A] antialiased"
                                    >
                                        Blog
                                    </a>
                                    <a
                                        href="https://calendly.com/darkcoderse/30min?month=2023-11"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white font-poppins hover:bg-[#0A0A0A] antialiased"
                                    >
                                        Schedule Meeting
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </nav>
        </header>
    )
}
