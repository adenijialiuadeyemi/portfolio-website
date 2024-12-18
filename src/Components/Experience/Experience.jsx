import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import './Experience.css'
const Experience = () => {
  return (
    <section id='experience'>
        <h5>The Skills I have</h5>
        <h2>My Experience</h2>
        <div className='container experience_container'>
            <div className="experience_frontend">
                <h3>Frontend Development</h3>
                <div className="experience_content">
                    <article className="experience_detail">
                        <BsFillPatchCheckFill className='experience_icon' />
                        <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience_detail">
                        <BsFillPatchCheckFill className='experience_icon' />
                        <div>
                            <h4>CSS</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience_detail">
                        <BsFillPatchCheckFill className='experience_icon' />
                        <div>
                            <h4>JavaScript</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience_detail">
                        <BsFillPatchCheckFill className='experience_icon' />
                        <div>
                            <h4>Bootstrap</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience_detail">
                        <BsFillPatchCheckFill className='experience_icon' />
                        <div>
                            <h4>Tailwind</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience_detail">
                        <BsFillPatchCheckFill className='experience_icon' />
                        <div>
                            <h4>ReactJs</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience_detail">
                        <BsFillPatchCheckFill className='experience_icon' />
                        <div>
                            <h4>React Native</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience_detail">
                        <BsFillPatchCheckFill className='experience_icon' />
                        <div>
                            <h4>UI/UX</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                </div>
            </div>

            <div className="experience_frontend">
                <h3>Backend Development</h3>
                <div className="experience_content">
                    <article className="experience_detail">
                        <BsFillPatchCheckFill className='experience_icon' />
                        <div>
                            <h4>Node.Js</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience_detail">
                        <BsFillPatchCheckFill className='experience_icon' />
                        <div>
                            <h4>Express.JS</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience_detail">
                        <BsFillPatchCheckFill className='experience_icon' />
                        <div>
                            <h4>MongoDB</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience_detail">
                        <BsFillPatchCheckFill className='experience_icon' />
                        <div>
                            <h4>MySQL</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience_detail">
                        <BsFillPatchCheckFill className='experience_icon' />
                        <div>
                            <h4>PostgreSQL</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience_detail">
                        <BsFillPatchCheckFill className='experience_icon' />
                        <div>
                            <h4>Python</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience_detail">
                        <BsFillPatchCheckFill className='experience_icon' />
                        <div>
                            <h4>Django</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience_detail">
                        <BsFillPatchCheckFill className='experience_icon' />
                        <div>
                            <h4>PHP</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience