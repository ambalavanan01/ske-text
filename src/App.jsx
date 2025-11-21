import React from 'react';
import Navigation from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Collections from './components/Collections';
import Brands from './components/Brands';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <WhyUs />
      <Collections />
      <Brands />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
