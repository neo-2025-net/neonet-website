import React from 'react';
import './Portfolio.css';

// Data array focusing on your top 2-3 premium projects
const premiumProjects = [
  {
    title: 'Premium Project One',
    tags: ['React', 'Next.js', 'UI/UX'],
    description: 'A high-performance digital infrastructure built for an enterprise client.'
  },
  {
    title: 'Premium Project Two',
    tags: ['E-Commerce', 'TypeScript'],
    description: 'Custom bespoke design system focusing on high conversion rates.'
  }
];

function Portfolio() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <span className="section-label">Selected Work</span>
        <h2>Case studies that mean business</h2>
        
        <div className="portfolio-grid">
          {premiumProjects.map((project, index) => (
            <div className="project-card" key={index}>
              {/* Image Placeholder */}
              <div className="project-image-placeholder">
                [ Screenshot Mockup Goes Here ]
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
    </section>
  );
}

export default Portfolio;