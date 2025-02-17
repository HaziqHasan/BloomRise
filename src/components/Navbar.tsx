// import React, { useState } from 'react';
// import { Menu, X, Building2 } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-lg fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Building2 className="h-8 w-8 text-blue-600" />
//             <span className="ml-2 text-xl font-bold text-gray-800">Bloom Rise</span>
//           </div>
          
//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
//             <a href="#about" className="text-gray-600 hover:text-blue-600">About Us</a>
//             <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
//             <a href="#industries" className="text-gray-600 hover:text-blue-600">Industries</a>
//             <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
//           </div>

//           <div className="md:hidden flex items-center">
//             <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Home</a>
//             <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">About Us</a>
//             <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Services</a>
//             <a href="#industries" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Industries</a>
//             <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contact</a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-md w-full fixed z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center text-white font-bold text-xl">
          <Building2 className="h-8 w-8 text-blue-600" />
          <span className="ml-2">Bloom Rise</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-gray-300">Home</a>
          <a href="#about" className="text-white hover:text-gray-300">About Us</a>
          <a href="#services" className="text-white hover:text-gray-300">Services</a>
          <a href="#industries" className="text-white hover:text-gray-300">Industries</a>
          {/* <a href="#contact" className="text-white hover:text-gray-300">Contact</a> */}
        </div>
        
        {/* Contact Button */}
        <div className="hidden md:flex">
          <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 pb-3 pt-2 px-4 space-y-2 text-center">
          <a href="#home" className="block text-white py-2 hover:text-gray-300">Home</a>
          <a href="#about" className="block text-white py-2 hover:text-gray-300">About Us</a>
          <a href="#services" className="block text-white py-2 hover:text-gray-300">Services</a>
          <a href="#industries" className="block text-white py-2 hover:text-gray-300">Industries</a>
          <a href="#contact" className="block bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Contact</a>
        </div>
      )}

      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        {/* <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,40 C150,100 350,0 600,50 C850,100 1050,20 1200,50 L1200,120 L0,120 Z" fill="#111827"></path>
        </svg> */}
      </div>
    </nav>
  );
};

export default Navbar;
