

import { Building2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedSection animation="fadeInUp">
            <div className="flex items-center mb-4">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Bloom Rise</span>
            </div>
            <p className="text-gray-400">
              Leading management consulting firm helping businesses achieve their full potential.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={100}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">

              {['Home', 'About Us', 'Service', 'Industries', 'Contact'].map((link, index) => (

                <li key={index}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-2 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </AnimatedSection>


          <AnimatedSection animation="fadeInUp" delay={300}>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="h-6 w-6" />, href: '#' },
                { icon: <Twitter className="h-6 w-6" />, href: '#' },
                { icon: <Linkedin className="h-6 w-6" />, href: '#' },
                { icon: <Instagram className="h-6 w-6" />, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Removed Services Section and Added YouTube Logo and CTA */}
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="flex flex-col items-start justify-center ">
              {/* Updated YouTube Logo URL */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
               
                alt="YouTube Logo"
                className="h-10  mb-2"
              />

              <a
                href="https://www.youtube.com/channel/YourChannelLink" // Replace with your actual YouTube channel link
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold hover:text-red-500 transition-colors duration-300 flex items-center "
              >
               Watch Exclusive Content on YouTube!🎥
              </a>
            </div>
          </AnimatedSection>

        </div>

        <AnimatedSection animation="fadeInUp" delay={400}>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Bloom Rise. All rights reserved.</p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;

