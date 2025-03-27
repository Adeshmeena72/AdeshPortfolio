import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

import git_log from '../assets/github.svg'
import linked_log from '../assets/linkedin.svg'
import insta_logo from '../assets/instagram.svg'
const nav_bar = () => {

  const [menu,setMenu]=useState("home");


  return (
    <div className='navbar' id='nav_bar'>
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <AnchorLink className='anchor-link'  href='#home'><li onClick={()=>setMenu("home")}>Home</li></AnchorLink>
        <AnchorLink className='anchor-link' offset={50} href='#about'><li onClick={()=>setMenu("about")}>About</li></AnchorLink>
        <AnchorLink className='anchor-link' offset={50} href='#project'><li onClick={()=>setMenu("projects")}>Projects</li></AnchorLink>
        <AnchorLink className='anchor-link' offset={50} href='#home'><li onClick={()=>setMenu("home")}>Portfolio</li></AnchorLink>
        <AnchorLink className='anchor-link' offset={50} href='#contact'><li onClick={()=>setMenu("contact")}>Contact</li></AnchorLink>
      </ul>
      <div className="nav-connect">
        <a href="https://github.com/Adeshmeena72" target='_blank'>
          <img src={git_log} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/adesh-meena-39020b258/"  target='_blank'>
          <img src={linked_log} alt="" />
        </a>
        <a href=" " target='_blank'>
          <img src={insta_logo} alt="" />
        </a>
      </div>
    </div>
  )
}

export default nav_bar
