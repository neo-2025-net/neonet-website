import React from 'react';
// import './Footer.css';
import './footer-test.css';
import DarkVeil from '../../ui/background/dark-veil';
import SocialIcons from '../../ui/Social-icons/Social-icons';

function Footer() {
  // This gets the current year automatically so your copyright never expires
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* Main Pitch / Call to Action */}
        {/* <div className="footer-cta"> */}
          {/* <h2>Ready to secure your digital infrastructure?</h2>
          <p>Let's find out if we are a good fit for each other.</p>
          <a href="mailto:your-email@neonet.com" className="footer-email-btn">
            Get in touch directly
          </a> */}
        {/* </div> */}

        {/* Bottom Metadata Line */}
        {/* <div className="footer-bottom">
          <div className="footer-brand">
            <img src="/neonet-icon.svg" alt="NeoNet Logo" className="footer-logo" />
            <strong>NeoNet</strong>
            <span>Custom digital solutions for serious businesses.</span>
          </div>
          
          <div className="footer-copyright">
            &copy; {currentYear} NeoNet. All rights reserved.
          </div>
        </div> */}



       

        <div className='background'>
        <DarkVeil
          hueShift={1}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={1}
          scanlineFrequency={100}
          warpAmount={5}
        />
        </div>
        
         
        <div className="footer-buttons">
          <div className='footer-contact'>
            <h1>Contact us</h1>
            <a href="mailto:info@neonet.website"><h2>info@neonet.website ↗</h2></a>
          </div>
          <div className = 'footer-socials'>
            {/* <SocialIcons /> */}
            <a href="#"><h2>Instagram ↗</h2></a>
            <a href="#"><h2>Linkedin ↗</h2></a>
            <a href="#"><h2>X ↗</h2></a>
          </div>
        </div>

        <div className='widelogo'> 
          {/* <img src="/neonet-icon.svg" alt="NeoNet Logo" className="footer-logo" /> */}
          {/* <img src="/neonet-wordmark.svg" alt="NeoNet Wordmark" className="footer-wordmark" /> */}
          <img src="/footer-logo.svg" alt="NeoNet Logo" className="footer-logo" />
        </div>

        <div className='copyright'>
          <p>&copy; {currentYear} NeoNet. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;