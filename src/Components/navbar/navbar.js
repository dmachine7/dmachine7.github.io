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

  const lmao = props.history.location.pathname

  return (
    <header className='header'>
      <div><Link to='/'>D E V A N G</Link></div>
      <div className='header-links'>
        {lmao === '/' ? <a onClick={() => scrollToDiv('about')} >About</a> : <Link to='/' >About</Link>}
        {lmao === '/' ? <a onClick={() => scrollToDiv('projects')} >Projects</a> : <Link to='/' >Projects</Link>}
        {lmao === '/' ? <a onClick={() => scrollToDiv('contact')} >Contact</a> : <Link to='/' >Contact</Link>}
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

export default withRouter(Navbar);