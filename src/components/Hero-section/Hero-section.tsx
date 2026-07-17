import './Hero-section.css';
// import LightRays from '../../ui/background/Background';
// import { ShimmerButton } from '../../ui/Button/shimmer-button';
// import GlassEffectCard from '../../ui/Glass-effect-card/Glass-effect-card';
import ColorBends from '../../ui/background/ColorBends';
import { HoverBorderGradient } from '../../ui/Button/hover-border-gradient';

const scrolltoportfolio = (e: React.MouseEvent<HTMLButtonElement>) => {
  const portfolioSection = document.getElementById('portfolio');
  if (portfolioSection) {
    portfolioSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

function HeroSection() {
  return (
    <div className="hero-section">
      {/* Dynamic Background Rays - Positioned cleanly behind content */}
      {/* <LightRays
        raysOrigin="bottom-center"
        raysColor="#D4AF37"
        raysSpeed={0.8}
        lightSpread={1.2}
        rayLength={6}
        followMouse={true}
        mouseInfluence={0.15}
        noiseAmount={0}
        distortion={0}
        className="custom-rays"
        pulsating={false}
        fadeDistance={6}
        saturation={0.9}
      /> */}
      <ColorBends
  colors={["#0A0A0A", "#D4AF37", "#262216"]}
  rotation={90}
  speed={0.3}
  scale={1}
  frequency={1}
  warpStrength={1}
  mouseInfluence={1}
  noise={0.15}
  parallax={0.5}
  iterations={1}
  intensity={1.5}
  bandWidth={6}
  transparent
  autoRotate={0}
  // color="#D4AF37"
  className="custom-rays"
/>
      {/* Foreground Content Stack */}
      <div className='hero-content-inner'>
        {/* <GlassEffectCard /> */}
        
        {/* Superior Subtitle Hook */}
        <span className="hero-badge">NEONET DIGITAL STUDIO</span>
        
        <h1>Digital infrastructure for businesses that mean business.</h1>
        
        <p>Building the digital backbone for forward-thinking companies.</p>
        
        <div className="hero-cta-wrapper">
          {/* <ShimmerButton>See our work</ShimmerButton> */}
          <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black text-white flex items-center space-x-2"
        onClick={scrolltoportfolio}
      >
        <span>See Our Work</span>
      </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;