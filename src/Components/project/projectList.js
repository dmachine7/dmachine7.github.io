import React from 'react'
import projectData from './projectData'
import { CgMathPlus } from 'react-icons/cg'
import './project.css'
import { BiLeftArrow, BiCopyright } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import proImg from '../../Assets/project.svg'
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'

const ProjectList = () => {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div>
      <div className='hero'>
        <div id='go-back' onClick={goBack} data-aos='fade-right' data-aos-mirror={false}>
          <BiLeftArrow />
        </div>
        <div className='hero-text' data-aos='fade-left' data-aos-delay='800'>
          <h1>WORKS</h1>
          <div className='hero-underline'>
            <span></span>
            <span id='second-underline'></span>
          </div>
          <p>
            all kinds of websites / <br />
            designing / <br />
            projects
          </p>
        </div>
        <div className='hero-image' data-aos='fade-left' data-aos-delay='800'>
          <div className='image-wrapper'>
            <img src={proImg} width='400px' />
          </div>
        </div>
      </div>
      <div id='projects' className='projects'>
        {
          projectData.map((item, index) => {
            return (
              <div key={index} className='project-div'>
                <div className='project-div-title' data-aos='fade-right'>
                  {/* <h3> {`0${index+1}.`} </h3> */}
                  <h2> {item.name} </h2>
                  <div className='hero-underline'>
                    <span></span>
                    <span id='second-underline'></span>
                  </div>
                  <Link to={`/projects/${index}`}><div className='show-more-div' data-aos='flip-down' data-aos-delay='200'><CgMathPlus /> &nbsp; show more</div></Link>
                  </div>
                <div
                  className='project-image'
                  style={{ background: 'url(' + item.imgArr[0] + ') #ff9e00 no-repeat center' }}
                  data-aos='fade-left'
                >
                  <div> <span>{item.category}</span> </div>
                  <div> <span>{item.organisation}</span> </div>
                  <div> <span>{item.techstack.toString()}</span> </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='footer'>
      <div id='small-screen-icons'>
          <a href='https://github.com/dmachine7' aria-label="Github" rel="noreferrer" target='_blank'><FiGithub /></a>
          <a href='https://www.linkedin.com/in/devangagarwal7/' aria-label="Linkedin" rel="noreferrer" target='_blank'><FiLinkedin /></a>
          <a href='https://www.instagram.com/dmachine7_/' aria-label="Instagram" rel="noreferrer" target='_blank'><FiInstagram /></a>
        </div>
        <div><BiCopyright /> &nbsp; designed and developed by &nbsp; <a aria-label="Linkedin" rel="noreferrer" href='https://www.linkedin.com/in/devangagarwal7/' target='_blank'>D E V A N G</a></div>
      </div>
    </div>
    
  )
}

export default ProjectList