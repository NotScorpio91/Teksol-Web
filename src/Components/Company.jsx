import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, } from '@heroicons/react/20/solid'
import {FaBookBookmark} from 'react-icons/fa6'
import {BiMessageDetail} from 'react-icons/bi'
import {ImOffice} from 'react-icons/im'



const solutions = [

  { name: 'About us',  href: '/', icon: FaBookBookmark },
  { name: 'Contact',  href: '/', icon: BiMessageDetail },
  { name: 'Career',  href: '/', icon: ImOffice },
]


export default function Company() {
  return (
    <Popover >
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-[#9E9E9E] hover:text-white outline-none  group  ">
        <span>Services</span>
        <ChevronDownIcon className="h-5 w-5  " aria-hidden="true" />
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
        <Popover.Panel className="absolute top-[69px]  z-10  flex -ml-[22px]  px-4 backdrop:blur-md ">
          <div className="w-fit flex-auto  overflow-hidden rounded-[5px] bg-black bg-opacity-95 backdrop:blur-md text-base leading-6 shadow-lg ring-1 ring-[#0A0A0A] ">
            <div className="p-1 grid grid-cols-2 ">
              {solutions.map((item) => (
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
  )
}
