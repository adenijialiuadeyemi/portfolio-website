import React from 'react'
import './Projects.css'
import portfolio from '../../assets/Images/portfolio.png'
import portfolio from '../../assets/Images/project4.png'

const data = [
  {
    id: 1,
    image: portfolio,
    title: 'Porfolio Website',
    github: '',
    demo: 'https://adeniji-aliu-porfolio.vercel.app/',
  },
  {
    id: 2,
    image: project4,
    title: 'Nursing Quiz App',
    github: '',
    demo: 'https://nursing-quiz-app.vercel.app/',
  }
];


const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container project_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project_item">
              <div className='project_item_image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project_item_cta">
                <a
                  href={github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  )
}

export default Projects