import React from 'react';
import './Footer.css';

function Footer() {
  // This gets the current year automatically so your copyright never expires
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* Main Pitch / Call to Action */}
        <div className="footer-cta">
          <h2>Ready to secure your digital infrastructure?</h2>
          <p>Let's find out if we are a good fit for each other.</p>
          <a href="mailto:your-email@neonet.com" className="footer-email-btn">
            Get in touch directly
          </a>
        </div>

        {/* Bottom Metadata Line */}
        <div className="footer-bottom">
          <div className="footer-brand">
            <img src="/neonet-icon.svg" alt="NeoNet Logo" className="footer-logo" />
            <strong>NeoNet</strong>
            <span>Custom digital solutions for serious businesses.</span>
          </div>
          
          <div className="footer-copyright">
            &copy; {currentYear} NeoNet. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;