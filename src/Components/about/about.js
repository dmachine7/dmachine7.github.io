import React from 'react'
import profile from '../../Assets/profile2.png'
import './about.css'
import { CgMathPlus } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section id='about' className='about'>
      <div className='section-head'>
        <h1>
          About
        </h1>
        <span>me, of course, who else</span>
      </div>
      <div className='about-content'>
        <div className='image-wrapper'>
          <img src={profile} />
        </div>
        <div className='about-content-para'>
          <p>
            Yo! I'm Devang.<br />
            I am a Full-Stack JavaScript developer.<br />
            I love web-design and development and<br />latest technology and<br />anime.<br />
          </p>
          <Link to='/about'><div className='show-more-div'><CgMathPlus /> &nbsp; know more</div></Link>
        </div>
      </div>
    </section>
  )
}

export default About