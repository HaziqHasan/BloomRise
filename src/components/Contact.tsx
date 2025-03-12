import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Function to send WhatsApp message
  const sendWhatsAppMessage = () => {
    const { name, email, message } = formData;
    const phoneNumber = "+916260527614"; // Replace with your WhatsApp number

    // Format message with user details
    const whatsappMessage = `Hello, I am ${name}.\n\nEmail: ${email}\n\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappLink, "_blank");
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our experts to discuss how we can help your business grow.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection animation="fadeInLeft" className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                  required
                ></textarea>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center mb-4 border-l-4 border-green-500">
  <p className="text-lg font-medium text-gray-700">
    📩 <span className="text-green-600 font-semibold">Type your message</span> and click the 
    <span className="text-green-600 font-semibold"> "Send via WhatsApp"</span> button below to chat with us instantly! 🚀
  </p>
</div>
              <div className="flex space-x-4">
            
                <button
                  type="button"
                  onClick={sendWhatsAppMessage}
                  className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transform hover:scale-105 transition-all duration-300"
                >
                  Chat on WhatsApp
                </button>
              </div>
            </form>
          </AnimatedSection>

          {/* Contact Details */}
          <div className="space-y-8">
            {[
              {
                icon: <MapPin className="h-6 w-6 text-blue-600 mt-1" />,
                title: "Our Location",
                content: "123 Business Street, New Delhi, India",
              },
              {
                icon: <Phone className="h-6 w-6 text-blue-600 mt-1" />,
                title: "Phone",
                content: "+91 11 1234 5678",
              },
              {
                icon: <Mail className="h-6 w-6 text-blue-600 mt-1" />,
                title: "Email",
                content: "info@abcconsultants.in",
              },
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
