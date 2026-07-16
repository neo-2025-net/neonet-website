import React, { useState, useEffect, useRef } from 'react';
import './Services.css';
import ShapeGrid from '../../ui/background/ShapeGrid';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoCycleRef = useRef<NodeJS.Timeout | null>(null);

  // Core Auto-Cycle Loop
  useEffect(() => {
    if (!isHovered) {
      autoCycleRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
      }, 3000); // Transitions smoothly every 3.5 seconds
    }

    return () => {
      if (autoCycleRef.current) clearInterval(autoCycleRef.current);
    };
  }, [isHovered]);

  const handleRowInteraction = (index: number) => {
    setIsHovered(true);
    setActiveIndex(index);
  };

  return (
    <section className="main-services-frame">
      <div className="services-section">
        
        <div className='background-services'>
          <ShapeGrid 
            speed={1}
            squareSize={60}
            direction='diagonal'
            borderColor="#1f1c15"
            hoverFillColor='#D4AF37'
            shape='square'
            hoverTrailAmount={0}
            size={60}
          />
        </div>

        <div className="services-container-split">
          
          {/* LEFT PANEL: Asset Display Viewport */}
          <div className="services-left-pane">
            <div className="showcase-viewport-window">
              <div className="viewport-top-bar">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                <span className="viewport-title">{servicesData[activeIndex].title} Asset Studio</span>
              </div>
              <div className="viewport-display-canvas">
                {servicesData.map((service, index) => (
                  <img 
                    key={index}
                    src={service.imgUrl} 
                    alt={service.title} 
                    className={`showcase-graphic-layer ${activeIndex === index ? 'visible' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Dynamic Interactive List Track */}
          <div className="services-right-pane">
            <div className="services-pane-header">
              <span className="services-label">Capabilities</span>
              <h2>What We Do</h2>
            </div>
            
            <div 
              className="services-interactive-list"
              onMouseLeave={() => setIsHovered(false)}
            >
              {servicesData.map((service, index) => (
                <div 
                  className={`service-interactive-row ${activeIndex === index ? 'is-active' : ''}`}
                  key={index}
                  onMouseEnter={() => handleRowInteraction(index)}
                  onTouchStart={() => handleRowInteraction(index)}
                >
                  <div className="row-number">0{index + 1}</div>
                  <div className="row-body">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;