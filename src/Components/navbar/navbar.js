import React, { useState } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import './navbar.css'

const Navbar = (props) => {
  const scrollToDiv = (id) => {
    let comp = document.getElementById(id)
    if (comp) {
      comp.scrollIntoView(true)
    }
  }

  const openContactForm = () => {
    document.getElementById('contact-form').style.marginRight = '0'
  }
  
  const locationChecker = props.history.location.pathname

  return (
    <header className='header'>
      <div><Link to='/'>D E V A N G</Link></div>
      <div className='header-links'>
        {locationChecker === '/' ? <a onClick={() => scrollToDiv('about')} >About</a> : <Link to='/' >About</Link>}
        {locationChecker === '/' ? <a onClick={() => scrollToDiv('projects')} >Projects</a> : <Link to='/' >Projects</Link>}
        {locationChecker === '/' ? <a onClick={openContactForm} >Contact</a> : <Link to='/' >Contact</Link>}
      </div>
      <div className='social-icons'>
        <ul>
          <li><a href='https://github.com/dmachine7' target='_blank'><FiGithub /></a></li>
          <li><a href='https://www.linkedin.com/in/devangagarwal7/' target='_blank'><FiLinkedin /></a></li>
          <li><a href='https://www.instagram.com/dmachine7_/' target='_blank'><FiInstagram /></a></li>
        </ul>
      </div>
    </header>
  )
}

export default withRouter(Navbar);