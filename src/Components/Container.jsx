function Container({ children, className = '' }) {
    return (
        <div className="w-full h-full">
            <div className={`flex flex-row items-center justify-around gap-5 max-w-screen-xl mx-auto ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default Container
