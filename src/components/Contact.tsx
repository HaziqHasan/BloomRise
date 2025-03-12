import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">

            Get in touch with our experts to discuss how we can help your business grow

          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection animation="fadeInLeft" className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </AnimatedSection>

          <div className="space-y-8">
            {[
              {
                icon: <MapPin className="h-6 w-6 text-blue-600 mt-1" />,
                title: 'Our Location',
                content: '123 Business Street, New Delhi, India'
              },
              {
                icon: <Phone className="h-6 w-6 text-blue-600 mt-1" />,
                title: 'Phone',
                content: '+91 11 1234 5678'
              },
              {
                icon: <Mail className="h-6 w-6 text-blue-600 mt-1" />,
                title: 'Email',
                content: 'info@abcconsultants.in'
              }
            ].map((item, index) => (
              <AnimatedSection 
                key={index} 
                animation="fadeInRight"
                delay={index * 200}
                className="flex items-start space-x-4 transform hover:-translate-x-2 transition-transform duration-300"
              >
                {item.icon}
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;