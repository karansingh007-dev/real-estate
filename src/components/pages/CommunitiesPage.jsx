// import React from "react";
// import CommunityCard from "../CommunityCard";

// const communities = [
//   {
//     title: "DLF Camellias",
//     tagline: "Luxury Golf Residences in Gurgaon",
//     details: "4, 5 & 6 BHK Apartments | Golf Course Road",
//     image:
//       "https://cdn.pixabay.com/photo/2020/06/25/10/21/architecture-5339245_1280.jpg",
//   },
//   {
//     title: "M3M Golf Estate",
//     tagline: "Ultra-Premium Living with Golf Theme",
//     details: "3.5, 4.5 BHK Apartments | Sector 65, Gurgaon",
//     image:
//       "https://media.istockphoto.com/id/1413832483/photo/cityscape-of-gurugram-city-haryana-india.jpg?s=612x612&w=0&k=20&c=yTnvTQCSID0vfxRR2AQSa5W6VFGv9pQbkGIvPldzaz4=",
//   },
//   {
//     title: "ATS Knightsbridge",
//     tagline: "Luxury High-Rise Towers in Noida",
//     details: "4 & 6 BHK Sky Villas | Sector 124, Noida",
//     image:
//       "https://media.istockphoto.com/id/485210016/photo/gurgaon-famous-dlf-office-complex.jpg?s=612x612&w=0&k=20&c=gKA7iy_VY5MOMvo775QD2By7BvV6Pj2BaeOIkQpoQjs=",
//   },
//   {
//     title: "Emaar DigiHomes",
//     tagline: "Smart Luxury Residences",
//     details: "2 & 3 BHK Apartments | Sector 62, Gurgaon",
//     image:
//       "https://media.istockphoto.com/id/1167047679/photo/dlf-cyber-city.jpg?s=612x612&w=0&k=20&c=scGBwun5iMGOjJ-3_OF2HQASWiPV-ERVOzgDxjnBZPM=",
//   },
//   {
//     title: "Godrej Meridien",
//     tagline: "Urban Living at Its Best",
//     details: "2, 3, 4 BHK Apartments | Sector 106, Gurgaon",
//     image:
//       "https://media.istockphoto.com/id/1351805373/photo/architecture-of-dlf-cyber-city-also-known-as-cyberhub.jpg?s=612x612&w=0&k=20&c=Z-UdbTqcEhpcK9JsIprFQ-mYHnzQmnWSwikh-QO0Ick=",
//   },
//   {
//     title: "Central Park Resorts",
//     tagline: "Resort-Style Living in Gurgaon",
//     details: "Studio to 4 BHK | Sector 48, Gurgaon",
//     image:
//       "https://media.istockphoto.com/id/472096643/photo/modern-india-office-buildings-in-gurgaon-near-new-delhi.jpg?s=612x612&w=0&k=20&c=1aFEoB0XuNxV2cP2Kr4sxe_AlzgB2lWiG-s9l3vXIKw=",
//   },
//   {
//     title: "Trump Towers",
//     tagline: "Luxury Redefined in Delhi NCR",
//     details: "3 & 4 BHK Super Luxury | Sector 65, Gurgaon",
//     image:
//       "https://media.istockphoto.com/id/1853951677/photo/dlf-cyber-city-in-gurgaon.jpg?s=612x612&w=0&k=20&c=csgvjSgUpavStFHNtH9Davhus6WIZnq23XdyzUqX8x0=",
//   },
//   {
//     title: "SOBHA City",
//     tagline: "Luxury Apartments Near Dwarka Expressway",
//     details: "2 & 3 BHK | Sector 108, Gurgaon",
//     image:
//       "https://media.istockphoto.com/id/1330495343/photo/urban-skyscape.jpg?s=612x612&w=0&k=20&c=qZ5IQ72UBTiiCwXWvNa-Pb-7h0xgtc5QsV-GbGYobGo=",
//   },
// ];

// const CommunitiesPage = () => {
//   return (
//     <section className="px-14 mt-14 py-12 bg-gray-50">
//       <h1 className="text-4xl md:w-[80%] md:mx-auto mb-4">
//         DELHI–GURGAON COMMUNITIES
//       </h1>
//       <p className=" md:w-[100%] md:pl-32 mb-10 text-gray-700">
//         Explore premium residential communities in Delhi NCR & Gurgaon. From
//         luxury golf-side residences to resort-style living, our communities
//         offer unmatched design, security, and comfort. Whether you're looking
//         for a smart apartment, sky villa, or a gated complex — find your dream
//         home below.
//       </p>
//       <div className="grid md:grid-cols-2 md:w-[80%] md:mx-auto gap-10">
//         {communities.map((item, index) => (
//           <CommunityCard key={index} {...item} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CommunitiesPage;
import React, { useState } from "react";
import CommunityCard from "../CommunityCard";

