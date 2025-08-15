// import React from "react";

// import Imagee from "../../assets/service1.png";
// import Imageee from "../../assets/service2.png";
// import Imageeee from "../../assets/service3.png";
// const OurServices = () => {
//   return (
//     <div
//       id="service"
//       className="w-full min-h-screen p-2 flex items-center bg-gradient-to-b from-white to-gray-200"
//     >
//       <div className="max-w-7xl mx-16 py-12  sm:px-2 lg:py-16 lg:px-6">
//         <h2 className="text-6xl  text-gray-800 mb-6">
//           Our <span className="text-gray-800">Services</span>
//         </h2>
//         <p className="text-lg text-gray-700 mb-8">
//           We offer many services for our clients, Here are some of our services:
//         </p>

//         <div className="container mx-auto md:px-4">
//           <div className="flex flex-wrap  md:mx-4">
//             <div className="w-full md:w-1/3 md:px-4 mb-8">
//               <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//                 <img
//                   className="w-full h-48 object-cover object-center"
//                   src={Imagee}
//                   alt="Service 1"
//                 />
//                 <div className="p-4">
//                   <h2 className="text-lg font-bold text-gray-800 mb-2">
//                     Home Buying
//                   </h2>
//                   <p className="text-gray-700 leading-relaxed mb-4">
//                     We help you find the perfect home that fits your needs and
//                     budget. Our team of experts will guide you through the
//                     entire home buying process from start to finish in an easy
//                     without any problem.
//                   </p>
//                   <button className="mt-6 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 hover:scale-110 transition duration-300">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="w-full md:w-1/3 md:px-4 mb-8">
//               <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//                 <img
//                   className="w-full h-48 object-cover object-center"
//                   src={Imageee}
//                   alt="Service 2"
//                 />
//                 <div className="p-4">
//                   <h2 className="text-lg font-bold text-gray-800 mb-2">
//                     Home Selling
//                   </h2>
//                   <p className="text-gray-700 leading-relaxed mb-4">
//                     We help you sell your home quickly and for the best price.
//                     Our team of experts will provide you with a customized
//                     marketing strategy to attract potential buyers and maximize
//                     your home's value.
//                   </p>
//                   <button className="mt-6 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 hover:scale-110 transition duration-300">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="w-full md:w-1/3 md:px-4 mb-8">
//               <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//                 <img
//                   className="w-full h-48 object-cover object-center"
//                   src={Imageeee}
//                   alt="Service 3"
//                 />
//                 <div className="p-4">
//                   <h2 className="text-lg font-bold text-gray-800 mb-2">
//                     Property Management
//                   </h2>
//                   <p className="text-gray-700 leading-relaxed mb-4">
//                     We provide comprehensive property management services to
//                     help you manage your rental properties. Our team of experts
//                     will handle everything from tenant screening to maintenance
//                     and repairs.
//                   </p>
//                   <button className="mt-6 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 hover:scale-110 transition duration-300 ">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurServices;
import React from "react";
import { useNavigate } from "react-router-dom";

import Imagee from "../../assets/service1.png";
import Imageee from "../../assets/service2.png";
import Imageeee from "../../assets/service3.png";

const OurServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      img: Imagee,
      title: "Home Buying",
      description:
        "We help you find the perfect home that fits your needs and budget. Our team of experts will guide you through the entire home buying process from start to finish in an easy without any problem.",
      link: "/home-buying",
    },
    {
      img: Imageee,
      title: "Home Selling",
      description:
        "We help you sell your home quickly and for the best price. Our team of experts will provide you with a customized marketing strategy to attract potential buyers and maximize your home's value.",
      link: "/home-selling",
    },
    {
      img: Imageeee,
      title: "Property Management",
      description:
        "We provide comprehensive property management services to help you manage your rental properties. Our team of experts will handle everything from tenant screening to maintenance and repairs.",
      link: "/property-management",
    },
  ];

  return (
    <div id="service" className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl font-cinzel text-gray-800 mb-6">
          Our <span className="text-[#0a1732]">Services</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => navigate(service.link)}
            >
              {/* Background image */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-[400px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-200 mt-2">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold tracking-widest text-sm">
                    LEARN MORE
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

export default OurServices;
