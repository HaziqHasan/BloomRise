
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
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />

      <Service/>
      <TeamInfo />
      <Industries />
      <Testimonials />  
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
