import React from 'react'
import { Link } from 'react-router-dom'
import { FiGithub, FiInstagram, FiLinkedin, FiFacebook } from 'react-icons/fi'
import './navbar.scss'

const Navbar = () => {

  const scrollToDiv = (id) => {
    let comp = document.getElementById(id)
    if (comp) {
      comp.scrollIntoView(true)
    }
  }

  return (
    <header className='header'>
      <div><Link to='/'>A K A S H  V E R M A</Link></div>
      <div className='header-links'>
        <a onClick={() => scrollToDiv('about')} >About</a>
        <a onClick={() => scrollToDiv('projects')}>Projects</a>
        <a >Contact</a>
      </div>
      <div className='social-icons'>
        <ul>
          <li><FiGithub /></li>
          <li><FiInstagram /></li>
          <li><FiLinkedin /></li>
          <li><FiFacebook /></li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar;