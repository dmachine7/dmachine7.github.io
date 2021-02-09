import React from 'react'
import projectData from './projectData'
import { CgMathPlus } from 'react-icons/cg'
import './project.css'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <div id='projects' className='projects'>
      <div className='section-head'>
        <h1>Projects</h1>
        <span>things I've worked on</span>
      </div>
      {
        projectData.map((item, index) => {
          return (
            <section key={index} className='project-div'>
              <div className='project-div-title'>
                {/* <h3> {`0${index+1}.`} </h3> */}
                <h2> {item.name} </h2>
                <div className='hero-underline'>
                  <span></span>
                  <span id='second-underline'></span>
                </div>
                <div className='show-more-div'><CgMathPlus /> &nbsp; <Link to={`/project/${index}`}>show more</Link></div>
                </div>
              <div
                className='project-image'
                style={{ background: 'url(' + item.imgArr[0] + ') orange no-repeat center' }}
              >
                <div> <span>{item.category}</span> </div>
                <div> <span>{item.organisation}</span> </div>
                <div> <span>{item.techstack.toString()}</span> </div>
              </div>
            </section>
          )
        })
      }
    </div>
  )
}

export default Project