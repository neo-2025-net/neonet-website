import React from 'react';
import './Portfolio.css';

const premiumProjects = [
  {
    title: 'HVAC Repair Service',
    tags: ['Link'],
    description: 'A concept site for a residential HVAC repair service — built to highlight fast booking and service area coverage.',
    imgUrl: '/hvac-1.png', // Fixed: Absolute public path
    href: 'https://hvac1.neonet.agency'
  },
  {
    title: 'HVAC Repair and Maintenance Service',
    tags: ['Link'],
    description: 'A concept site for a residential HVAC repair service — built to highlight fast booking and service area coverage.',
    imgUrl: '/hvac-2.png', // Fixed: Absolute public path
    href: 'https://hvac2.neonet.agency'
  },
  {
    title: 'Luxe Interior Design Studio',
    tags: ['Link'],
    description: 'A concept site for the modern Interior Design Studio — showcasing a the design and the services offered by the studio.',
    imgUrl: '/interior-1.png', // Fixed: Absolute public path
    href: 'https://interior1.neonet.agency'
  },
  {
    title: 'Concept Interior Design Studio',
    tags: ['Link'],
    description: 'A concept site for a modern interior design studio — showcasing a minimalist aesthetic with project categories by room type.',
    imgUrl: '/interior-2.png', // Fixed: Absolute public path
    href: 'https://interior2.neonet.agency'
  },
  {
    title: 'Butter and Bliss Cake Shop',
    tags: ['Link'],
    description: 'A concept site for a boutique cake shop — designed around visual menu browsing and easy custom-order requests.',
    imgUrl: '/cakeshop.png', // Fixed: Absolute public path
    href: 'https://cakeshop.neonet.agency'
  }
];

function Portfolio() {
  // Infinite loop layout duplicate structure
  const doubleProjects = [...premiumProjects, ...premiumProjects];

  return (
    <section className="main-portfolio" id="portfolio">
      <div className="portfolio-section">
        <div className="portfolio-container">
          <span className="section-label">Selected Work</span>
          <h2>Case studies that mean business</h2>
        </div>
        
        {/* Infinite Loop Container Box */}
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {doubleProjects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image-wrapper">
                  <img src={project.imgUrl} alt={project.title} className="project-img-content" />
                </div>
                
                <div className="project-info">
                  <div className="project-tags">
                    {project.tags.map((tag, tIndex) => (
                      <a 
                        className="atag" 
                        key={tIndex} 
                        href={project.href} // Fixed: Directly accesses outer project parameter
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <span className="tag">{tag}</span>
                      </a>
                    ))}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;