import { useState } from 'react'
import ContactUs from './pages/ContactUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContactUs/>
    </>
  )
}

export default App
