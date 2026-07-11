import './Hero-section.css';
import LightRays from '../../ui/background/Background';
import { ShimmerButton } from '../../ui/Button/shimmer-button';
import GlassEffectCard from '../../ui/Glass-effect-card/Glass-effect-card';

function hero_section() {
  return (
      <div className="hero-section">
        {/* Logo Mark */}
        {/* <div className="logo">
          <img src="./neonet-icon.svg" alt="Neonet Logo" />
        </div> */}
        <LightRays
          raysOrigin="bottom-center"
          raysColor="#D4AF37"
          raysSpeed={1}
          lightSpread={1}
          rayLength={5}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={8}
          saturation={1}
          />
        {/* Headline */}
        <div className='hero-content-inner'>
        <GlassEffectCard />
        <h1>Digital infrastructure for businesses that mean business.</h1>
        
        <p>Building the digital backbone for forward-thinking companies.</p>
        {/* CTA Button */}
        <ShimmerButton>See our work</ShimmerButton>
        {/* <button className="cta-button">See our work</button> */}
        </div>
      </div>
      
  );
}
export default hero_section;