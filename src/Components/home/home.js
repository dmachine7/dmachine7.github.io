import React from 'react'
import About from '../about/about'
import GetInTouch from '../contact/contact'
import HeroComponent from '../heroComponent/heroComponent'
import Project from '../project/projectHome'

const Home = () => {
  return (
    <>
      <HeroComponent />
      <About />
      <Project />
      <GetInTouch />
    </>
  )
}

export default Home