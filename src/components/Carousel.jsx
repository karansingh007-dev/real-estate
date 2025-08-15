// // import React, { useState, useEffect } from "react";
// // import car1 from "../assets/car1.jpg";
// // import car2 from "../assets/car2.jpg";
// // import car3 from "../assets/car3.jpg";

// // export default function Carousel() {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const slides = [
// //     {
// //       image: car1,
// //       title: "Rent your dream house now.",
// //       description:
// //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus minus nihil culpa corrupti consequuntur dignissimos libero doloribus odit dolorum laborum quibusdam animi alias doloremque, dolore blanditiis nulla! Atque eius ducimus doloribus distinctio aliquid, commodi porro, tempore ab, illo quidem libero?",
// //     },
// //     {
// //       image: car2,
// //       title: "Lorem ipsum dolor sit amet.",
// //       description:
// //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus minus nihil culpa corrupti consequuntur dignissimos libero doloribus odit dolorum laborum quibusdam animi alias doloremque, dolore blanditiis nulla! Atque eius ducimus doloribus distinctio aliquid, commodi porro, tempore ab, illo quidem libero?",
// //     },
// //     {
// //       image: car3,
// //       title: "Lorem ipsum dolor sit amet.",
// //       description:
// //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus minus nihil culpa corrupti consequuntur dignissimos libero doloribus odit dolorum laborum quibusdam animi alias doloremque, dolore blanditiis nulla! Atque eius ducimus doloribus distinctio aliquid, commodi porro, tempore ab, illo quidem libero?",
// //     },
// //   ];

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// //     }, 3000);
// //     return () => clearInterval(interval);
// //   }, [slides.length]);

// //   const goToSlide = (index) => {
// //     setCurrentSlide(index);
// //   };

// //   return (
// //     <div className="relative h-screen w-full overflow-hidden">
// //       {slides.map((slide, index) => (
// //         <div
// //           key={index}
// //           className={`absolute inset-0 transition-opacity duration-1000 ${
// //             index === currentSlide ? "opacity-100" : "opacity-0"
// //           }`}
// //         >
// //           <img
// //             src={slide.image}
// //             alt={`slide ${index + 1}`}
// //             className="h-full w-full object-cover"
// //           />
// //           <div className="absolute inset-0 grid h-full w-full place-items-start p-10 bg-black/50">
// //             <div className="w-3/4 text-left md:w-2/4">
// //               <h1 className="mt-12 text-2xl md:text-xl lg:text-3xl text-white">
// //                 <span className="text-cyan-500">
// //                   {slide.title.split(" ")[0]}
// //                 </span>{" "}
// //                 {slide.title.split(" ").slice(1).join(" ")}
// //               </h1>
// //               <p className="mb-12 opacity-80 hidden md:block text-white text-lg">
// //                 {slide.description}
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       ))}

// //       {/* Navigation dots */}
// //       <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
// //         {slides.map((_, i) => (
// //           <span
// //             key={i}
// //             className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
// //               i === currentSlide ? "bg-white w-8" : "bg-white/50 w-4"
// //             }`}
// //             onClick={() => goToSlide(i)}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// import React from "react";
// import car1 from "../assets/car1.jpg";
// import car2 from "../assets/car2.jpg";
// import car3 from "../assets/car3.jpg";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const Carousel = () => {
//   return (
//     <section className="relative bg-[#0a1732] px-6 sm:px-12 md:px-20 pt-0 pb-16">
//       <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 rounded-3xl">
        
//         {/* Left Content */}
//         <div className="text-white p-8 md:w-1/2 z-10">
//           <p className="text-sm uppercase tracking-widest text-orange-400 mb-4">
//             Creations in Water and Space
//           </p>
//           <h2 className=" text-2xl p-4 font-cinzel md:text-4xl font-semibold leading-snug">
//             Best Properties Available in Gurgaon
//             {/* <span className="font-bold text-blue-300">65 years.</span> */}
//           </h2>
//         </div>

