import { useState } from 'react'
import Logo from './Logo'


import { Dialog, Disclosure,   } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, } from '@heroicons/react/20/solid'

const company = [

    { name: 'About us', href: '/about'},
    { name: 'Contact', href: '/'  },
    { name: 'Career', href: '/' },
]


const services = [

    { name: 'Web Development ', href: '/services' },
    { name: 'Mobile App Development', href: '/services'},
    { name: 'UI/UX Consulting', href: '/services'},
    { name: 'Digital Marketing', href: '/services'},
    { name: 'AI/ML', href: '/service'},
    { name: 'Custom Solutions', href: '/service'},
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function MobileNavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="flex justify-center   items-center select-none sm:hidden">
            <nav className="flex flex-row justify-between px-4 sm:px-10   sm:justify-around items-center w-full  sm:w-[1536px] h-[64px] bg-black bg-opacity-50 fixed top-0  backdrop-blur-[12px] z-10   ">
                <div className="flex lg:flex-1 z-50">
                    <a href="/"><Logo className='w-[80px]' /></a>
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
          
                <Dialog as="div" className="lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0  right-0 z-10 w-full overflow-y-auto bg-black px-4 py-[18px] sm:max-w-sm sm:ring-1 ">
                        <div className="flex items-center justify-between">
                            <a href="/"><Logo className='w-[80px] ' /></a>
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
                      text-white font-poppins focus:bg-[#0A0A0A] antialiased">
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
                                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white font-poppins focus:bg-[#0A0A0A] antialiased">
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
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white font-poppins focus:bg-[#0A0A0A] antialiased"
                                    >
                                        Hire developers
                                    </a>
                                    <a
                                        href="https://theteksol.com/blog/"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white font-poppins focus:bg-[#0A0A0A] antialiased"
                                    >
                                        Blog
                                    </a>
                                    <a
                                        href="https://calendly.com/darkcoderse/30min?month=2023-11"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white font-poppins focus:bg-[#0A0A0A] antialiased"
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
