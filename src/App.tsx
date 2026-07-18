import './App.css';
import HeroSection from './components/Hero-section/Hero-section';
import Services from './components/Services/Services';
import AboutUs from './components/About-us/About-us';
import Portfolio from './components/Portfolio/Portfolio';
import HowWeWork from './components/How-we-work/How-we-work';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
// import Testimonials from './components/Testimonial/Testimonials';
import ContactForm from './components/Form/ContactForm';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <HeroSection />
        <Services /> 
        <Portfolio />
        {/* <Testimonials /> */}
        <AboutUs />
        <HowWeWork />
        <ContactForm />
        <Footer />
        <Analytics />
        <SpeedInsights /> 
      </div>
      
    </BrowserRouter>
  );
}

export default App;