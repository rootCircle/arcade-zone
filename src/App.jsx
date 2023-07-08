import { useState } from 'react'
import ContactUs from './pages/ContactUs'
import HomePage from './pages/Homepage/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ContactUs/> */}
      <HomePage />
    </>
  )
}

export default App
