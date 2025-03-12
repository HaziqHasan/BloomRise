
import React from 'react'; 
import { Car, Briefcase, HeartPulse, Monitor, Factory } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const industries = [
  {

    icon: <Car className="h-12 w-12" />, 
    title: 'Automotive',
    description: 'Connecting top talent with the evolving automotive industry'
  },
  {
    icon: <Briefcase className="h-12 w-12" />, 
    title: 'Finance',
    description: 'Expert recruitment solutions for the finance sector'
  },
  {
    icon: <HeartPulse className="h-12 w-12" />, 
    title: 'Healthcare',
    description: 'Providing skilled professionals for the healthcare industry'
  },
  {
    icon: <Monitor className="h-12 w-12" />, 
    title: 'Technology',
    description: 'Helping tech companies find top-tier IT professionals'
  },
  {
    icon: <Factory className="h-12 w-12" />, 
    title: 'Manufacturing',
    description: 'Recruitment services for the manufacturing sector'
  }
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We specialize in recruiting for various industries, including:
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <AnimatedSection
              key={index}
              animation="scaleIn"
              delay={index * 100}
              className="group"
            >
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-blue-600 mb-4 flex justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{industry.title}</h3>
                <p className="text-gray-600 text-center">{industry.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Industries;
