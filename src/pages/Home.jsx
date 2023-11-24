import React from 'react'
import NavBar from '../Components/NavBar'
import Main from './sections/Main'
import SliderSec from './sections/SliderSec'
import InTouch from '../Components/InTouch'
import Footer from '../Components/Footer'
import Cards from './sections/Cards'
import Testimoniails from '../Components/Testimonails'
import Meeting from './sections/Meeting'
import AppLayout from '../Components/AppLayout'
function Home() {


  return (
    <AppLayout>
       <NavBar />
      <Main /> 
      <SliderSec />
       <Cards/>
        {/* <Meeting/>  */}
        <Testimoniails/>
        <InTouch/> 
      <Footer />

    </AppLayout>
  )
}

export default Home
