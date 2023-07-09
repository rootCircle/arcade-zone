import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing Pages
import ContactUs from './pages/ContactUs/ContactUs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login/Login'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import ResetPassword from './pages/ForgotPassword/ResetPassword'
import VerifyAccount from './pages/Register/VerifyAccount'
import Error404 from './pages/Error404/Error404'
import AboutUs from './pages/AboutUs/AboutUs'
import Cards from './pages/AboutUs/Cards'
import { createRoot } from "react-dom/client";
import React from 'react'
import Carousal from './pages/AboutUs/Carousal'
import Works from './pages/Cards/Works'
import Carousel from './components/Carousel/Carousel'
import Register from './pages/Register/Register'
import Homepage from './pages/Homepage/HomePage'


function App() {
  return (
    <>
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/team" element={<ContactUs />} />
          <Route path="/card" element={<Works />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/forgotAccount" element={<ForgotPassword />} />
          <Route path="/login/verify" element={<VerifyAccount />} />
          <Route path="/account/reset" element={<ResetPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
