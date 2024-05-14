/* eslint-disable no-unused-vars */
import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_img from '../../assets/about_img.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a front end developer in with experience in using tools like react, vue and have very good experience in UI/UX design. I also am experienced with research paper in the field of AI and ML. Have written two research papers in the same and have eperience in computer vision as I worked in the CV in an internship in DRDO.</p>
            <p>My primary goal is to explore in the field of AL and ML and learn as much as I can. To that end I am willing to spend as much time as needed to do so.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>Programming languages</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>Frontend and UI/UX</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>Writting(Research and book) Skills</p><hr style={{width:"50%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2</h1>
          <p>Research Papers</p>
        </div>
      </div>
    </div>
  )
}

export default About
