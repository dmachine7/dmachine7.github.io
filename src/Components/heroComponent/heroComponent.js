import React, { Component } from 'react'
import './heroComponent.css'
import sun from '../../Assets/heroComp/SVG/sun.svg'
import moon from '../../Assets/heroComp/SVG/moon.svg'
import jupiter from '../../Assets/heroComp/SVG/jupiter.svg'
import earth from '../../Assets/heroComp/SVG/earth.svg'
import saturn from '../../Assets/heroComp/SVG/saturn.svg'
import neptune from '../../Assets/heroComp/SVG/neptune.svg'
import mars from '../../Assets/heroComp/SVG/mars.svg'
import uranus from '../../Assets/heroComp/SVG/uranus.svg'
import venus from '../../Assets/heroComp/SVG/venus.svg'
import astro from '../../Assets/heroComp/SVG/astro.svg'
import Parallax from 'parallax-js'

class HeroComponent extends Component {
  componentDidMount() {
    this.parallax = new Parallax(this.scene)
  }
  
  render () {
    return (
      <section className='hero'>
        <div className='hero-text' data-aos='fade-right'>
          <h1>DEVANG</h1>
          <div className='hero-underline'>
            <span></span>
            <span id='second-underline'></span>
          </div>
          <p>
            web developer / <br />
            web designer (occasional) / <br />
            programmer
          </p>
        </div>
        <div id='hero-imagecomp' ref={el => this.scene = el} data-aos='fade-left'>
          <div data-depth='0.1' id='hero-image-1' data-scalar-y={50}><img src={sun} /></div>
          <div data-depth='0.2' id='hero-image-9'><img src={neptune} /></div>
          <div data-depth='0.3' id='hero-image-3'><img src={venus} /></div>
          <div data-depth='0.5' id='hero-image-5'><img src={mars} /></div>
          <div data-depth='0.6' id='hero-image-6'><img src={jupiter} /></div>
          <div data-depth='0.4' id='hero-image-8'><img src={uranus} /></div>
          <div data-depth='0.7' id='hero-image-7'><img src={saturn} /></div>
          <div data-depth='0.8' id='hero-image-4'><img src={earth} /></div>
          <div data-depth='0.9' id='hero-image-2'><img src={moon} /></div>
          <div data-depth='1.0' id='hero-image-10'><img src={astro} /></div> 
        </div>
      </section>
    )
  }
}

export default HeroComponent;