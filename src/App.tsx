import './App.css';
import Hero_section from './components/Hero-section/Hero-section';
import Services from './components/Services/Services';
import AboutUs from './components/About-us/About-us';
import Portfolio from './components/Portfolio/Portfolio';
import HowWeWork from './components/How-we-work/How-we-work';
import Footer from './components/Footer/Footer';
import PillNav from './Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <PillNav />
        <Hero_section />
        <Services /> 
        <Portfolio />
        <AboutUs />
        <HowWeWork />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;