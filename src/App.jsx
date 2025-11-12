import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Properties from './pages/Properties'
import Contact from './pages/Contact'
import ScrollTop from './pages/ScrollTop'
import Footer from './components/Footer'
import Haridwar from './propertuespages/Haridwar'
import Mathura from './propertuespages/Mathura'
import MathuraMall from './propertuespages/MathuraMall'
import WhatsappIcon from './pages/WhatsappIcon'
import AeroCity from './propertuespages/AeroCity'
import Chandroday from './propertuespages/Chandroday'
import Ska from './propertuespages/Ska'
import TheVelley from './propertuespages/TheVelley'
import PrimeVista from './propertuespages/PrimeVista'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollTop/>
     <Navbar/>
     <WhatsappIcon/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/properties" element={<Properties/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/haridwar" element={<Haridwar/>}/>
      <Route path="/mathura" element={<Mathura/>}/>
      <Route path="/mathura/mall" element={<MathuraMall/>}/>
      <Route path="/aero/city" element={<AeroCity/>}/>
      <Route path="/chandroday/city" element={<Chandroday/>}/>
      <Route path="/ska" element={<Ska/>}/>
      <Route path="/the-velley" element={<TheVelley/>}/>
      <Route path="/prime-vista" element={<PrimeVista/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
   

  )
}

export default App