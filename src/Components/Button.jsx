import React from 'react'

function Button({ title = 'Text', className }) {
    return (
        <div className="flex">
            <button
                type="button"
                className={`text-white bg-gradient-to-r from-blue-light to-blue-dark hover:opacity-100 opacity-80  font-medium rounded-md sm:text-sm text-xs px-[30px] py-3 text-center  font-poppins antialiased transition-all active:scale-95 ${className}`}>
                {title}
            </button>
        </div>
    )
}

export default Button
