import React from 'react'
import { Link } from 'react-router-dom'

function LinkButton({ children, className = '', href = '' }) {
    return (
        <Link
            href={href}
            className={`text-white bg-gradient-to-r from-blue-light to-blue-dark font-medium rounded-none sm:text-sm text-xs px-[30px] py-3 text-center font-poppins  antialiased transition-all active:scale-95 ${className}`}>
            {children}
        </Link>
    )
}

export default LinkButton
