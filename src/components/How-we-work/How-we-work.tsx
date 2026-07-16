import React, { useEffect, useRef, useState } from 'react';
import './How-we-work.css';

const stepsData = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'Quick chat to understand your business, goals, and what you actually need (not a generic template).'
  },
  {
    number: '02',
    title: 'Mockup First',
    description: 'I design a real preview before you commit to anything—see it before you pay for it.'
  },
  {
    number: '03',
    title: 'Build & Refine',
    description: "Direct feedback loop with me, no account managers, no delays—changes happen fast because it's one person, not a chain of approvals."
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'The site goes live, and I stay reachable after—not a one-time handoff.'
  }
];

function HowWeWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Automatically turns the animation state true/false as user scrolls up or down
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.15, // Triggers when 15% of the section enters the frame
        rootMargin: '0px 0px -100px 0px' // Offset to ensure elegant scrolling execution
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="main-process-frame" ref={sectionRef}>
      <div className="process-section">
        {/* Dynamic trigger class bound to the intersection observer state */}
        <div className={`process-container ${isIntersecting ? 'animate-trigger' : ''}`}>
          <span className="section-label">The Process</span>
          <h2>How We Work Together</h2>
          
          <div className="process-list">
            {stepsData.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="step-number-wrapper">
                  <div className="step-number">{step.number}</div>
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;