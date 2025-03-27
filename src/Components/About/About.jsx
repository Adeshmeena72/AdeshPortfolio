import React from 'react'
import './About.css'
import abt_img from '../../assets/about.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={abt_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>
                I'm Adesh Meena, a third-year student at IIT BHU with a passion for coding and problem-solving. I enjoy exploring data structures and algorithms, finding creative solutions to complex challenges. My interests also extend to web development, where I love building intuitive and engaging user interfaces. I'm always eager to learn, take on new challenges, and contribute my technical expertise to innovative projects.
                </p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>C++</p><hr style={{width:"70%"}} />
                </div>
                <div className="about-skill">
                    <p>C Language</p><hr style={{width:"70%"}} />
                </div>
                <div className="about-skill">
                    <p>HTML & CSS </p><hr style={{width:"60%"}} />
                </div>
                <div className="about-skill">
                    <p>Python</p><hr style={{width:"50%"}} />
                </div>
                <div className="about-skill">
                    <p>Kotlin</p><hr style={{width:"20%"}} />
                </div>
                <div className="about-skill">
                    <p>Jetpack Compose</p><hr style={{width:"20%"}} />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
