import ContactUs from './pages/ContactUs/ContactUs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login/Login'
// import LoginTest from './pages/Login/LoginTest'
// import AuthLayout from './layouts/Auth'
// import Navbar2 from './components/Navbars/AuthNavbar'
import React from 'react'
function App() {
  return (
    <>
      <Navbar/>
      {/* <ContactUs/> */}
      <Login/>
      {/* <AuthLayout /> */}
      {/* <Navbar2/> */}
      {/* <LoginTest/> */}
      <Footer/>
    </>
  )
}

export default App
