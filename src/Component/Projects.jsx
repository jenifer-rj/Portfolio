import React from 'react'
import "./Projects.css"

const Projects = () => {
  return (
    <section id='projects' className='projects'>
        <h4>MY WORK</h4>
        <h2>PROJECTS</h2>

        <div className='projects-container'>
            <div className='project-card'>
                <img src="src/assets/recipe.png" alt="Recipe Finder" />
                <div className='project-content'>
                  <h3>Recipe Finder Web App</h3>
                  <p>
                    A responsive React application that fetches recipe using an API, supports search, category filtering,
                     and random recipe generation.
                  </p>

                  <div className='project-tech'>
                    <span>React</span>
                    <span>Javascript</span>
                    <span>Html</span>
                    <span>Css</span>
                  </div>

                  <div className='project-links'>
                    <a href="https://github.com/jenifer-rj/Recipe-Finder-Web-App.git" target='_blank' rel='noreferrer'>GitHub</a>
                  </div>

                </div>
            </div>

        </div>
      
    </section>
  )
}

export default Projects
