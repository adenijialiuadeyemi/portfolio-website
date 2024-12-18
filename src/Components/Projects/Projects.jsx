import React from 'react'
import './Projects.css'
import portfolio from '../../assets/Images/portfolio.png'

const data = [
  {
    id: 1,
    image: portfolio,
    title: 'Porfolio Website',
    github: '',
    demo: '',
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