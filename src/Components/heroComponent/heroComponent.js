import React from 'react'
import './heroComponent.scss'

const HeroComponent = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <h1>AkashV</h1>
        <div className='hero-underline'>
          <span></span>
          <span id='second-underline'></span>
        </div>
        <p>
          web developer /<br />
          app developer (occasional) /<br />
          programmer
        </p>
      </div>
    </div>
  )
}

export default HeroComponent;