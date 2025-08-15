// import React from "react";
// import video from "../../assets/video.mp4";
// import houseIcon from "../../assets/house.png";
// import locationIcon from "../../assets/location.png";
// import moneyIcon from "../../assets/money.png";

// const Demo = () => {
//   return (
//     <div
//       id="demo"
//       className="flex flex-col md:flex-row w-full h-screen bg-blue-800"
//     >
//       <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold mb-4">
//             Real <span className="text-blue-800">Estate</span> Video
//           </h1>
//           <div className="aspect-w-16 aspect-h-9">
//             <video className="w-full h-full" controls>
//               <source src={video} type="video/mp4" />
//             </video>
//           </div>
//         </div>
//       </div>
//       <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
//         <div className="text-white">
//           <h2 className="text-1xl font-bold mb-4">My Real Estate</h2>
//           <h2 className="text-3xl font-bold mb-4">
//             Why Choose Our Properties?
//           </h2>
//           <ul className="list-disc list-inside mb-8">
//             <li className="flex items-center space-x-4">
//               <img src={houseIcon} alt="House Icon" className="w-8 h-8" />
//               <span>Spacious and comfortable living spaces</span>
//             </li>
//             <li className="flex items-center space-x-4 my-10">
//               <img src={locationIcon} alt="Location Icon" className="w-8 h-8" />
//               <span>Located in prime areas with excellent infrastructure</span>
//             </li>
//             <li className="flex items-center space-x-4 my-10">
//               <img src={moneyIcon} alt="Money Icon" className="w-8 h-8" />
//               <span>Affordable prices and flexible payment plans</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Demo;
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import CountUp from "react-countup";

// const WhyChooseUs = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2
//           className="text-4xl font-bold text-gray-800 text-center mb-12"
//           data-aos="fade-up"
//         >
//           Why <span className="text-blue-800">Choose Us</span>
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
//           {/* Card 1 */}
//           <div
//             className="bg-white p-8 rounded-lg shadow-md"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             <h3 className="text-5xl font-extrabold text-blue-800 mb-2">
//               <CountUp end={500} duration={3} enableScrollSpy scrollSpyOnce />
//               +
//             </h3>
//             <p className="text-lg text-gray-600">Properties Sold</p>
//           </div>

//           {/* Card 2 */}
//           <div
//             className="bg-white p-8 rounded-lg shadow-md"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <h3 className="text-5xl font-extrabold text-blue-800 mb-2">
//               <CountUp end={300} duration={3} enableScrollSpy scrollSpyOnce />
//               +
//             </h3>
//             <p className="text-lg text-gray-600">Happy Clients</p>
//           </div>

//           {/* Card 3 */}
//           <div
//             className="bg-white p-8 rounded-lg shadow-md"
//             data-aos="fade-up"
//             data-aos-delay="300"
//           >
//             <h3 className="text-5xl font-extrabold text-blue-800 mb-2">
//               <CountUp end={20} duration={3} enableScrollSpy scrollSpyOnce />
//               +
//             </h3>
//             <p className="text-lg text-gray-600">Years of Experience</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
import React, { useEffect } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const Demo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2
          className="text-5xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          WHY <span className="text-blue-800">CHOOSE US</span>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-2"></div>
        </h2>

        {/* Top 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div
            className="bg-blue-100 p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            <div className="text-5xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold mb-2">Easy Consultation</h3>
            <p className="text-lg text-gray-700">
              We help the buyers from starting to the end of home purchase by understanding their needs and offering them the ideal investment opportunities.
            </p>
          </div>

          <div
            className="bg-blue-100 p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-2xl font-bold mb-2">Financial Assistance</h3>
            <p className="text-lg text-gray-700">
              We provide loan advisory, home loan facilitation, evaluation of mortgage options, legal assistance on long and short term taxation.
            </p>
          </div>

          <div
            className="bg-blue-100 p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-5xl mb-4">🎧</div>
            <h3 className="text-2xl font-bold mb-2">After Sale Assistance</h3>
            <p className="text-lg text-gray-700">
              We believe in providing the best services to the customers so we don’t just stop serving them at the end of their purchase but also provide after-sale services.
            </p>
          </div>
        </div>

        {/* Stats with CountUp */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
          <div data-aos="fade-up">
            <h3 className="text-5xl font-extrabold text-blue-800">
              <CountUp end={9} duration={3} enableScrollSpy scrollSpyOnce />+
            </h3>
            <p className="mt-2 text-lg font-semibold">Years of Industry Experience</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-5xl font-extrabold text-blue-800">
              <CountUp end={100} duration={3} enableScrollSpy scrollSpyOnce />+
            </h3>
            <p className="mt-2 text-lg font-semibold">Awards Recognizing Excellence</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-5xl font-extrabold text-blue-800">
              <CountUp end={2000} duration={3} enableScrollSpy scrollSpyOnce />+
            </h3>
            <p className="mt-2 text-lg font-semibold">Satisfied Clients</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-5xl font-extrabold text-blue-800">
              <CountUp end={40} duration={3} enableScrollSpy scrollSpyOnce />+
            </h3>
            <p className="mt-2 text-lg font-semibold">Collaborating Developers</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-5xl font-extrabold text-blue-800">
              <CountUp end={100} duration={3} enableScrollSpy scrollSpyOnce />+
            </h3>
            <p className="mt-2 text-lg font-semibold">Ongoing & Completed Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
