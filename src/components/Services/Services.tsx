import React from 'react';
import './Services.css';
// import CardSwap, { Card } from '../../ui/Card-swap/Card-swap';
import Cards from '../../ui/Cards/Cards';
import ShapeGrid from '../../ui/background/ShapeGrid';
// This is our data for the 3 cards
const servicesData = [
  {
    title: 'Web Design',
    description: 'Beautiful, intuitive user interfaces tailored to your brand identity.',
    imgUrl: '../../development-edit.png'
  },
    {
    title: 'Branding',
    description: 'Memorable logos, color palettes, and assets that mean business.',
    imgUrl: '../../branding.png'
  },
  {
    title: 'Development',
    description: 'Fast, secure, and scalable digital infrastructure built with modern code.',
    imgUrl: '../../development.png'
  }

];

function Services() {
  return (
    <section >
      <div className="services-section">
        <div className='background-services'>
          <ShapeGrid speed={0.5}
            squareSize={60}
            direction='diagonal' // up, down, left, right, diagonal
            borderColor="#817d88"
            hoverFillColor='#D4D6D9'
            shape='square' // square, hexagon, circle, triangle
            hoverTrailAmount={0} // number of trailing hovered shapes (0 = no trail)
              // direction="diagonal"
              // hoverColor="#222222"
              size={60}
              shape="square" 
              />
        </div>

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
            <h2>{service.title}</h2>

            <img src={service.imgUrl} alt={service.title} />
            
            <h3>{service.description}</h3>
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