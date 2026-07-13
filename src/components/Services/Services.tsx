import React from 'react';
import './Services.css';
// import CardSwap, { Card } from '../../ui/Card-swap/Card-swap';
import Cards from '../../ui/Cards/Cards';

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
    <section >
      <div className="services-section">
      <div className="services-header">
        <h2>What We Do</h2>
      </div>
      {/* <div className='cards-container'>
        {servicesData.map((service, index) => (
          <Cards key={index} title={service.title} description={service.description} imgUrl="" />
        ))}
      </div> */}

        <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      </div>

      
      
      {/* </div> */}
    </section>
  );
}

// export default Services;
export default Services;