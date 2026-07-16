import React, { useState } from 'react';
import { motion } from 'motion/react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Development',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  

  return (
    <section className="contact-kinetic-section" id="contact">
      {/* Dynamic Animated Nebula Background Array */}
      <div className="kinetic-bg-glow upper-glow" />
      <div className="kinetic-bg-glow lower-glow" />
      <div className="grid-overlay-texture" />

      <div className="contact-structural-container">
        <div className="contact-split-engine">
          
          {/* LEFT INTERACTIVE PANEL */}
          <motion.div 
            className="left-editorial-pane"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <span className="editorial-badge">Inquiries</span>
              <h2 className="editorial-title">
                Let's build something <span className="gold-text-effect">legendary</span>.
              </h2>
              <p className="editorial-desc">
                Have a vision or want to upgrade your current digital infrastructure? Drop us a line. We reply within 12 hours.
              </p>
            </div>

            {/* Interactive Anchors */}
            <div className="editorial-anchor-stack">
              <div className="anchor-item">
                <div className="anchor-icon-frame font-flash">⚡</div>
                <div>
                  <h4 className="anchor-label">Average Response</h4>
                  <p className="anchor-value">Under 12 Hours</p>
                </div>
              </div>
              
              <div className="anchor-item">
                <div className="anchor-icon-frame font-mail">✉️</div>
                <div>
                  <h4 className="anchor-label">Direct Line</h4>
                  <p className="anchor-value">hello@neonet.digital</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT TACTILE FORM PANEL */}
          <motion.div 
            className="right-form-pane"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="form-glass-card">
              {submitted ? (
                <motion.div 
                  className="success-state-engine"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="success-checkmark">✓</div>
                  <h3>Message Secured</h3>
                  <p>Our team is processing your infrastructure details.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="tactile-form-element">
                  
                  {/* Row 1: Name & Email */}
                  <div className="form-input-row">
                    <div className="input-field-group">
                      <label>Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                      />
                      <div className="input-focus-line" />
                    </div>

                    <div className="input-field-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                      />
                      <div className="input-focus-line" />
                    </div>
                  </div>

                  {/* Row 2: Service Selection */}
                  <div className="input-field-group">
                    <label>What are you building?</label>
                    <div className="select-dropdown-wrapper">
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="Development">Custom Web Infrastructure</option>
                        <option value="UIUX">High-End Product Design</option>
                        <option value="Consulting">Technical Architecture Audit</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Project Details */}
                  <div className="input-field-group">
                    <label>Project Scope & Details</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your goals, timelines, or budget..."
                    />
                    <div className="input-focus-line" />
                  </div>

                  {/* Premium Kinetic Trigger Button */}
                  <button type="submit" className="kinetic-submit-trigger">
                    <span className="trigger-label">Launch Project Inquiry</span>
                    <div className="trigger-shimmer-beam" />
                  </button>

                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}