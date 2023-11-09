import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, } from '@heroicons/react/20/solid'
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
} from '@heroicons/react/24/outline'



const solutions = [

  { name: 'About us',  href: '/', icon: ChartPieIcon },
  { name: 'Contact',  href: '/', icon: CursorArrowRaysIcon },
  { name: 'Career',  href: '/', icon: FingerPrintIcon },
]


export default function Company() {
  return (
    <Popover >
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-[#9E9E9E] hover:text-white outline-none ">
        <span>Company</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
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
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-60 flex-auto  overflow-hidden rounded-[5px] bg-black backdrop-blur-sm text-base leading-6 shadow-lg ring-1 ring-gray-500">
            <div className="p-4">
              {solutions.map((item) => (
                <div key={item.name} className="group relative flex items-center gap-x-6 rounded-[5px] p-4 hover:text-white ">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg  group-hover:bg-gradient-to-r from-[#00c6ff] to-[#92EFFD] hover:transition-all">
                    <item.icon className="h-6 w-6 text-[#9E9E9E] group-hover:text-black" aria-hidden="true" />
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
  )
}
