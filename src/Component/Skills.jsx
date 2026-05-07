import React from 'react'
import "./Skills.css"

const Skills = () => {
    const skills = [
        "HTML5",
        "CSS3",
        "Javascript",
        "React.js",
        "Java",
        "SQL",
        "Git",
        "GitHub"
    ];
  return (
    <section id='skills' className='skills'>
        <h4>MY SKILLS</h4>
        <h2>Technologies I Work With</h2>
        <div className='skills-container'>
            {skills.map((skill,index)=>(
                <div className='skill-card' key={index}>
                    {skill}
                </div>
            ))}

        </div>
      
    </section>
  )
}

export default Skills
