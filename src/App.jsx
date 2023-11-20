import React from 'react'
import Footer from './Components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  Quote,
  HireDev,
  Project,
  ServicesPage,
  AboutPage,
  PageNotfound,
}
  from './pages/Index'



function App() {
  return (
    <div>
      <Footer />

      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/hire-dev" element={<HireDev/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/services" element={<ServicesPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path='*' exact element={<PageNotfound />} />
        </Routes>
      </Router> */}
    </div>
  )
}

export default App
