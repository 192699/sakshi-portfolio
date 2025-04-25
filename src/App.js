import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Navigation from './components/Navigation';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './App.css';

const AppContent = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <Navigation />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
