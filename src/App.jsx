import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Info from './Info.jsx'
import Hero from './Hero.jsx'
import Footer from './Footer.jsx'
import Image from './Image.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
      <Image />
      <Info />
      <Hero />
      <Footer />
    </div>
    </>
  )
}

export default App
