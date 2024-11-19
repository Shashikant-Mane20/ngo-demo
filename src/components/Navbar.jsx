// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [navbarBackground, setNavbarBackground] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Track scroll position and set background after scrolling down for desktop
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 300) {
//         setNavbarBackground(true);
//       } else {
//         setNavbarBackground(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-10 px-4 py-3 flex justify-between items-center transition-all duration-300 ${
//         // On desktop, transparent initially, with background on scroll
//         navbarBackground ? 'bg-gray-800 text-white shadow-lg' : 'bg-transparent text-white'
//       } ${
//         // On mobile, always solid black background
//         'md:bg-transparent md:text-white'
//       }`}
//     >
//       {/* NGO Name / Logo */}
//       <div className="text-2xl font-bold">NGO Name</div>

//       {/* Desktop Links */}
//       <ul className="hidden md:flex space-x-6">
//         <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
//         <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
//         <li><Link to="/causes" className="hover:text-gray-300">Causes</Link></li>
//         <li><Link to="/donate" className="hover:text-gray-300">Donate</Link></li>
//         <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
//         <li><Link to="/gallery" className="hover:text-gray-300">Gallery</Link></li>
//         <li><Link to="/events" className="hover:text-gray-300">Events</Link></li>
//         <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
//       </ul>

//       {/* Mobile Menu Toggle */}
//       <div className="md:hidden flex items-center">
//         <button onClick={toggleMenu} className="text-2xl">
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 z-10">
//           <li><Link to="/" onClick={toggleMenu} className="hover:text-gray-300">Home</Link></li>
//           <li><Link to="/about" onClick={toggleMenu} className="hover:text-gray-300">About</Link></li>
//           <li><Link to="/causes" onClick={toggleMenu} className="hover:text-gray-300">Causes</Link></li>
//           <li><Link to="/donate" onClick={toggleMenu} className="hover:text-gray-300">Donate</Link></li>
//           <li><Link to="/blog" onClick={toggleMenu} className="hover:text-gray-300">Blog</Link></li>
//           <li><Link to="/gallery" onClick={toggleMenu} className="hover:text-gray-300">Gallery</Link></li>
//           <li><Link to="/events" onClick={toggleMenu} className="hover:text-gray-300">Events</Link></li>
//           <li><Link to="/contact" onClick={toggleMenu} className="hover:text-gray-300">Contact</Link></li>
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Track scroll position and change navbar background on scroll for desktop
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBackground(true); // Change to white navbar after scroll
      } else {
        setNavbarBackground(false); // Transparent navbar when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 px-4 py-3 flex justify-between items-center transition-all duration-300 ${
        // On desktop: Transparent navbar when at the top, white after scroll
        navbarBackground ? 'bg-white text-black shadow-lg' : 'bg-transparent text-white'
      }`}
    >
      {/* NGO Name / Logo */}
      <div className="text-2xl font-bold">NGO Name</div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
        <li><Link to="/causes" className="hover:text-gray-300">Causes</Link></li>
        <li><Link to="/donate" className="hover:text-gray-300">Donate</Link></li>
        <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
        <li><Link to="/gallery" className="hover:text-gray-300">Gallery</Link></li>
        <li><Link to="/events" className="hover:text-gray-300">Events</Link></li>
        <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 z-10">
          <li><Link to="/" onClick={toggleMenu} className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu} className="hover:text-gray-300">About</Link></li>
          <li><Link to="/causes" onClick={toggleMenu} className="hover:text-gray-300">Causes</Link></li>
          <li><Link to="/donate" onClick={toggleMenu} className="hover:text-gray-300">Donate</Link></li>
          <li><Link to="/blog" onClick={toggleMenu} className="hover:text-gray-300">Blog</Link></li>
          <li><Link to="/gallery" onClick={toggleMenu} className="hover:text-gray-300">Gallery</Link></li>
          <li><Link to="/events" onClick={toggleMenu} className="hover:text-gray-300">Events</Link></li>
          <li><Link to="/contact" onClick={toggleMenu} className="hover:text-gray-300">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

