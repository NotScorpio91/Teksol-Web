import React from 'react'
import Main from './sections/Main'
import SecHeading from '../Components/SecHeading'
import InTouch from '../Components/InTouch'
import Footer from '../Components/Footer'
import Cards from './sections/Cards'
import AppLayout from '../Components/AppLayout'
import NavBar from '../Components/NavBar'
import MobileNavBar from '../Components/MobileNavBar'
import Testimonails from './sections/Testimonails'
import Meeting from './sections/Meeting'




function Home() {
    return (
        <AppLayout>
            <NavBar />
            <MobileNavBar />
            <Main />
           <SecHeading />
            <Cards />
            <Meeting />
            <Testimonails />
            <InTouch />
            <Footer />
        </AppLayout>
    )
}

export default Home
