// import React from 'react';
// import { motion } from 'framer-motion';

// // Array of 5-6 different image URLs
// const bannerImages = [
//   "https://plus.unsplash.com/premium_photo-1682092585257-58d1c813d9b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://plus.unsplash.com/premium_photo-1682092618317-9b50d60e6e0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1498712681408-fdcfb0eca86e?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1631506317240-eac1596c87a6?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1489851221632-0976a724c9fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// ];

// const Banner = ({ text }) => {
//   const randomImage = bannerImages[Math.floor(Math.random() * bannerImages.length)];

//   return (
//     <div
//       className="relative h-80 md:h-[500px] lg:h-[600px] bg-cover bg-center flex items-center justify-center"
//       style={{
//         backgroundImage: `url(${randomImage})`, // Dynamically set the background image
//       }}
//     >
//       <motion.div
//         className="bg-black bg-opacity-50 p-4 md:p-8 rounded-md"
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center">
//           {text}
//         </h1>
//       </motion.div>
//     </div>
//   );
// };

// export default Banner;

import React from 'react';
import { motion } from 'framer-motion';

const bannerImages = [
  "https://plus.unsplash.com/premium_photo-1682092585257-58d1c813d9b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1682092618317-9b50d60e6e0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1498712681408-fdcfb0eca86e?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1631506317240-eac1596c87a6?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1489851221632-0976a724c9fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const Banner = ({ text }) => {
  const randomImage = bannerImages[Math.floor(Math.random() * bannerImages.length)];

  return (
    <div
      className="relative h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${randomImage})`,
      }}
    >
      <motion.div
        className="bg-black bg-opacity-50 p-4 rounded-md"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
          {text}
        </h1>
      </motion.div>
    </div>
  );
};

export default Banner;



