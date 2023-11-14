import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let [categories] = useState({
    Mobile: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
       
     
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
      
       
      },
    ],
    Frontend: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        
      
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
     
   
      },
    ],
    Backend: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
       
      
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
      
      
      },
    ],
    CMS: [
        {
          id: 1,
          title: 'Ask Me Anything: 10 answers to your questions about coffee',
         
        
        },
        {
          id: 2,
          title: "The worst advice we've ever heard about coffee",
        
        
        },
      ],
  })

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                  
                  selected
                    ? 'bg-[#0A0A0A] shadow'
                    : ' hover:bg-[#0A0A0A] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3 ',
                
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3"
                  >
                    <h3 className="text-sm font-medium leading-5">
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
