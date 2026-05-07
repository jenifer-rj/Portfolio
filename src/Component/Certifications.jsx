import React from 'react'
import "./Certifications.css"

const Certifications = () => {
  return (
     <section id="certifications" className="certifications">

      <h4>ACHIEVEMENTS</h4>
      <h2>Certifications & Training</h2>

      <div className="cert-container">

        <div className="cert-card">
          <h3>Java Full Stack Development</h3>

          <p>
            Completed training in Java, SQL, HTML, CSS,
            JavaScript and React.js at QSpiders.
          </p>
        </div>

        <div className="cert-card">
          <h3>Typewriting Lower Level</h3>

          <p>
            Certified in lower-level typewriting with good typing speed and accuracy.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Certifications
