// import React from "react";
// import video1 from "../assets/video1.mp4";
// const HeroSection = () => {
//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src={video1} // replace with your video path
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40" />

//       {/* Text Content */}
//       <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20 text-white">
//         <p className="text-sm uppercase tracking-widest text-orange-400">Live Well</p>
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-xl">
//           Custom Outdoor Living Spaces
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React from "react";
import video1 from "../assets/video1.mp4";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[100vh] sm:h-[120vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video1}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-12 md:px-20 text-white">
        <p className="text-sm uppercase tracking-widest text-orange-400">
          Live Well
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-xl">
          Custom Outdoor Living Spaces
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
