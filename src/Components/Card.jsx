import React from 'react'
import { MdArrowForward } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Card({ png, title, text, items, classNameForText = '', slug = '' }) {
    return (
        <div className="bg-gradient-to-r from-primary-black to-black text-white w-full h-[350px] border border-primary-black hover:border-gray-600 rounded-none flex justify-start flex-col items-start p-10 gap-5 font-poppins ">
            {png}
            <h1 className="text-white font-light  antialiased text-xl">
                {title}
            </h1>
            <p className="text-white font-light  antialiased text-base">
                {text}
            </p>

            <div
                className={`text-sm flex flex-row text-gray-700 text-left w-full  antialiased gap-3 ${classNameForText}`}>
                {items &&
                    items.map(item => (
                        <div className={`${item?.iconClass}`}>{item.icon}</div>
                    ))}
            </div>

            <Link
                to={slug}
                target="_blank"
                className={`underline text-white underline-offset-[5px] flex flex-row gap-2 items-center`}
                rel="noreferrer">
                More <MdArrowForward />
            </Link>
        </div>
    )
}

export default Card