const communities = [
  // ... your same array here
  //   
  {
    title: "DLF Camellias",
    tagline: "Luxury Golf Residences in Gurgaon",
    details: "4, 5 & 6 BHK Apartments | Golf Course Road",
    image:
      "https://cdn.pixabay.com/photo/2020/06/25/10/21/architecture-5339245_1280.jpg",
  },
  {
    title: "M3M Golf Estate",
    tagline: "Ultra-Premium Living with Golf Theme",
    details: "3.5, 4.5 BHK Apartments | Sector 65, Gurgaon",
    image:
      "https://media.istockphoto.com/id/1413832483/photo/cityscape-of-gurugram-city-haryana-india.jpg?s=612x612&w=0&k=20&c=yTnvTQCSID0vfxRR2AQSa5W6VFGv9pQbkGIvPldzaz4=",
  },
  {
    title: "ATS Knightsbridge",
    tagline: "Luxury High-Rise Towers in Noida",
    details: "4 & 6 BHK Sky Villas | Sector 124, Noida",
    image:
      "https://media.istockphoto.com/id/485210016/photo/gurgaon-famous-dlf-office-complex.jpg?s=612x612&w=0&k=20&c=gKA7iy_VY5MOMvo775QD2By7BvV6Pj2BaeOIkQpoQjs=",
  },
  {
    title: "Emaar DigiHomes",
    tagline: "Smart Luxury Residences",
    details: "2 & 3 BHK Apartments | Sector 62, Gurgaon",
    image:
      "https://media.istockphoto.com/id/1167047679/photo/dlf-cyber-city.jpg?s=612x612&w=0&k=20&c=scGBwun5iMGOjJ-3_OF2HQASWiPV-ERVOzgDxjnBZPM=",
  },
  {
    title: "Godrej Meridien",
    tagline: "Urban Living at Its Best",
    details: "2, 3, 4 BHK Apartments | Sector 106, Gurgaon",
    image:
      "https://media.istockphoto.com/id/1351805373/photo/architecture-of-dlf-cyber-city-also-known-as-cyberhub.jpg?s=612x612&w=0&k=20&c=Z-UdbTqcEhpcK9JsIprFQ-mYHnzQmnWSwikh-QO0Ick=",
  },
  {
    title: "Central Park Resorts",
    tagline: "Resort-Style Living in Gurgaon",
    details: "Studio to 4 BHK | Sector 48, Gurgaon",
    image:
      "https://media.istockphoto.com/id/472096643/photo/modern-india-office-buildings-in-gurgaon-near-new-delhi.jpg?s=612x612&w=0&k=20&c=1aFEoB0XuNxV2cP2Kr4sxe_AlzgB2lWiG-s9l3vXIKw=",
  },
  {
    title: "Trump Towers",
    tagline: "Luxury Redefined in Delhi NCR",
    details: "3 & 4 BHK Super Luxury | Sector 65, Gurgaon",
    image:
      "https://media.istockphoto.com/id/1853951677/photo/dlf-cyber-city-in-gurgaon.jpg?s=612x612&w=0&k=20&c=csgvjSgUpavStFHNtH9Davhus6WIZnq23XdyzUqX8x0=",
  },
  {
    title: "SOBHA City",
    tagline: "Luxury Apartments Near Dwarka Expressway",
    details: "2 & 3 BHK | Sector 108, Gurgaon",
    image:
      "https://media.istockphoto.com/id/1330495343/photo/urban-skyscape.jpg?s=612x612&w=0&k=20&c=qZ5IQ72UBTiiCwXWvNa-Pb-7h0xgtc5QsV-GbGYobGo=",
  }
];

const CommunitiesPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="px-14 mt-14 py-12 bg-gray-50">
      <h1 className="text-4xl md:w-[80%] md:mx-auto mb-4">
        DELHI–GURGAON COMMUNITIES
      </h1>
      <p className=" md:w-[100%] md:pl-32 mb-10 text-gray-700">
        Explore premium residential communities in Delhi NCR & Gurgaon. From
        luxury golf-side residences to resort-style living, our communities
        offer unmatched design, security, and comfort. Whether you're looking
        for a smart apartment, sky villa, or a gated complex — find your dream
        home below.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 md:w-[80%] md:mx-auto gap-10">
        {communities.map((item, index) => (
          <CommunityCard key={index} {...item} onClick={() => setSelected(item)} />
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-2xl relative shadow-xl">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-80 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold mt-4">{selected.title}</h2>
            <p className="text-gray-600 mt-2">{selected.tagline}</p>
            <p className="text-gray-500 mt-1">{selected.details}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CommunitiesPage;
