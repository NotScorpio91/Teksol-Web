import React from 'react'
import Main from './sections/Main'
import InTouch from '../Components/InTouch'
import Footer from '../Components/Footer'
import Cards from './sections/Cards'
import AppLayout from '../Components/AppLayout'
import NavBar from '../Components/NavBar'

function Home() {
    return (
        <AppLayout>
            <NavBar />
            <Main />
            <div className="w-full my-32">
                <div className="flex flex-row items-center justify-around gap-5 max-w-screen-xl mx-auto">
                    <div className="flex flex-row items-center justify-center gap-4">
						<span className="text-[4.5rem] text-white">6</span>
                        <div className="flex flex-col">
							<span className="text-white font-extralight text-[1.5rem]">years</span>
							<span className="text-white font-extralight text-[1.5rem]">on the market</span>
						</div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-4">
						<span className="text-[4.5rem] text-white">50</span>
                        <div className="flex flex-col">
							<span className="text-white font-extralight text-[1.5rem]">talented</span>
							<span className="text-white font-extralight text-[1.5rem]">individuals</span>
						</div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-4">
						<span className="text-[4.5rem] text-white">+100</span>
                        <div className="flex flex-col">
							<span className="text-white font-extralight text-[1.5rem]">projects</span>
							<span className="text-white font-extralight text-[1.5rem]">delivered</span>
						</div>
                    </div>
                </div>
            </div>
            {/* <SliderSec /> */}
            <Cards />
            <InTouch />
            <Footer />
        </AppLayout>
    )
}

export default Home
