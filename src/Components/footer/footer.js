import React from 'react'
import { BiCopyright } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import './footer.css'
 
const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div id='small-screen-icons'>
          <a href='https://github.com/dmachine7' aria-label="Github" rel="noreferrer" target='_blank'><FiGithub /></a>
          <a href='https://www.linkedin.com/in/devangagarwal7/' aria-label="Linkedin" rel="noreferrer" target='_blank'><FiLinkedin /></a>
          <a href='https://www.instagram.com/dmachine7_/' aria-label="Instagram" rel="noreferrer" target='_blank'><FiInstagram /></a>
        </div>
        <div><BiCopyright /> &nbsp; designed and developed by &nbsp; <a aria-label="Linkedin" rel="noreferrer" href='https://www.linkedin.com/in/devangagarwal7/' target='_blank'>D E V A N G</a></div>
    </div>
  )
}

export default Footer