/* eslint-disable no-unused-vars */
import React from 'react'
import '../Footer/Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
       <div className="footer-top-left">
        <img src={footer_logo} alt="" />
        <p>I am a Computer Science and Engineering Student from GGSIPU. I have experience in frontend development and web designing, I am also famelier with machine learning techinques and have keen interest in learning about latest technological trends.</p>
       </div>
       <div className="footer-top-right">
        <div className="footer-email-input">
         <img src={user_icon} alt="" />
         <input type="email" placeholder='Enter your email' />
        </div>
        <div className="footer-subscribe">Subscribe</div>
       </div>
      </div>
      <hr />
      <div className="footer-bottom">
       <p className="footer-bottom-left"> © Shivam Bhardawaj. All rights reserved.</p>
       <div className="footer-bottom-right">
        <p>Terms and Services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
       </div>
      </div>
    </div>
  )
}

export default Footer
