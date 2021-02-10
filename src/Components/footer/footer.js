import React from 'react'
import { BiCopyright } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './footer.css'
 
const Footer = () => {
  return (
    <div className='footer'>
      <div><BiCopyright /> &nbsp; designed and developed by &nbsp; <Link to='/'>D E V A N G</Link></div>
    </div>
  )
}

export default Footer