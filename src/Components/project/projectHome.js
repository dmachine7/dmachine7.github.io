import React from 'react'
import projectData from './projectData'
import { CgMathPlus } from 'react-icons/cg'
import './project.css'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <div id='projects' className='projects'>
      <div className='section-head' data-aos='zoom-in'>
        <h1>Projects</h1>
        <span>things I've worked on</span>
      </div>
      {
        projectData.slice(0,1).map((item, index) => {

          return (
            <div key={index} className='project-div' >
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
      <Link to={`/projects`}><div className='show-more-div' style={{margin: '1em auto'}} data-aos='flip-down' data-aos-delay='200'><CgMathPlus /> &nbsp; {projectData.length-1} more projects here</div></Link>
    </div>
  )
}

export default Project