import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import Project from './Components/Projects/Project.jsx'
import Contact from './Components/Contact/Contact.jsx'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
