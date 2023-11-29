import React from 'react'

function AppLayout({ className, children }) {
    return (
        <div className={'flex flex-col justify-center items-center'}>
            {children}
        </div>
    )
}

export default AppLayout
