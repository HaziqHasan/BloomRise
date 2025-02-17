import React from 'react';
import { Building2, Plane, ShoppingBag, Factory, Ban as Bank, Heart } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const industries = [
  {
    icon: <Building2 className="h-12 w-12" />,
    title: 'Real Estate',
    description: 'Strategic solutions for property development and management'
  },
  {
    icon: <Plane className="h-12 w-12" />,
    title: 'Aviation',
    description: 'Operational excellence in aviation and aerospace'
  },
  {
    icon: <ShoppingBag className="h-12 w-12" />,
    title: 'Retail',
    description: 'Digital transformation and retail optimization'
  },
  {
    icon: <Factory className="h-12 w-12" />,
    title: 'Manufacturing',
    description: 'Efficiency improvements and process optimization'
  },
  {
    icon: <Bank className="h-12 w-12" />,
    title: 'Banking',
    description: 'Financial services and digital banking solutions'
  },
  {
    icon: <Heart className="h-12 w-12" />,
    title: 'Healthcare',
    description: 'Healthcare management and technology integration'
  }
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">City We Serve</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expertise across diverse sectors to deliver industry-specific solutions
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