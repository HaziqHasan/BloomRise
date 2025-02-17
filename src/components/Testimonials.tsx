// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const testimonials = [
//   {
//     name: "Samuel Joseph Jebaraj",
//     position: "Deputy Managing Director, NaBFID",
//     feedback:
//       "We are happy to recommend ABC Consultants for their exceptional business partnering with NaBFID in Capacity Building and Leadership appointments.",
//   },
//   {
//     name: "Saba Adil",
//     position: "CHRO, Edelweiss Life",
//     feedback:
//       "ABC has supported us immensely in our capability building initiatives through focused searches based on deep need understanding and fit assessments.",
//   },
//   {
//     name: "Swati Sharma",
//     position: "Co-Founder, Excitel & Extreme Labs",
//     feedback:
//       "ABC Consultants is a highly recommended recruitment firm, renowned for their organized, well-defined processes and professional approach.",
//   },
//   {
//     name: "John Doe",
//     position: "CEO, XYZ Pvt Ltd",
//     feedback:
//       "Their unwavering professionalism and expertise helped streamline recruitment, resulting in high-quality candidates.",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//           Testimonials
//         </h2>
//         <p className="text-xl text-gray-600 mb-10">
//           Our constant endeavor is to delight our clients through service
//           excellence
//         </p>

//         {/* Swiper Slider */}
//         <Swiper
//           modules={[Navigation, Pagination]}
//           navigation
//           pagination={{ clickable: true }}
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="pb-10"
//         >
//           {testimonials.map((testimonial, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200 h-[250px] flex flex-col justify-between">
//                 <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
//                 <div className="mt-4">
//                   <h3 className="text-lg font-semibold text-blue-600">
//                     {testimonial.name}
//                   </h3>
//                   <p className="text-gray-500 text-sm">{testimonial.position}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icons

const testimonials = [
  {
    name: "Samuel Joseph Jebaraj",
    position: "Deputy Managing Director, NaBFID",
    feedback:
      "We are happy to recommend ABC Consultants for their exceptional business partnering with NaBFID in Capacity Building and Leadership appointments.",
  },
  {
    name: "Saba Adil",
    position: "CHRO, Edelweiss Life",
    feedback:
      "ABC has supported us immensely in our capability building initiatives through focused searches based on deep need understanding and fit assessments.",
  },
  {
    name: "Swati Sharma",
    position: "Co-Founder, Excitel & Extreme Labs",
    feedback:
      "ABC Consultants is a highly recommended recruitment firm, renowned for their organized, well-defined processes and professional approach.",
  },
  {
    name: "John Doe",
    position: "CEO, XYZ Pvt Ltd",
    feedback:
      "Their unwavering professionalism and expertise helped streamline recruitment, resulting in high-quality candidates.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Testimonials
        </h2>
        <p className="text-xl text-gray-600 mb-10">
          Our constant endeavor is to delight our clients through service
          excellence
        </p>

        <div className="relative">
          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200 h-[250px] flex flex-col justify-between">
                  <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-blue-600">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons (Outside Cards) */}
          <button className="prev-btn absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition">
            <ChevronLeft size={24} />
          </button>
          <button className="next-btn absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

