import React from 'react'
import profile from '../../Assets/luffy.jpg'
import './about.css'
import { SiReact, SiNodeDotJs, SiGit, SiMongodb, SiJavascript, SiCss3, SiFigma, SiCplusplus, SiVisualstudiocode, SiGithub } from 'react-icons/si'
import { DiPhotoshop, DiIllustrator } from 'react-icons/di'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiLeftArrow } from 'react-icons/bi'

const AboutDesc = () => {
  const scrollToDiv = (id) => {
    let comp = document.getElementById(id)
    comp.scrollIntoView(true)
  }

  const goBack = () => {
    window.history.back();
  }

  return (
    <div id='about'>
      <div className='hero'>
        <div id='go-back' onClick={goBack}>
          <BiLeftArrow />
        </div>
        <div className='hero-text'>
          <h1>ABOUT</h1>
          <div className='hero-underline'>
            <span></span>
            <span id='second-underline'></span>
          </div>
          <p>
            <span onClick={() => scrollToDiv('me')}>me</span> / <br />
            <span onClick={() => scrollToDiv('passion')}>my interests</span> / <br />
            <span onClick={() => scrollToDiv('skills')}>my skills</span>
          </p>
        </div>
        <div className='hero-image'>
          <div className='image-wrapper'>
            <img src={profile} width='100%' />
          </div>
        </div>
      </div>
      <section className='aboutdesc-div' id='me'>
        <div className='aboutdesc-div-title'>
          <h3> 01. </h3>
          <h2> who i am </h2>
          <div className='hero-underline'>
            <span></span>
            <span id='second-underline'></span>
          </div>
        </div>
        <div className='aboutdesc-div-content'>
          <p>Yo ! I'm <span>Devang Agarwal</span>. I am currently pursuing Bachelor of Technology IT from <span>NIT Kurukshetra</span>. I enjoy creating websites and the content that lives on the web. I am always up for learning new technologies in order to build better and lively sites.</p>
        </div>
      </section>
      <section className='aboutdesc-div' id='passion'>
        <div className='aboutdesc-div-title'>
          <h3> 02. </h3>
          <h2> interests </h2>
          <div className='hero-underline'>
            <span></span>
            <span id='second-underline'></span>
          </div>
        </div>
        <div className='aboutdesc-div-content'>
          <ul>
            <li><AiOutlinePlus /> creating websites</li>
            <li><AiOutlinePlus /> designing websites/posters</li>
            <li><AiOutlinePlus /> passionate about new technologies</li>
            <li><AiOutlinePlus /> learning something new everyday</li>
            <li><AiOutlinePlus /> suspense/mystery/sci-fi movies/series</li>
          </ul>
        </div>
      </section>
      <section className='aboutdesc-div' id='skills'>
        <div className='aboutdesc-div-title'>
          <h3> 03. </h3>
          <h2> stuff i know </h2>
          <div className='hero-underline'>
            <span></span>
            <span id='second-underline'></span>
          </div>
        </div>
        <div className='aboutdesc-div-content'>
          <div className='about-skills'>
            <div><SiJavascript /> <span>closures</span></div> 
            <div><SiReact /> <span>front-end</span></div>
            <div><SiNodeDotJs /> <span>back-end</span></div>
            <div><SiMongodb /> <span>data storage</span></div>
            <div><SiGit /> <span>versioning</span></div>
            <div><SiCss3 /> <span>position: fixed</span></div>
            <div><SiFigma /> <span>web designing</span></div>
            <div><DiIllustrator /> <span>illustrations</span></div>
            <div><DiPhotoshop /> <span>art/design</span></div>
            <div><SiVisualstudiocode /> <span>development</span></div>
            <div><SiGithub /> <span>repositories</span></div>
            <div><SiCplusplus /> <span>programming</span></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutDesc