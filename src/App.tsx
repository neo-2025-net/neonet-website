import './App.css';
import Hero_section from './components/Hero-section/Hero-section';
import Services from './components/Services/Services';
import AboutUs from './components/About-us/About-us';
import Portfolio from './components/Portfolio/Portfolio';
import HowWeWork from './components/How-we-work/How-we-work';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Testimonials from './components/Testimonial/Testimonials';
import ContactForm from './components/Form/ContactForm';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero_section />
        <Services /> 
        <Portfolio />
        {/* <Testimonials /> */}
        <AboutUs />
        <HowWeWork />
        <ContactForm />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;