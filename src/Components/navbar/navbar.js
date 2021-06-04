import React, { useEffect, useState } from 'react'
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

  useEffect(() => {
    if (window.innerWidth <= 600) {
      document.getElementsByClassName('header-links')[0].style.marginLeft = '0vh';
      document.getElementById('link-to-home').style.marginLeft = '0vh';
    } else {
      document.getElementsByClassName('header-links')[0].style.marginTop = '0vh';
      document.getElementById('link-to-home').style.marginLeft = '0vw';
      document.getElementsByClassName('social-icons')[0].style.marginBottom = '0vh';
    }
  }, [])
  
  const locationChecker = props.history.location.pathname

  return (
    <header className='header'>
      <div id='link-to-home'><Link to='/'>D E V A N G</Link></div>
      <div className='header-links'>
        {locationChecker === '/' ? <a onClick={() => scrollToDiv('about')} rel="noreferrer" >About</a> : <Link to='/' >About</Link>}
        {locationChecker === '/' ? <a onClick={() => scrollToDiv('projects')} rel="noreferrer" >Projects</a> : <Link to='/' >Projects</Link>}
        <a onClick={() => openContactForm()} rel="noreferrer" >Contact</a>
      </div>
      <div className='social-icons'>
        <ul>
          <li><a href='https://github.com/dmachine7' aria-label="Github" rel="noreferrer" target='_blank'><FiGithub /></a></li>
          <li><a href='https://www.linkedin.com/in/devangagarwal7/' aria-label="Linkedin" rel="noreferrer" target='_blank'><FiLinkedin /></a></li>
          <li><a href='https://www.instagram.com/dmachine7_/' aria-label="Instagram" rel="noreferrer" target='_blank'><FiInstagram /></a></li>
        </ul>
      </div>
    </header>
  )
}

export default withRouter(Navbar);