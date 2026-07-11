import React from 'react';
import './About-us.css';

function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Label/Sub-header */}
        <span className="section-label">Who You Work With</span>
        
        {/* Main Header */}
        <h2>No agencies. No handoffs. Just results.</h2>
        
        {/* Paragraph Concept */}
        <p className="about-text">
          When you work with NeoNet, you deal directly with me—the founder, designer, and developer. 
          Unlike big agencies that hand your project off to account managers, every line of code and 
          custom design layout is built by my own hands to ensure your digital infrastructure means business.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;