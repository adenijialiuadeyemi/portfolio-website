import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'
import Testimonials from './Components/Testimonials/Testimonials'
import { Contact } from './Components/Contact/Contact'
const App = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  )
}

export default App