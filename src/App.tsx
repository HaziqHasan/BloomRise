
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';  
import Contact from './components/Contact';
import TeamInfo from './components/TeamInfo';
import Footer from './components/Footer';



function App() {
  return (
      <div className="bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-10 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Service />
        <TeamInfo />
        <Industries />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
