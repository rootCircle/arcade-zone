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
<<<<<<< HEAD
import AboutUs from './pages/AboutUs/Carousal'
import Cards from './pages/AboutUs/Cards'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Carousal from './pages/AboutUs/Carousal'
// import Cards from './pages/AboutUs/Cards'
import Register from './pages/Register/Register'


function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/team" element={<ContactUs/>}/>
          <Route path="/forgotAccount" element={<ForgotPassword/>}/>
          <Route path="/login/verify" element={<VerifyAccount/>}/>
          <Route path="/account/reset" element={<ResetPassword/>}/>
          <Route path="/register" element={<Register/>}/>
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
