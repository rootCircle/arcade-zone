 import ContactUs from './pages/ContactUs/ContactUs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login/Login'
import Error404 from './pages/Error404/Error404'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import GamingPage from './pages/GamingPage/GamingPage'
import GamingReview from './pages/GamingPage/GamingReview'

function App() {
  return (
    <>
      <Navbar/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/team" element={<ContactUs/>}/>
          <Route path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter> */}
      <GamingPage link="https://paper-io.com/?mode=paper2" name="HOT Game"/> 
      {/* <GamingReview/>
      <GamingReview/> */}
      <Footer/>
    </>
  )
}

export default App
