/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call from '../../assets/call_icon.svg'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "17bbb096-2df4-4235-bd70-ab8a64fbb055");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
       <h1>Get in touch</h1>
       <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
       <div className="contact-left">
        <h1>Let's talk</h1>
        <p>I am currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can Contact anytime.
        </p>
        <div className="contact-details">
         <div className="contact-detail">
          <img src={mail_icon} alt="" /><p>shivam19bhard@gmail.com</p>
         </div>
         <div className="contact-detail">
          <img src={call} alt="" /><p>+91 7827639507</p>
         </div>
         <div className="contact-detail">
          <img src={location_icon} alt="" /><p>Najafgarh, New Delhi-110043</p>
         </div>
        </div>
       </div>
       <form onSubmit={onSubmit} className="contact-right">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder='Enter your name' name='name' />
        <label htmlFor="">Your Email</label>
        <input type="email" placeholder='Enter your Email' name='email' />
        <label htmlFor="">Write your message here</label>
        <textarea name="message" rows="8" placeholder='Enter your Message'></textarea>
        <button type='submit' className="contact-submit">Submit now</button>
       </form>
      </div>
    </div>
  )
}

export default Contact
