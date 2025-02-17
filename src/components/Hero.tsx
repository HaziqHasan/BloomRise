import React from 'react';
import { AnimatedSection } from './AnimatedSection';

const Hero = () => {
  return (
    <div id="home" className="pt-16">
      <div className="relative h-[600px] bg-cover bg-center overflow-hidden" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
            <div className="text-white w-full">
              <AnimatedSection animation="fadeInUp" className="mb-4">
                <h1 className="text-4xl md:text-6xl font-bold relative">
                  Your Success Is Our Business
                  <span className="absolute -z-10 inset-0 animate-shimmer"></span>
                </h1>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={200} className="mb-8">
                <p className="text-xl md:text-2xl max-w-2xl">
                  Leading management consulting firm helping businesses achieve their full potential through strategic guidance and innovative solutions.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={400}>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-pulse-slow">
                  Get Started
                </button>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                opacity: 0.1,
              }}
            >
              <div className="w-32 h-32 bg-white rounded-full blur-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;