import React from 'react'
import { Link } from 'react-router-dom'

function LinkButton({ children, className = '', href = '' }) {
    return (
        <Link
            to={href}
            className={`text-white bg-black hover:bg-gray-800 font-medium rounded-none sm:text-sm text-xs px-[30px] py-3 text-center font-poppins  antialiased transition-all active:scale-95 dark:text-white dark:bg-gradient-to-r from-blue-light to-blue-dark  ${className}`}>
            {children}
        </Link>
    ) 
}

export default LinkButton
