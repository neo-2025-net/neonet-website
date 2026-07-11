import React from 'react';
import './Testimonials.css';

// This is where your future testimonials will live. 
// I put placeholder data here so you can see how it looks.
const testimonialsData = [
  {
    quote: "Working with them completely transformed our system. The digital infrastructure handles our peak traffic without breaking a sweat.",
    clientName: "Jane Doe",
    company: "Acme Corp",
    role: "CEO & Founder"
  },
  {
    quote: "Direct access to the builder meant zero communication breakdown. Custom design and flawless development all in one place.",
    clientName: "John Smith",
    company: "Apex Tech",
    role: "Operations Director"
  }
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <span className="section-label">Wall of Proof</span>
        <h2>What our clients say</h2>
        
        <div className="testimonials-grid">
          {testimonialsData.map((item, index) => (
            <div className="testimonial-card" key={index}>
              {/* Big decorative quote mark */}
              <div className="quote-mark">“</div>
              
              <p className="testimonial-quote">{item.quote}</p>
              
              <div className="testimonial-author">
                <strong>{item.clientName}</strong>
                <span>{item.role}, {item.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;