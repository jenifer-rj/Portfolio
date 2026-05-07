import React from 'react'
import "./About.css"
const About = () => {
  return (
    <section className='about' id='about'>
      
      <div className='about-left'>
        <img src="src/assets/profile.png" alt="profile" />
       </div>
       <div className='about-right'>
        <h4>ABOUT ME</h4>
        <p>
            I'm a Computer Science Graduate with a strong foundation in programming, data structures, and
            web development. I enjoy building responsive and user-friendly application using modern
            technologies like React.
        </p>
        <p>
            I'm passionate about learning, improving my skills, and contributing to real-world projects as a developer.
        </p>

        <div className='about-cards'>
            <div className='card'>
                <h5>🎓 Education</h5> 
                <p>Bsc. Computer Science</p>
            </div>
            <div className='card'>
                <h5>📧 Email</h5> 
                <p>jeniferchristie27@gmail.com</p>
            </div>
            <div className='card'>
                <h5>📍 location</h5> 
                <p>Chennai, Tamil Nadu </p>
            </div>
        </div>

       </div>
    </section>
  )
}

export default About
