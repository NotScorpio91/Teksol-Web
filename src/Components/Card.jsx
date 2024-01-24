import React from 'react'
import { MdArrowForward } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'


function Card({ png, title, text, items, classNameForText = '', slug = '' }) {
    const navigate = useNavigate()

    const handleOcModal = () => {
        setOcModal(!ocModal)
    }

    const handleWorkNavigation = (route) => {
        // setOcModal(false)
        document.body.scrollTo(0, 0)
        // window.location = route
        navigate(route)
    }
    return (
        <div className="dark:bg-gradient-to-r dark:from-primary-black dark:to-black dark:text-white w-full h-[350px] border dark:border-primary-black dark:hover:border-gray-600 rounded-none flex justify-start flex-col items-start p-10 gap-5 font-poppins text-gray-500 bg-gray-50 border-gray-300 hover:border-gray-400 shadow-xl dark:shadow-none ">
            {png}
            <h1 className="dark:text-white text-black font-light  antialiased text-xl">
                {title}
            </h1>
            <p className="dark:text-white text-gray-500 font-light  antialiased text-base">
                {text}
            </p>

            <div 
                className={`text-sm flex flex-row text-gray-700 text-left w-full  antialiased gap-3 ${classNameForText}`}>
                {items &&
                    items.map((item,index) => (
                        <div key={index} className={`${item?.iconClass}`}>{item.icon}</div>
                    ))}
            </div>

            <div
                onClick={() => handleWorkNavigation(slug)}
                className={`underline text-black dark:text-white underline-offset-[5px] flex flex-row gap-2 items-center`}
                rel="noreferrer">
                More <MdArrowForward />
            </div>
        </div>
    )
}

export default Card
