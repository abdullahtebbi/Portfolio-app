import React from 'react'
import './about.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'



const About = () => {
  return (
    <div id='about' className='about container'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-content">
          <div className='grid-two-cols'>
            <div className='about-img'>
              <img src={profile_img} alt="" />
            </div>
            <div className="about-para">
              <p>Hi, I’m Abdullah Tayyab, a passionate Full Stack Web Developer with a strong focus on building responsive, user-friendly, and high-performance web applications. I love turning ideas into reality through clean code and creative design.</p>
              <p>I work with HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB, creating modern web solutions that deliver both great user experience and robust functionality. Whether it’s front-end design or back-end logic, I enjoy every step of the development process.</p>
              <p>I’m constantly learning new technologies to stay ahead in the ever-evolving tech world and love collaborating on projects that make a real impact.</p>
            </div>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Frontend </p><hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Backend </p><hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Database</p><hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Deployment</p><hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div> */}

    </div>
  )
}

export default About