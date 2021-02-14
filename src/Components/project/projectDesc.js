import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/fall-animation.css'
import { BiLeftArrow, BiCopyright } from 'react-icons/bi'
import projectData from './projectData'
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'

const ProjectDesc = ({ match }) => {
  const id = parseInt(match.params.id)
  const project = projectData.find(item => item.id === id)

  const scrollToDiv = (id) => {
    let comp = document.getElementById(id)
    comp.scrollIntoView(true)
  }

  const AutoplaySlider = withAutoplay(AwesomeSlider)

  const goBack = () => {
    window.history.back();
  }

  return (
    <div>
      <div className='projectdesc-background' style={{background: 'url(' + project.imgArr[0] + ') #2b2b2b no-repeat center'}}></div>
      <h1 className='projectdesc-name' data-aos='flip-up' data-aos-delay='850'> {project.name} </h1>
      <div id='go-back' onClick={goBack} data-aos='fade-right' data-aos-mirror={false}>
        <BiLeftArrow />
      </div>
      <div className='projectdesc-nav'  data-aos='fade-right' data-aos-mirror={false} data-aos-delay='200'>
        <li onClick={() => scrollToDiv('prodesc')}>description</li>
        <li onClick={() => scrollToDiv('prorole')}>my role</li>
        <li onClick={() => scrollToDiv('protech')}>technologies</li>
        <li onClick={() => scrollToDiv('proimg')}>gallery</li>
        <li onClick={() => scrollToDiv('proinfo')}>other</li>
      </div>
      <div className='projectdesc-content' id='prodesc' data-aos='fade-left' data-aos-delay='200'>
        <h3> 
          <span>d</span>escription
        </h3>
        <p> {project.description} </p>
      </div>
      <div className='projectdesc-content' id='prorole' data-aos='fade-left' data-aos-delay='200'>
        <h3> <span>m</span>y <span>r</span>ole </h3>
        <p> {project.roleDesc} </p>
      </div>
      <div className='projectdesc-content' id='protech' data-aos='fade-left' data-aos-delay='200'>
        <h3> <span>t</span>echnologies <span>u</span>sed </h3>
        <p> {project.techDesc} </p>
      </div>
      <div className='projectdesc-content' id='proimg' data-aos='fade-left' data-aos-delay='200'>
        <h3> <span>g</span>allery </h3>
        <AutoplaySlider 
          bullets={false} 
          animation='fallAnimation'
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
        >
          {
            project.imgArr.map(image => {
              return (
                <div style={{width: '100%', height: 'max-content', textAlign: 'center'}}>
                  <img src={image} width='100%' />
                </div>
              )
            })
          }
        </AutoplaySlider>
      </div>
      <div className='projectdesc-content' id='proinfo' data-aos='fade-left' data-aos-delay='200'>
        <h3> <span>o</span>ther <span>i</span>nformation </h3>
        <p> 
          <div className='projectdesc-info-flex'>
            <div>
              <h5> category </h5>
              <p> {project.category} </p>
            </div> 
            <div>
              <h5> role </h5>
              <p> {project.role} </p>
            </div>
            <div>
              <h5> date </h5>
              <p> {project.duration} </p>
            </div>  
            <div>
              <h5> organisation </h5>
              <p> {project.organisation} </p>
            </div>  
          </div>  
        </p>
      </div>
      <div className='footer'>
        <div id='small-screen-icons'>
          <a href='https://github.com/dmachine7' target='_blank'><FiGithub /></a>
          <a href='https://www.linkedin.com/in/devangagarwal7/' target='_blank'><FiLinkedin /></a>
          <a href='https://www.instagram.com/dmachine7_/' target='_blank'><FiInstagram /></a>
        </div>
        <div><BiCopyright /> &nbsp; designed and developed by &nbsp; <a href='https://www.linkedin.com/in/devangagarwal7/' target='_blank'>D E V A N G</a></div>
      </div>
    </div>
  )
}

export default ProjectDesc