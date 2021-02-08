import React from 'react'
import profile from '../../Assets/luffy.jpg'
import './about.css'
import { CgMathPlus } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='section-head'>
        <h1>
          About
        </h1>
        <span>me, of course, who else</span>
      </div>
      <div className='about-content'>
        <div className='image-wrapper'>
          <img src={profile} width='400px' />
        </div>
        <div className='about-content-para'>
          <p>I'm Devang.<br />I love web-design and development /<br />latest technology /<br />anime</p>
          {/* <button>Download Resume</button> */}
          <span><Link to='/about'><CgMathPlus /> know more</Link></span>
        </div>
      </div>
      {/* <div className='about-skills'>
        <div><SiJavascript /> <span>Closure</span></div> 
        <div><SiReact /> <span>Is fun</span></div>
        <div><SiNodeDotJs /> <span>Logs you in</span></div>
        <div><SiMongodb /> <span>Store your data</span></div>
        <div><SiGit /> <span>Tracks your work</span></div>
        <div><SiCss3 /> <span>LOL! position: die</span></div>
      </div> */}
    </div>
  )
}

export default About