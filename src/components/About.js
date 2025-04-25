import React from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import { useTheme } from '../context/ThemeContext';
import '../styles/About.css';

const About = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate(); // Add this line

  return (
    <div className={`about-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="profile-section">
        <div className="profile-image">
          <img src="/your-profile.jpg" alt="Your Name" />
        </div>
        <h1>Sakshi Patel</h1>
        <p className="profile-title">Full Stack Developer</p>
        <button className="view-resume-btn" onClick={() => navigate('/resume')}>View Resume</button>
      </div>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="/project1.jpg" alt="Project 1" />
            <h3>Trading App</h3>
            <p>Project description goes here with key features and technologies used.</p>
            <a href="#" className="view-more">View more →</a>
          </div>
          {/* Add more project cards */}
        </div>
        <button className="more-projects-btn">More Projects</button>
      </section>

      <section className="clients-section">
        <h2>Clients I Worked With</h2>
        <div className="clients-grid">
          <img src="/client1.png" alt="Client 1" />
          <img src="/client2.png" alt="Client 2" />
          {/* Add more client logos */}
        </div>
      </section>

      <section className="skills-section">
        <h2>Skills & Experiences</h2>
        <div className="skills-grid">
          <div className="skill-icons">
            {/* Add your tech stack icons */}
          </div>
          <div className="experience-cards">
            <div className="exp-card">
              <i className="fas fa-code"></i>
              <h3>Web Development</h3>
              <p>Description of your web development experience.</p>
            </div>
            <div className="exp-card">
              <i className="fas fa-database"></i>
              <h3>Database Infrastructure</h3>
              <p>Description of your database experience.</p>
            </div>
            {/* Add more experience cards */}
          </div>
        </div>
      </section>
      <div className="help-section">
        <h2>Need Help With Your Project?</h2>
        <p>Lead generation intro goes here lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat egestas elit, quis ullamcorper massa pellentesque quis.</p>
        <button className="get-in-touch-btn">Get In Touch →</button>
      </div>
    </div>
  );
};

export default About;