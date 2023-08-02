import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="nav-logo">Logo</div>
          <div className={`nav-menu ${isNavOpen ? 'active' : ''}`}>
            <ul className="nav-items">
              <li className="nav-item">
                <a href="#home" className="nav-link" onClick={toggleNav}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link" onClick={toggleNav}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link" onClick={toggleNav}>
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link" onClick={toggleNav}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-icon" onClick={toggleNav}>
            <div className={`hamburger ${isNavOpen ? 'active' : ''}`}></div>
          </div>
        </div>
      </nav>
      <div className="content">
        {/* Your content here */}
      </div>
    </div>
  );
};

export default App;
