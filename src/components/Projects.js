import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Projects.css';

const Projects = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`projects-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="profile-section">
        <div className="profile-image">
          <img src="/your-photo.jpg" alt="Your Name" />
        </div>
        <h1>My Projects</h1>
        <p className="projects-intro">
          Intro about projects goes here. Need help with your project? Book a free session with me to discuss your specific project requirements and how I can help you.
        </p>
        <button className="start-conversation-btn">
          Start a Conversation →
        </button>
      </div>

      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image">
            <img src="/trading-app.jpg" alt="Trading App" />
          </div>
          <div className="project-content">
            <h3>Trading App Lorem</h3>
            <p>Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In netus lorem.</p>
            <div className="tech-stack">
              <span>Tech Stack:</span>
              <div className="tech-icons">
                <img src="/react.png" alt="React" />
                <img src="/node.png" alt="Node.js" />
                <img src="/mongodb.png" alt="MongoDB" />
              </div>
            </div>
            <a href="#" className="view-case-btn">View Case Study →</a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src="/smart-tv.jpg" alt="Smart TV App" />
          </div>
          <div className="project-content">
            <h3>Smart TV App</h3>
            <p>Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="tech-stack">
              <span>Tech Stack:</span>
              <div className="tech-icons">
                <img src="/vue.png" alt="Vue.js" />
                <img src="/python.png" alt="Python" />
              </div>
            </div>
            <a href="#" className="view-case-btn">View Case Study →</a>
          </div>
        </div>
      </div>

      <button className="load-more-btn">Load More Projects</button>

      <div className="help-section">
        <h2>Need Help With Your Project?</h2>
        <p>Lead generation intro goes here lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat egestas elit, quis ullamcorper massa pellentesque quis.</p>
        <button className="get-in-touch-btn">Get In Touch →</button>
      </div>
    </div>
  );
}

export default Projects;