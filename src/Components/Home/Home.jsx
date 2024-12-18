import React from 'react'
import './Home.css'
import {BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import myIcon from '/Images/two.jpg'
import ReactTypingEffect from 'react-typing-effect';

const Home = () => {
  return (
    <header>
        <div className='container home_container'>
            <h5>Hello, I'm</h5>
            <h1>Aliu  Adeyemi <span style={{ color: '#fdfd96' }}>ADENIJI</span></h1>
            {/* Implementing react-typing-effect*/}
            <div style={{ color: '#fdfd96' }} className="text-light">
                <ReactTypingEffect
                    text={[
                    'Creative Problem Solver 💡',
                    'Full-Stack Software Engineer 💻',
                    'Python Developer 🐍',
                    'Frontend Expert 🌐',
                    'Backend Specialist 🔧',
                    'API Developer 🔗',
                    'Database Architect 📊',
                    'MERN Stack Pro 👨‍💻',
                    'Machine Learning Enthusiast 🤖',
                    'DevOps Engineer ⚙️',
                    'UI/UX Designer 🎨',
                    'IT Trainer 📖',
                    'Tech Enthusiast 🚀',
                    ]}
                    speed={100}
                    eraseSpeed={50}
                    eraseDelay={1000}
                    typingDelay={500}
                />
                </div>

            <div className='cta'>
                <a href='' download className='btn'>
                    Download CV
                </a>
                <a href="#contact" className='btn btn-primary'>
                    Contact Me
                </a>
            </div>
            <div className='home_socials'>
                <a href='https://www.linkedin.com/in/aliu-adeniji-927631202/'>
                    <BsLinkedin />
                </a>
                <a href='https://github.com/adenijialiuadeyemi'>
                    <BsGithub />
                </a>
                <a href='https://twitter.com/AdenijiAliuAde1'>
                    <BsTwitter />
                </a>
            </div>
            <div className='me'>
                <div className="me2">
                    <img src={myIcon} alt='not found' />
                </div>
            </div>
            <a href="#contact" className="scroll_down">
                Scroll Down
            </a>
        </div>
    </header>
  )
}

export default Home