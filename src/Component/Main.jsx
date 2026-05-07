import React from 'react'
import "./Main.css"
const Main = () => {
  return (
    <section id='home' className='main'>
      <div className='center'>
        <h4>Hello, I'm</h4>
        <h1>JENIFER <span>R</span></h1>
        <h3>Aspiring Software Developer</h3>

        <p> My Journey into web development started with curiosity and grew into a passion for building
            real-world applications. I work with Java, SQL, and modern web technologies, learning and improving with 
            every project I create.
        </p>

        <div className='main-buttons'>
            <a href="#projects" className='btn primary'>View My Work</a>
            <a href="src\assets\Jenifer_Resume.pdf" className='btn secondary' download>Download Resume</a>
        </div>
      </div>
    </section>
  )
}

export default Main
