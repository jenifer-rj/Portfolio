import React from 'react'
import Navbar from './Component/Navbar'
import Main from './Component/Main'
import About from './Component/About'
import Skills from './Component/Skills'
import Projects from './Component/Projects'
import Certifications from './Component/Certifications'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Main></Main>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Certifications></Certifications>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
