import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
    Home,
    Quote,
    HireDev,
    Project,
    ServicesPage,
    AboutPage,
    Career,
    CareerForm,
    PageNotfound,
} from './pages/Index'

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="/quote" element={<Quote />} />
                    <Route path="/hire-dev" element={<HireDev />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/work/:slug" element={<ServicesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/career/:slug" element={<CareerForm/>} />
                    <Route path="*" exact element={<PageNotfound />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
