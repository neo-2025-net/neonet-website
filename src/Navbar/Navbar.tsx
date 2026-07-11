import React, { useState } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' }
];

const PillNav: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="full-navbar">
      <div className="nav-wrapper">
        
        {/* LEFT: Logo with Text styled in Sora */}
        <div className="nav-left">
          <a href="/" className="nav-logo-link">
            <img src="/neonet-icon.svg" alt="NeoNet Logo" className="nav-logo-img" />
            <span className="nav-logo-text">NeoNet</span>
          </a>
        </div>

        {/* MIDDLE: Simple, clean links with CSS animations */}
        <div className="nav-center desktop-only">
          <ul className="nav-links-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link-item">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: High-conversion CTA with rolling point border */}
        <div className="nav-right desktop-only">
          <a href="mailto:your-email@neonet.com" className="orbit-cta">
            <span className="orbit-dot"></span>
            Secure Infrastructure
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button 
          className="nav-mobile-trigger mobile-only" 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`burger-bar ${isMobileOpen ? 'open' : ''}`}></span>
          <span className={`burger-bar ${isMobileOpen ? 'open' : ''}`}></span>
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`nav-mobile-menu ${isMobileOpen ? 'active' : ''}`}>
        <ul className="mobile-links-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setIsMobileOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="mailto:your-email@neonet.com" className="mobile-cta-link" onClick={() => setIsMobileOpen(false)}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default PillNav;