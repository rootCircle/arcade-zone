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
import React from 'react'
import Carousel from './components/Carousel/Carousel'
import Register from './pages/Register/Register'
import Homepage from './pages/Homepage/HomePage'
import Blog from './pages/Blog/Blog'
import Gallery from "./pages/GalleryAK/gallery";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <>
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/forgotAccount" element={<ForgotPassword />} />
          <Route path="/login/verify" element={<VerifyAccount />} />
          <Route path="/account/reset" element={<ResetPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/blog" element={<Blog />} />
          <Route path="/home" element={<Dashboard />}/>
          <Route path="*" element={<Error404 />} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
