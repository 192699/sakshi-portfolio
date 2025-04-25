import React from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import { useTheme } from '../context/ThemeContext';
import '../styles/Resume.css';

const Resume = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate(); // Add this line

  return (
    <div className={`resume-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="profile-header">
        <div className="profile-image">
          <img src="/your-photo.jpg" alt="Your Name" />
        </div>
        <h1>DANIEL LOPEZ</h1>
        <p className="job-title">SENIOR APP DEVELOPER</p>
        <p className="profile-intro">
          Hi! I'm a Senior Developer who loves building the ideas of tomorrow in mobile hosting apps.
        </p>
        <div className="header-buttons">
          <button className="view-resume-btn" onClick={() => navigate('/resume')}>
            View Resume
          </button>
          <button className="contact-btn" onClick={() => navigate('/contact')}>
            Get in Touch
          </button>
        </div>
      </div>

      <div className="featured-projects">
        <h2>Featured Projects</h2>
        {/* Rest of your projects section */}
      </div>

      <div className="resume-grid">
        <div className="left-column">
          <section className="about-section">
            <h2><i className="fas fa-user"></i> ABOUT ME</h2>
            <p>Summarise your career profile here lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor sit amet, consectetur adipiscing elit.</p>
          </section>

          <section className="experience-section">
            <h2><i className="fas fa-briefcase"></i> WORK EXPERIENCE</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="date">2021 - Present</div>
                <div className="company">Google</div>
                <h3>Tech Lead</h3>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  <li>Aenean porta est diam, et blandit ipsum suscipit facilisis</li>
                  <li>Praesent nec semper eros</li>
                </ul>
              </div>
              
              <div className="timeline-item">
                <div className="date">2019 - 2021</div>
                <div className="company">Meta</div>
                <h3>Senior App Developer</h3>
                <ul>
                  <li>Praesent nec semper eros. Aliquam quis turpis sed</li>
                  <li>Phasellus tempus eu arcu in semper</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="right-column">
          <section className="tech-stack">
            <h2><i className="fas fa-code"></i> TECH STACK</h2>
            <div className="skill-bars">
              <div className="skill">
                <span>JavaScript</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="skill">
                <span>ReactJS</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="skill">
                <span>Python</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
          </section>

          <section className="education-section">
            <h2><i className="fas fa-graduation-cap"></i> EDUCATION</h2>
            <div className="education-item">
              <h3>MSc in Computer Science</h3>
              <div className="school">Oxford University</div>
              <div className="date">2019 - 2021</div>
            </div>
            <div className="education-item">
              <h3>BSc Maths and Physics</h3>
              <div className="school">University of California, Berkeley</div>
              <div className="date">2015 - 2019</div>
            </div>
          </section>

          <section className="languages-section">
            <h2><i className="fas fa-language"></i> LANGUAGES</h2>
            <div className="language">
              <span>English</span>
              <div className="dots">
                <span className="dot active"></span>
                <span className="dot active"></span>
                <span className="dot active"></span>
                <span className="dot active"></span>
                <span className="dot active"></span>
              </div>
            </div>
            <div className="language">
              <span>Spanish</span>
              <div className="dots">
                <span className="dot active"></span>
                <span className="dot active"></span>
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Resume;