import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Mobile from './Mobile'
import Frontend from './Frontend'
import Backend from './Backend'
import Cms from './Cms'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let [categories] = useState({
    Mobile: [
      {
        id: 1,
        title: <Mobile />,
       
     
      },
    ],
    Frontend: [
      {
        id: 1,
        title: <Frontend />,
        
      
      },
    ],
    Backend: [
      {
        id: 1,
        title: <Backend />,
       
      
      },
    ],
    CMS: [
        {
          id: 1,
          title: <Cms/>,
         
        
        },
      ],
  })

  return (
    <div className="  flex justify-center items-center flex-col px-2 py-16 sm:px-0 font-inter ">
      <Tab.Group>
        <Tab.List className="flex justify-center items-center space-x-1 rounded-xl bg-[#0A0A0A] p-1 w-[600px]">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-3 text-sm font-medium leading-5 text-white flex justify-center items-center',
                  
                  selected
                    ? 'bg-[#131415] shadow  outline-none'
                    : ' hover:bg-[#131415] hover:text-white '
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="pt-2  flex justify-center items-center ">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-[#0A0A0A] text-white p-3 w-[1200px] ',
                
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 "
                  >
                    <h3 className="text-sm font-medium leading-5 ">
                      {post.title}
                    </h3>
              
                 
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
