
// export default Features;
// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import im1 from "../../assets/im1.jpg";
// import im2 from "../../assets/im2.jpg";
// import im3 from "../../assets/im4.jpg";

// const Features = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       easing: "ease-in-out",
//     });
//   }, []);

//   return (
//     <div id="feature" className="w-full bg-gray-50 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Heading */}
//         <h2 className="text-4xl font-bold text-gray-800 mb-6" data-aos="fade-up">
//           Feature <span className="text-blue-800">Properties</span>
//         </h2>

//         <p
//           className="text-lg text-gray-700 mb-10"
//           data-aos="fade-up"
//           data-aos-delay="200"
//         >
//           Here are some of our featured properties:
//         </p>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
//           {/* Card Template */}
//           {[ 
//             { img: im1, title: "Residential Properties", details: "3 bd | 2 ba | 1,500 sqft", price: "", link: "/residential" },
//             { img: im2, title: "Commercial Properties", details: "4 bd | 3 ba | 2,000 sqft", price: "", link: "/commercial" },
//             { img: im3, title: "Best Featured Properties", details: "2 bd | 1 ba | 1,000 sqft", price: "", link: "/featured" }
//           ].map((property, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg flex flex-col overflow-hidden transition-transform duration-300 hover:shadow-2xl"
//               data-aos="fade-up"
//               data-aos-delay={index * 200}
//             >
//               {/* Image */}
//               <div className="overflow-hidden">
//                 <img
//                   src={property.img}
//                   alt={property.title}
//                   className="w-full h-64 object-cover transform transition-transform duration-700 ease-in-out hover:scale-110"
//                 />
//               </div>

//               {/* Content */}
//               <div className="flex flex-col flex-1 p-6">
//                 <h3 className="text-2xl font-semibold text-gray-900">{property.title}</h3>
//                 <p className="text-sm text-gray-500 mt-1">{property.details}</p>
//                 <p className="text-lg font-bold text-gray-700 mt-4">{property.price}</p>
                
//                 <button
//                   onClick={() => navigate(property.link)}
//                   className="mt-auto px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition-colors"
//                 >
//                   View Details
//                 </button>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-cinzel  text-gray-800 mb-6">
          Feature <span className="text-[#0a1732]">Properties</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-6">
                <h3 className="text-2xl font-bold text-white">
                  {property.title}
                </h3>

                <div className="flex items-center justify-between">
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
