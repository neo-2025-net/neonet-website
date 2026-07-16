import React, { useState, useEffect } from 'react';
import './Testimonials.css';

// Centralized premium data array - hidden completely from App.tsx
const testimonialsData = [
  {
    client: 'Alex Rivera, Founder',
    quote: '"They completely transformed our digital architecture. Performance is flawless. Revisions happened in minutes instead of days, and the site is blazingly fast."',
    link: 'https://github.com' // Replace with live website or client LinkedIn
  },
  {
    client: 'Sarah Chen, Product Lead',
    quote: '"The mockup-first process blew our team away. We saw exactly what we were paying for before a single line of code was written. A masterclass in friction-free execution."',
    link: 'https://linkedin.com'
  },
  {
    client: 'Marcus Brody, Director',
    quote: '"Direct access with zero middle-men meant changes happened fast. The site launched ahead of schedule, completely secure, and optimized for our target market."',
    link: 'https://google.com'
  }
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [resetKey, setResetKey] = useState(0); // Forces the CSS progress bar to reset animation cleanly

  useEffect(() => {
    const cycleDuration = 6000; // Time per testimonial (6 seconds)

    const timer = setInterval(() => {
      setIsFading(true);
      
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        setIsFading(false);
        setResetKey((prev) => prev + 1); // Triggers progress beam reload
      }, 400); // Syncs with fade transition duration
      
    }, cycleDuration);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const current = testimonialsData[activeIndex];

  return (
    <section className="testimonials-horizon-frame">
      <div className="testimonial-horizon-layout">
        <div className="testimonial-horizon-container">
          
          <span className="section-label">Validation</span>

          {/* THE TEXT VIEWPORT WINDOW */}
          <div className={`testimonial-text-viewport ${isFading ? 'is-fading' : ''}`}>
            <p className="horizon-quote-text">{current.quote}</p>
            
            <div className="horizon-attribution-row">
              <span className="horizon-client-name">{current.client}</span>
              <a 
                href={current.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="horizon-verify-link"
              >
                [ Verify Project ]
              </a>
            </div>
          </div>

          {/* THE LINEAR PROGRESS BEAM */}
          <div className="horizon-progress-track">
            <div 
              key={resetKey} 
              className="horizon-progress-fill"
              style={{ animationDuration: '6s' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;