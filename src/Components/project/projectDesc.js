import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/fall-animation.css'
import { BiLeftArrow } from 'react-icons/bi'
import projectData from './projectData'

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
      <h1 className='projectdesc-name'> {project.name} </h1>
      <div id='go-back' onClick={goBack}>
        <BiLeftArrow />
      </div>
      <div className='projectdesc-nav'>
        <li onClick={() => scrollToDiv('prodesc')}>description</li>
        <li onClick={() => scrollToDiv('prorole')}>my role</li>
        <li onClick={() => scrollToDiv('protech')}>technologies</li>
        <li onClick={() => scrollToDiv('proimg')}>gallery</li>
        <li onClick={() => scrollToDiv('proinfo')}>other</li>
      </div>
      <div className='projectdesc-content' id='prodesc'>
        <h3> 
          <span>d</span>escription
        </h3>
        <p> {project.description} </p>
      </div>
      <div className='projectdesc-content' id='prorole'>
        <h3> <span>m</span>y <span>r</span>ole </h3>
        <p> {project.roleDesc} </p>
      </div>
      <div className='projectdesc-content' id='protech'>
        <h3> <span>t</span>echnologies <span>u</span>sed </h3>
        <p> {project.techDesc} </p>
      </div>
      <div className='projectdesc-content' id='proimg'>
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
      <div className='projectdesc-content' id='proinfo'>
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
    </div>
  )
}

export default ProjectDesc