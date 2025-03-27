import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Contact me..</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <div className="contact-details">
                    <div className="contact-detail">
                      <img src={mail_icon} alt="" /><p>adesh.meena.ece22@itbhu.ac.in</p>
                    </div>
                    <div className="contact-detail">
                      <img src={call_icon} alt="" /><p>+91 6350-278-428</p>
                    </div>
                    <div className="contact-detail">
                      <img src={location_icon} alt="" /><p>Varanasi, Uttar Pradesh</p>
                    </div>
                </div>
            </div>
            <form action="https://formspree.io/f/xrgnopkk" method="POST" className="contact-right">
              <label htmlFor="">Your Name</label>
              <input type="text" placeholder='Enter your name' name='name' required/>
              <label htmlFor="">Your Email</label>
              <input type="email" placeholder='Enter your email' name='email' required/>
              <label htmlFor="">Write your message here</label>
              <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
              <button  type='submit' className='contact-submit'>Submit</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
