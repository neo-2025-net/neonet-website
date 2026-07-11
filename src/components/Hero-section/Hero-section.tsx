import React from 'react';
import './Hero-section.css';

function hero_section() {
  return (
      <div className="hero-section">
        {/* Logo Mark */}
        <div className="logo">
          <img src="./neonet-icon.svg" alt="Neonet Logo" />
        </div>

        {/* Headline */}
        <h1>Digital infrastructure for businesses that mean business.</h1>

        {/* CTA Button */}
        <button className="cta-button">See our work</button>
      </div>
  );
}
export default hero_section;