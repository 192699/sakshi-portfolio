import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/Navigation.css';

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className={`nav-menu ${isExpanded ? 'expanded' : ''} ${isDarkMode ? 'dark' : 'light'}`}>
      <button className="menu-toggle" onClick={() => setIsExpanded(!isExpanded)}>
        <i className={`fas ${isExpanded ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      <div className="theme-toggle">
        <button className="toggle-btn" onClick={toggleTheme}>
          <i className={`far ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
      </div>
      
      <div className="nav-links">
        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <i className="far fa-user"></i>
          <span>ABOUT</span>
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <i className="fas fa-briefcase"></i>
          <span>PROJECTS</span>
        </NavLink>
        <NavLink to="/resume" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <i className="far fa-file-alt"></i>
          <span>RESUME</span>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <i className="far fa-comment-dots"></i>
          <span>CONTACT</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;