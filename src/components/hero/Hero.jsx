import React from 'react'
import './hero.css'

import AnchorLink from 'react-anchor-link-smooth-scroll';

import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div id='home' className='container hero '>
      <div className='hero-content'>
        <div className='info'>
          <h1 className='name'>I'm Abdullah Tayyab</h1>
          <h1 className='skill'>Full Stack Web Developer</h1>
          <p>I create beautiful, responsive, and user-friendly websites with modern technologies and best practices. Passionate about bringing creative ideas to life through code.</p>
        </div>
        <div className="hero-action">
          <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
          </div>

          <div className="hero-resume"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Resume</AnchorLink>
          </div>
        </div>
      </div>
      <div className='hero-img'>
        <img src={profile_img} alt="" />
      </div>
    </div>
  )
}

export default Hero
