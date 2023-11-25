import React from 'react'

function Card({ png, title, text, items, classNameForText = '' }) {
    return (
        <div className=" bg-primary-black text-white w-full h-[350px] border border-primary-black hover:border-gray-600 rounded-none flex justify-start flex-col items-start p-10 gap-5">
            {png}
            <h1 className="text-white font-light font-poppins antialiased text-xl">
                {title}
            </h1>
			<p className="text-white font-light font-poppins antialiased text-base">
                {text}
            </p>

            <div
                className={`text-sm flex flex-row text-gray-700 text-left w-full font-poppins antialiased gap-3 ${classNameForText}`}>
                {items.map(item => (
                    <div className={`${item?.iconClass}`}>{item.icon}</div>
                ))}
            </div>
        </div>
    )
}

export default Card
