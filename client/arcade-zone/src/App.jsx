import ContactUs from './pages/ContactUs/ContactUs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login/Login'
import Error404 from './pages/Error404/Error404'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Works from './pages/Cards/Works'
import Carousel from './components/Carousel/Carousel'

function App() {
  return (
    <>
      <Navbar/>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/team" element={<ContactUs/>}/>
          <Route path="/card" element={<Works/>}/>
          <Route path="/carousel" element={<Carousel/>}/>
          <Route path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
