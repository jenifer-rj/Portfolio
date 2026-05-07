import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <section id="contact" className="contact">

      <h4>CONTACT</h4>
      <h2>Let's Connect</h2>

      <p>
        I'm open to internship and full time developer opportunities.
        Feel free to reach out.
      </p>

      <div className="contact-info">
        <p>📧 jeniferchristie27@gmail.com</p>
        <p>📍 Chennai, Tamil Nadu</p>
      </div>

      <div className="social-links">
        <a
          href="https://github.com/jenifer-rj"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a href="www.linkedin.com/in/jenifer-r27">LinkedIn</a>
      </div>

    </section>
  )
}

export default Contact
