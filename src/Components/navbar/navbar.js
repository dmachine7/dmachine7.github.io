import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import './navbar.css'

const Navbar = () => {
  const [redirect, setRedirect] = useState(false)

  const scrollToDiv = (id) => {
    let comp = document.getElementById(id)
    if (comp) {
      comp.scrollIntoView(true)
    } else {
      setRedirect(true)
    }
  }

  const openContactForm = () => {
    document.getElementById('contact-form').style.marginRight = '0'
  }
  
  return (
    <header className='header'>
      { redirect ? <Redirect to='/' /> : null }
      <div><Link to='/'>D E V A N G</Link></div>
      <div className='header-links'>
        <a onClick={() => scrollToDiv('about')} >About</a>
        <a onClick={() => scrollToDiv('projects')}>Projects</a>
        <a onClick={openContactForm}>Contact</a>
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

export default Navbar;