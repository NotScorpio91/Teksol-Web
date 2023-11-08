import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  Quote,
  HireDev,
  PageNotfound,
}
  from './pages/Index'


function App() {
  return (
    <div>

     
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Quote" element={<Quote />} />
          <Route path="/HireDev" element={<HireDev/>}/>
          <Route path='*' exact element={<PageNotfound />} />

        </Routes>
      </Router>
      

    </div>
  )
}

export default App
