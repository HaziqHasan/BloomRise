import React from 'react';
import { Users, ClipboardList, CheckCircle, DollarSign, Headset } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const service = [
  {
    icon: <Users className="h-12 w-12" />, 
    title: 'Permanent and Contract Staffing',
    description: 'We provide tailored staffing solutions for permanent and contract positions across industries.'
  },
  {
    icon: <ClipboardList className="h-12 w-12" />, 
    title: 'Customized Recruitment Strategies',
    description: 'Our recruitment strategies are designed to meet your business’s unique hiring needs.'
  },
  {
    icon: <CheckCircle className="h-12 w-12" />, 
    title: 'Thorough Candidate Screening',
    description: 'We conduct comprehensive screening and selection processes to find the best fit for your company.'
  },
  {
    icon: <DollarSign className="h-12 w-12" />, 
    title: 'Salary Negotiations & Placement Logistics',
    description: 'We assist in salary negotiations and handle placement logistics for a seamless hiring experience.'
  },
  {
    icon: <Headset className="h-12 w-12" />, 
    title: 'Ongoing Support & Feedback',
    description: 'Our team provides continuous support and feedback to ensure successful placements.'
  }
];

const Service = () => {
  return (
    <section id="service" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive recruitment and placement solutions tailored to your needs.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.map((item, index) => (
            <AnimatedSection
              key={index}
              animation="scaleIn"
              delay={index * 100}
              className="group"
            >
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-blue-600 mb-4 flex justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;