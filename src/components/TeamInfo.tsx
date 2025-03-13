// import React from 'react';
// import { Briefcase, Users, LineChart, Building, Globe, Shield } from 'lucide-react';
// import { AnimatedSection } from './AnimatedSection';
// import image from '../assests/806fa1910904c9d2c9ed110bb46a27c1.png';

// const services = [
//   {
//     icon:<img src={image} alt="Business Consulting" className="h-8 w-8" /> ,
//     title: 'HR Solutions',
//     description: 'Comprehensive human resource management and recruitment services'
//   },
//   {
//     icon:<img src={image} alt="Business Consulting" className="h-8 w-8" /> ,
//     title: 'Business Consulting',
//     description: 'Strategic guidance to optimize your business operations and growth'
//   },
//   {
//     icon: <img src={image} alt="Business Consulting" className="h-8 w-8" />,
//     title: 'Market Analysis',
//     description: 'In-depth market research and competitive analysis'
//   },
//   {
//     icon: <img src={image} alt="Business Consulting" className="h-8 w-8" />,
//     title: 'Corporate Strategy',
//     description: 'Long-term strategic planning and implementation'
//   },
  
// ];

// const Services = () => {
//   return (
//     <section id="services" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <AnimatedSection animation="fadeInUp" className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Comprehensive consulting solutions tailored to your business needs
//           </p>
//         </AnimatedSection>

//         {/* HR Solutions Center Card */}
//         <div className="flex justify-center mb-8">
//           <AnimatedSection animation="scaleIn" className="w-full max-w-md">
//             <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 text-center">
//               <div className="text-blue-600 mb-4">
//                 {services[0].icon}
//               </div>
//               <h3 className="text-xl font-semibold mb-3">{services[1].title}</h3>
//               <p className="text-gray-600">{services[1].description}</p>
//             </div>
//           </AnimatedSection>
//         </div>

//         {/* Other Cards Side by Side */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
//           {services
//             .filter((_, index) => index !== 1) // HR card ko hata diya
//             .map((service, index) => (
//               <AnimatedSection
//                 key={index}
//                 animation="scaleIn"
//                 delay={index * 100}
//                 className="group"
//               >
//                 <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
//                   <div className="text-blue-600 mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
//                     {service.icon}
//                   </div>
//                   <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
//                   <p className="text-gray-600">{service.description}</p>
//                 </div>
//               </AnimatedSection>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;









// Sample Data




import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import images1 from '../assests/zaidbhai.jpg'
import images2 from '../assests/gorav.jpg'
import images3 from "../assests/anmol.jpg"
// import images1 from '../assests/mens.avif';
// import images2 from '../assests/men2.avif';


// Sample Data
// const hrCard = {
//   image: images1,
//   title: 'HR SOLUTIONS',
//   description: 'Comprehensive human resource management and recruitment services.',
// };

const teamMembers = [
  { image: images1, title: 'Zaid Khan', description: 'HR' },
  { image: images2, title: 'Gourav ', description: 'Senior Team Lead' },
  { image: images3, title: 'Anmol', description: 'Team Leader' },
  
];

const Services = () => {
  return (
    <section id="services" className=" py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Join Our Team</h2>

        {/* HR Card */}
        {/* <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2">
          <img src={hrCard.image} alt={hrCard.title} className="w-full h-64 object-cover object-top" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-blue-600">{hrCard.title}</h3>
            <p className="text-gray-600 mt-2">{hrCard.description}</p>
            <button className="mt-4 bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div> */}

        {/* Team Slider */}
        <div className="relative mt-16">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={false}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
            }}
            // autoplay={{ delay: 3000, disableOnInteraction: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            className="my-10"
          >
            <div className="flex gap-10 overflow-x-auto justify-center p-4 ">
  {teamMembers.map((member, index) => (
     <SwiperSlide key={index}>

    <div
      key={index}
      className="max-w-lg bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 flex-shrink-0"
      style={{ width: "300px" }} // Adjust width as needed
      >
      <img src={member.image} alt={member.title} className="w-full h-60 object-cover object-top" />
      <div className="p-6">
        <h3 className="text-lg font-bold text-red-600">{member.title}</h3>
        <p className="text-gray-600 mt-2">{member.description}</p>
        <button className="mt-4 bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-red-700 transition duration-300">
          Join Us
        </button>
      </div>
    </div>
      </SwiperSlide>
  ))}
</div>

            {/* {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 ">
                  <img src={member.image} alt={member.title} className="w-full h-60 object-cover object-top" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-red-600">{member.title}</h3>
                    <p className="text-gray-600 mt-2">{member.description}</p>
                    <button className="mt-4 bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-red-700 transition duration-300">
                      Join Us
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))} */}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-14 swiper-button-prev cursor-pointer bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-900 transition">
            ❮
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-14 swiper-button-next cursor-pointer bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-900 transition">
            ❯
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
