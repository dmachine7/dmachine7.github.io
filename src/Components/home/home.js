import React from 'react'
import About from '../about/about'
import GetInTouch from '../contact/contact'
import Footer from '../footer/footer'
import HeroComponent from '../heroComponent/heroComponent'
import Project from '../project/projectHome'

const Home = () => {
  return (
    <>
      <HeroComponent />
      <About />
      <Project />
      <GetInTouch />
      <Footer />
    </>
  )
}

export default Home