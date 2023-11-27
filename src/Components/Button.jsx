import React from 'react'

function Button({ title = 'Text', className, props }) {
    return (
        <div className="flex font-poppins ">
            <button
                {...props}
                type="button"
                className={`text-white bg-gradient-to-r from-blue-light to-blue-dark font-medium rounded-none sm:text-sm text-xs px-[30px] py-3 text-center   antialiased transition-all active:scale-95 ${className}`}>
                {title}
            </button>
        </div>
    )
}

export default Button
