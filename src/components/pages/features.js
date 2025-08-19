
// import React from "react";
// import { useNavigate } from "react-router-dom";

// import im1 from "../../assets/im1.jpg";
// import im2 from "../../assets/im2.jpg";
// import im3 from "../../assets/im4.jpg";

// const Features = () => {
//   const navigate = useNavigate();

//   const properties = [
//     {
//       img: im2,
//       title: "Commercial Properties",
//       link: "/commercial",
//     },
//     {
//       img: im1,
//       title: "Resedential Properties",
//       link: "/residentials",
//     },
//     {
//       img: im3,
//       title: "Featured Properties",
//       link: "/featured",
//     },
//   ];

//   return (
//     <div id="feature" className="w-full bg-gray-50 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
//         <h2
//           className="text-4xl font-medium font-cinzel  text-gray-800 mb-6"
//           data-aos="fade-up"
//           data-aos-delay="100"
//         >
//           Feature <span className="text-[#0a1732]">Properties</span>
//         </h2>

//         <div
//           className="grid grid-cols-1 w-[80%] md:w-full py-4  m-auto sm:grid-cols-2 md:grid-cols-3 gap-8"
//           data-aos="fade-up"
//           data-aos-delay="100"
//         >
//           {properties.map((property, index) => (
//             <div
//               key={index}
//               className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
//               onClick={() => navigate(property.link)}
//             >
//               {/* Background image */}
//               <img
//                 src={property.img}
//                 alt={property.title}
//                 className="w-full h-[400px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
//               />

//               {/* Hover overlay */}
//               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-6">
//                 <h3 className="text-2xl font-bold text-white">
//                   {property.title}
//                 </h3>

//                 <div className="flex items-center justify-between">
//                   <span className="text-white font-semibold tracking-widest text-sm">
//                     VIEW
//                   </span>
//                   <span className="text-yellow-400 text-2xl">➜</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;
import React from "react";
import { useNavigate } from "react-router-dom";

import im1 from "../../assets/im1.jpg";
import im2 from "../../assets/im2.jpg";
import im3 from "../../assets/im4.jpg";

const Features = () => {
  const navigate = useNavigate();

  const properties = [
    {
      img: im2,
      title: "Commercial Properties",
      link: "/commercial",
    },
    {
      img: im1,
      title: "Resedential Properties",
      link: "/residentials",
    },
    {
      img: im3,
      title: "Featured Properties",
      link: "/featured",
    },
  ];

  return (
    <div id="feature" className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-8">
        <h2 className="text-4xl  ml-12 md:m-auto  font-semibold  font-cinzel text-gray-800 mb-6">
          Feature <span className="text-[#0a1732]">Properties</span>
        </h2>

        <div className="grid grid-cols-1 w-[80%] md:w-full py-4 m-auto sm:grid-cols-2 md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => navigate(property.link)}
            >
              {/* Background image */}
              <img
                src={property.img}
                alt={property.title}
                className="w-full h-[400px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                
              />

              {/* Hover overlay - always visible on mobile */}
              <div
                className="absolute inset-0 bg-black/50 
                opacity-100 sm:opacity-0 
                sm:group-hover:opacity-100 
                transition-all duration-500 flex flex-col justify-between p-6"
              >
                <h3 className="text-2xl font-bold text-white">
                  {property.title}
                </h3>

                <div
                  className="flex items-center justify-between "
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <span className="text-white font-semibold tracking-widest text-sm">
                    VIEW
                  </span>
                  <span className="text-yellow-400 text-2xl">➜</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
