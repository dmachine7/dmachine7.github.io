import React from 'react'
import './heroComponent.css'

const HeroComponent = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
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
    </div>
  )
}

export default HeroComponent;