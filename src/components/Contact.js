import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Contact.css';

const Contact = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`contact-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="profile-section">
        <div className="profile-image">
          <img src="/your-photo.jpg" alt="Your Name" />
        </div>
        <h1>Get In Touch</h1>
        <p className="contact-intro">
          Contact intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat sodales massa vitae ornare. Quisque ac ipsum quam.
        </p>
      </div>

      <div className="contact-form-section">
        <h2>Contact Form</h2>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <input type="text" placeholder="Name" className="form-input" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" className="form-input" />
            </div>
          </div>
          <div className="form-group">
            <textarea 
              placeholder="Enter your message" 
              className="form-input message-input"
              rows="6"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;