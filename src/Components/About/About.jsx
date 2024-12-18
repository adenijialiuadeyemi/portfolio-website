import React from 'react';
import './About.css';
import myImage from '/Images/me.png';
import { FiAward } from 'react-icons/fi';
import { FaGlobe } from 'react-icons/fa';
import {VscProject} from 'react-icons/vsc'
import {GiGraduateCap} from 'react-icons/gi'
import { FaUsers } from 'react-icons/fa';


const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className='container about_container'>
            <div className="about_me">
                <div className="about_me_image">
                    <img src={myImage} alt='Aliu' />
                </div>
            </div>
            <div className="about_content">
                <div className="about_cards">
                    <article className="about_card">
                        <GiGraduateCap className='about-icon' />
                        <h5>Degree</h5>
                        <small>
                            Computer Science<br />
                            <i>University of Benin</i>
                        </small>
                    </article>

                    <article className="about_card">
                        <GiGraduateCap className='about-icon' />
                        <h5>Degree</h5>
                        <small>
                            Software Engineering<br />
                            <i>Holberton School</i>
                        </small>
                    </article>

                    <article className="about_card">
                        <FiAward className="about-icon" />
                        <h5>Experience</h5>
                        <small>4+ Years <br /><i>Working</i> </small>
                    </article>

                    <article className="about_card">
                        <FaUsers className="about-icon" />
                        <h5>Clients</h5>
                        <small>10+ <br /><i>Nationwide</i> </small>
                    </article>
                    
                    <article className="about_card">
                        <VscProject className="about-icon" />
                        <h5>Projects</h5>
                        <small>20+ <br /><i>completed</i> </small>
                    </article>

                    <article className="about_card">
                        <FaGlobe className="about-icon" />
                        <h5>Location</h5>
                        <small>Lagos State <br /><i>Nigeria</i> </small>
                    </article>

                </div>
                <p>
                    Hi, I'm Aliu Adeyemi Adeniji, a skilled full-stack Software Engineer with passion for building robust, scalable,
                    and efficient applications. With Expertise in MongoDB, Express, React, Node.Js, Python and DJango, I craft seamless 
                    user experiences and robust backend architectures.
                </p>
                <a href="#contact" className="btn btn-primary">
                        Hire Me!
                </a>
            </div>
            
        </div>
    </section>
  )
}

export default About