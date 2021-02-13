import React from 'react'
import { BiCopyright } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './footer.css'
 
const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div><BiCopyright /> &nbsp; designed and developed by &nbsp; <a href='https://www.linkedin.com/in/devangagarwal7/' target='_blank'>D E V A N G</a></div>
    </div>
  )
}

export default Footer