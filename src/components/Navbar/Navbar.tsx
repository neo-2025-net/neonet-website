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

    const scrolltoservices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  const scrolltoprocess = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const processSection = document.getElementById('process');
    if (processSection) {
      processSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  const scrolltoportfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

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
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#process" className="nav-link">Process</a>
          
        </div>

        {/* PREMIUM ACTION BUTTON */}
        <div className="navbar-action">
          <a> <button onClick={handleScrollToContact} className="cta-button-minimal"> 
            Let's Talk
            </button>
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;