//         {/* Right Carousel */}
//         <div className="md:w-1/2 relative -mt-16 sm:-mt-20 md:-mt-32 z-20 rounded-2xl overflow-hidden ">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             // navigation
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 3000 }}
//             loop={true}
//             // className=" sm:w-[60vw] md:w-[90vw] sm:w-[300px] h-[300px] sm:h-[100px] md:h-[500px]"
//             className="w-[75vw] sm:w-[800px] md:w-[90vw] h-[300px] sm:h-[100px] md:h-[500px]"
//           >
//             {[car1, car2, car3].map((img, i) => (
//               <SwiperSlide key={i}>
//                 <img
//                   src={img}
//                   alt={`Slide ${i + 1}`}
//                   className="w-full h-full object-cover rounded-2xl"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Carousel;
// import React from "react";
// import car1 from "../assets/car1.jpg";
// import car2 from "../assets/car2.jpg";
// import car3 from "../assets/car3.jpg";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const Carousel = () => {
//   return (
//     <section className="relative bg-[#0a1732] px-6 sm:px-12 md:px-20 pt-0 pb-16">
//       <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 rounded-3xl">
//         {/* ===== Mobile Carousel (Above Text) ===== */}
//         <div className="block md:hidden relative -mt-20 z-20 rounded-2xl overflow-hidden">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 3000 }}
//             loop={true}
//             className="w-full h-[250px]"
//           >
//             {[car1, car2, car3].map((img, i) => (
//               <SwiperSlide key={i}>
//                 <img
//                   src={img}
//                   alt={`Slide ${i + 1}`}
//                   className="w-full h-full object-cover rounded-2xl"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* ===== Left Content ===== */}
//         <div className="text-white p-8 md:w-1/2 z-10">
//           <p className="text-sm uppercase tracking-widest text-orange-400 mb-4">
//             Creations in Water and Space
//           </p>
//           <h2 className="text-2xl p-4 font-cinzel md:text-4xl font-semibold leading-snug">
//             Best Properties Available in Gurgaon
//           </h2>
//         </div>

//         {/* ===== Desktop Carousel (Original Layout) ===== */}
//         <div className="hidden md:block md:w-1/2 relative -mt-16 sm:-mt-20 md:-mt-32 z-20 rounded-2xl overflow-hidden">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 3000 }}
//             loop={true}
//             className="w-[75vw] sm:w-[800px] md:w-[90vw] h-[300px] sm:h-[100px] md:h-[500px]"
//           >
//             {[car1, car2, car3].map((img, i) => (
//               <SwiperSlide key={i}>
//                 <img
//                   src={img}
//                   alt={`Slide ${i + 1}`}
//                   className="w-full h-full object-cover rounded-2xl"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Carousel;
import React from "react";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  const slides = [car1, car2, car3];

  return (
    <section className="relative bg-[#0a1732] px-6 sm:px-12 md:px-20 pt-0 pb-16">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 rounded-3xl">
        {/* ===== Mobile Carousel (Above Text) ===== */}
        <div className="block md:hidden relative -mt-20 z-20 rounded-2xl overflow-hidden w-[90%] md:w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="w-full h-[250px] min-h-[250px]" // ensures Swiper renders height
          >
            {[car1, car2, car3].map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-[250px] object-cover rounded-2xl"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ===== Left Content ===== */}
        <div className="text-white p-8 md:w-1/2 z-10">
          <p className="text-sm uppercase tracking-widest text-orange-400 mb-4">
            Creations in Water and Space
          </p>
          <h2 className="text-2xl p-4 font-cinzel md:text-4xl font-semibold leading-snug">
            Best Properties Available in Gurgaon
          </h2>
        </div>

        {/* ===== Desktop Carousel (Original Layout) ===== */}
        <div className="hidden md:block md:w-1/2 relative -mt-16 sm:-mt-20 md:-mt-32 z-20 rounded-2xl overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="w-[75vw] sm:w-[800px] md:w-[90vw] h-[300px] sm:h-[400px] md:h-[500px]"
          >
            {slides.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
