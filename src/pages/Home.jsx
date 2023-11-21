import React from 'react'
import NavBar from '../Components/NavBar'
import Main from './sections/Main'
import InTouch from '../Components/InTouch'
import Footer from '../Components/Footer'
import Cards from './sections/Cards'
import Faq from './sections/Faq'
import Meeting  from './sections/Meeting'
function Home() {

 
  return (
    <div className='flex flex-col justify-center items-center '>
      <NavBar />
      <Main/>
      {/* <Cards/>
      <Meeting/>
      <Faq/>
      <InTouch/> */}
      <Footer/>
    
    </div>
  )
}

export default Home
