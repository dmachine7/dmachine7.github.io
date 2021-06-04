import React, { useEffect } from 'react'
import profile from '../../Assets/profile2.png'
import './about.css'
import { CgMathPlus } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section id='about' className='about'>
      <div className='section-head' data-aos='zoom-in'>
        <h1>
          About
        </h1>
        <span>me, of course, who else</span>
      </div>
      <div className='about-content'>
        <div className='image-wrapper' data-aos='fade-right' data-aos-delay='100'>
          <img src={profile} alt="Devang Agarwal" />
        </div>
        <div className='about-content-para' data-aos='fade-left' data-aos-delay='100'>
          <p>
            Yo! I'm Devang.<br />
            I am a Full-Stack JavaScript developer.<br />
            I love web-design and development and<br />latest technology and<br />anime.<br />
          </p>
          <Link to='/about'><div className='show-more-div' data-aos='flip-down' data-aos-delay='300'><CgMathPlus /> &nbsp; know more</div></Link>
        </div>
      </div>
    </section>
  )
}

export default About