import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_main.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h3>Hello</h3>
      <h1> I'm<span> Adesh Meena</span></h1>
      <h3>Student at IIT (BHU) Varanasi</h3>
      <div className="hero-action">
        <AnchorLink className='anchor-link' href='#contact'><div className="hero-connect">Connect With Me</div></AnchorLink>
        <a href="">
        <div className="hero-resume">My Resume</div>
        </a>
      </div>
    </div>
  )
}
import './Hero'
export default Hero
