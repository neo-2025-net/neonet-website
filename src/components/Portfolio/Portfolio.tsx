import React from 'react';
import './Portfolio.css';

const premiumProjects = [
  {
    title: 'Bespoke E-Commerce Architecture',
    tags: ['E-Commerce', 'TypeScript', 'Next.js'],
    description: 'Custom headless storefront engineered for lightning-fast conversions.',
    imgUrl: 'https://via.placeholder.com/600x400/1a1a1a/ffffff?text=E-Commerce+Infrastructure'
  },
  {
    title: 'Enterprise Analytics Suite',
    tags: ['React', 'Tailwind', 'UI/UX'],
    description: 'High-performance real-time tracking dashboard built for scalability.',
    imgUrl: 'https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Analytics+Suite'
  },
  {
    title: 'Bespoke Brand Ecosystem',
    tags: ['Branding', 'Web3', 'Design'],
    description: 'Immersive digital assets and style guidelines built from scratch.',
    imgUrl: 'https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Brand+Ecosystem'
  },
  {
    title: 'Premium SaaS Infrastructure',
    tags: ['Node.js', 'React', 'Cloud'],
    description: 'Highly secure, scalable digital engine built with modern code.',
    imgUrl: 'https://via.placeholder.com/600x400/1a1a1a/ffffff?text=SaaS+Infrastructure'
  }
];

function Portfolio() {
  // To create a perfect infinite loop track visually, we map over the array twice.
  // This ensures that as item 4 slides away, item 1 is already right behind it.
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
                      <span key={tIndex} className="tag">{tag}</span>
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