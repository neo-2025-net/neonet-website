import React from 'react';
import './Services.css';

// This is our data for the 3 cards
const servicesData = [
  {
    title: 'Web Design',
    description: 'Beautiful, intuitive user interfaces tailored to your brand identity.'
  },
  {
    title: 'Development',
    description: 'Fast, secure, and scalable digital infrastructure built with modern code.'
  },
  {
    title: 'Branding',
    description: 'Memorable logos, color palettes, and assets that mean business.'
  }
];

function Services() {
  return (
    <section className="services-section">
      <h2>What We Do</h2>
      
      <div className="services-grid">
        {/* We use .map() to loop through our cards easily */}
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;