import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';  // 👈 New Import
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Industries />
      <Testimonials />  {/* 👈 Testimonials section added here */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
