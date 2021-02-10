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
  
  return (
    <header className='header'>
      { redirect ? <Redirect to='/' /> : null }
      <div><Link to='/'>D E V A N G</Link></div>
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
        </ul>
      </div>
    </header>
  )
}

export default Navbar;