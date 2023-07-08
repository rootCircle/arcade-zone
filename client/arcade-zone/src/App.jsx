import ContactUs from './pages/ContactUs/ContactUs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login/Login'
import Error404 from './pages/Error404/Error404'
import AboutUs from './pages/AboutUs/Carousal'
import Cards from './pages/AboutUs/Cards'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Carousal from './pages/AboutUs/Carousal'
// import Cards from './pages/AboutUs/Cards'

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/team" element={<ContactUs/>}/>
          <Route path="*" element={<Error404/>} />
          <Route path="/Cards" element={<Cards/>} />
          <Route path="/Carousal" element={<Carousal/>} />
          
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
