/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className='profile-img' src={profile_img} alt="" height="20%" width="20%"/>
      <h1><span>I'm Shivam Bhardawaj,</span> CSE student from GGSIPU.</h1>
      <p>I am a Student of Computer Science and Engineering at Delhi Technical Campus affiliated with GGSIPU University. I am also pursuing B.Sc Data Science and Programming from IIT,Madras(Online Mode). Have certified degree on Foundation in data science and programming from IIT,Madras. I have a fair amount of knowledge on the concepts on the topics of Machine Learning and have written Research papers on the topic of Artificial Intelligence. Passionate about problem solving and dedicated to continuous learning in the field of computer science and artificial intelligence. Always eager to learn about new development in the field of artificial intelligence and keeps on acquiring new skills in the field to expand my knowledge(Data Structures, Django Development, Representation Learning, Unsupervised Learning, Reinforcement Learning, etc.) and apply them to further enhance the field. I was also involved in the writing of a book on mobile computing with my pears from my collage.</p>
      <div className="hero-action">
       <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
       <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
