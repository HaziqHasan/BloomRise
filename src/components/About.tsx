import React from 'react';
import { CheckCircle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fadeInLeft">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">

              Bloom Rise
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Bloomerise Placements is a leading recruitment agency specializing in matching top talent with exceptional career opportunities. Our mission is to provide personalized, professional, and efficient placement services that exceed our clients' and candidates' expectations.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
            <div className="space-y-4">
              {[ 
                'Personalized attention to clients and candidates',
                'In-depth industry knowledge and expertise',
                'Proven track record of successful placements',
                'Commitment to quality, integrity, and excellence'
              ].map((item, index) => (
                <AnimatedSection 
                  key={index} 
                  animation="fadeInLeft" 
                  delay={index * 200} 
                  className="flex items-center"
                >
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeInRight" className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team meeting"
              className="rounded-lg shadow-lg object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};


export default About;
