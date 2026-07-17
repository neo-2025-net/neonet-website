import React from 'react';
import './About-us.css';
import Cubes from '../../ui/Cubes/Cubes.tsx';

function AboutUs() {
  return (
    <section className="main-about">
      <div className="about-section">
        
        {/* LEFT PANEL */}
        <div className="about-content-left">
          <span className="section-label">Who You Work With</span>
          <h2>No middlemen. No handoffs. Just results.</h2>
          <p className="about-text">
            When you work with NeoNet, you deal directly with me—the founder, designer, and developer. 
            Unlike big agencies that hand your project off to account managers, every line of code and 
            custom design layout is built by my own hands to ensure your digital infrastructure means business.
          </p>
        </div>

        {/* RIGHT PANEL */}
        <div className="about-cubes-right">
          <Cubes 
            
          />
        </div>

      </div>
    </section>
  );
}

export default AboutUs;