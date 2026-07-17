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
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    // REPLACE 'YOUR_FORMSPREE_ID' WITH THE ID YOU COPIED FROM FORMSPREE (e.g., xbjnkyoz)
    const FORMSPREE_ID = 'xrenpoab'; 

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Service: formData.service,
          Message: formData.message,
        })
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset the form values
        setFormData({ name: '', email: '', service: 'Development', message: '' });
      } else {
        setErrorMsg('Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMsg('Network error. Check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-kinetic-section" id="contact">
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
                LET'S BUILD SOMETHING <span className="gold-text-effect">LEGENDARY</span>.
              </h2>
              <p className="editorial-desc">
                Have a vision or want to upgrade your current digital infrastructure? Drop us a line. We reply within 12 hours.
              </p>
            </div>

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
                  <p className="anchor-value">start@neonet.website</p>
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
                  <h3>Inquiry Transmitted</h3>
                  <p>Message secured. Our architecture engine is processing your project guidelines.</p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="mt-6 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:underline bg-transparent border-none cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="tactile-form-element">
                  
                  <div className="form-input-row">
                    <div className="input-field-group">
                      <label>Your Name</label>
                      <input
                        type="text"
                        required
                        disabled={loading}
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
                        disabled={loading}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                      />
                      <div className="input-focus-line" />
                    </div>
                  </div>

                  <div className="input-field-group">
                    <label>What are you building?</label>
                    <div className="select-dropdown-wrapper">
                      <select
                        disabled={loading}
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="Development">Custom Web Infrastructure</option>
                        <option value="UIUX">High-End Product Design</option>
                        <option value="Consulting">Technical Architecture Audit</option>
                      </select>
                    </div>
                  </div>

                  <div className="input-field-group">
                    <label>Project Scope & Details</label>
                    <textarea
                      rows={4}
                      required
                      disabled={loading}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your goals, timelines, or budget..."
                    />
                    <div className="input-focus-line" />
                  </div>

                  {errorMsg && (
                    <p className="text-red-500 text-xs font-semibold">{errorMsg}</p>
                  )}

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="kinetic-submit-trigger"
                  >
                    <span className="trigger-label">
                      {loading ? 'Transmitting Inbound Payload...' : 'Launch Project Inquiry'}
                    </span>
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