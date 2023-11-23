import React from 'react'
import NavBar from '../Components/NavBar'
import Main from './sections/Main'
import InTouch from '../Components/InTouch'
import Footer from '../Components/Footer'
import Cards from './sections/Cards'
import Faq from './sections/Faq'
import Meeting from './sections/Meeting'
import AppLayout from '../Components/AppLayout'
function Home() {


  return (
    <AppLayout>
       <NavBar />
      {/* <Main />  */}
       <Cards/>
        {/* <Meeting/>  */}
        <Faq/>
        {/* <InTouch/>  */}
      <Footer />

    </AppLayout>
  )
}

export default Home
