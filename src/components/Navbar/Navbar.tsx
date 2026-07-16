import React, { useState, useEffect } from 'react';
import './Navbar.css';
// import { handleScrollToContact } from '../../ContactForm/ContactForm';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Triggers the compact glass transformation after scrolling 40px
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <nav className={`navbar-capsule-wrapper ${isScrolled ? 'is-compact' : ''}`}>
      <div className="navbar-container">
        
        {/* LOGO AREA */}
        <div className="navbar-logo">
          NEO<span>NET</span>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="navbar-links">
          <a href="#services" className="nav-link">Services</a>
          <a href="#process" className="nav-link">Process</a>
          <a href="#work" className="nav-link">Work</a>
        </div>

        {/* PREMIUM ACTION BUTTON */}
        <div className="navbar-action">
          <a> <button onClick={handleScrollToContact} className="your-navbar-button-class"> 
            Let's Talk
            </button>
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;