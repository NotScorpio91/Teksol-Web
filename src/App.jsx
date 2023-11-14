import React from 'react'

import Pc from './pages/sections/Pc'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {
//   Home,
//   Quote,
//   HireDev,
//   PageNotfound,
// }
//   from './pages/Index'



function App() {
  return (
    <div>

     <Pc />
    
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/hire-dev" element={<HireDev/>}/>
          <Route path='*' exact element={<PageNotfound />} />
        </Routes>
      </Router> */}
    </div>
  )
}

export default App
