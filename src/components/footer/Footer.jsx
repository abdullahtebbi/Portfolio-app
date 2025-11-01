import React from 'react'
import './footer.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer container'>
    <div className="footer-top">
        <div className="footer-top-left">
          <h1>Abdullah</h1>
            <img src={theme_pattern} alt="" />
            <p>I am a frontend developer from, Pakistan with 2 years of esperince.</p>
        </div>
        <div className="footer-top-right">
          <din className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" name="email" placeholder='Enter your email' autoComplete='off'/>
          </din>
          <div className="footer-subscribe">Subscribe</div>
        </div>
    </div>
    <hr />
    <div className="footer-bottom">
      <div className="footer-bottom-left">
      <p >© 2024 Abdullah Tayyab. All rights reserved.</p>
      </div>
      <div className="footer-bottom-right">
        <p>Term of Services</p>
        <p>Privacy Policy</p>
        <p>Conect with me</p>
      </div>
    </div>
    </div>
  )
}

export default Footer