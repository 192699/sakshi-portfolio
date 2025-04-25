import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
    document.querySelector('.App').classList.toggle('collapsed');
  };

  return (
    <nav className={`navbar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="navbar-brand">
        <Link to="/">{isCollapsed ? 'P' : 'Portfolio'}</Link>
      </div>
      <div className="navbar-links">
        <Link to="/projects">
          <i className="fas fa-project-diagram"></i>
          <span className="link-text">{!isCollapsed && 'Projects'}</span>
        </Link>
        <Link to="/resume">
          <i className="fas fa-file-alt"></i>
          <span className="link-text">{!isCollapsed && 'Resume'}</span>
        </Link>
        <Link to="/about">
          <i className="fas fa-user"></i>
          <span className="link-text">{!isCollapsed && 'About'}</span>
        </Link>
        <Link to="/contact">
          <i className="fas fa-envelope"></i>
          <span className="link-text">{!isCollapsed && 'Contact'}</span>
        </Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;