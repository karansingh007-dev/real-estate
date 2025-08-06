// 
import React from "react";
import Image1 from "../../assets/1.png";
import Image2 from "../../assets/2.png";
import Image3 from "../../assets/3.png";

// ✅ Residential property data with descriptions
const residentialData = [
  {
    title: "Parkside Enclave",
    specs: "3 bd | 2 ba | 1,500 sqft",
    price: "$500,000",
    image: Image1,
    description:
      "Located near the lush city park, Parkside Enclave offers families a blend of greenery and modern comfort with spacious layouts and serene surroundings.",
  },
  {
    title: "Sunset Villas",
    specs: "4 bd | 3 ba | 2,000 sqft",
    price: "$650,000",
    image: Image2,
    description:
      "Sunset Villas feature stunning west-facing balconies and premium finishes, perfect for those who love a luxurious evening view and elevated lifestyle.",
  },
  {
    title: "Orchard Heights",
    specs: "2 bd | 2 ba | 1,200 sqft",
    price: "$420,000",
    image: Image3,
    description:
      "Orchard Heights offers compact yet elegant living in the heart of the city, ideal for young couples and professionals looking for a stylish urban retreat.",
  },
  {
    title: "Orchard Heights",
    specs: "2 bd | 2 ba | 1,200 sqft",
    price: "$420,000",
    image: Image3,
    description:
      "Orchard Heights offers compact yet elegant living in the heart of the city, ideal for young couples and professionals looking for a stylish urban retreat.",
  },
];

const Residential = () => {
  return (
    <div className="md:m-40 mt-40">
      {/* Header */}
      <div className="flex leading-relaxed gap-5 flex-col items-center justify-center text-center">
        <h1 className="text-5xl ">RESIDENTIAL BUILDINGS</h1>
        <p className="max-w-3xl text-gray-600">
          Step into a world where comfort meets innovation. Our residential
          buildings are designed to redefine the way you live — blending
          contemporary architecture, smart layouts, and elegant finishes to
          create the perfect living environment.
        </p>
      </div>

      {/* Grid of Properties */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {residentialData.map((item, index) => (
            <div
              key={index}
              className="shadow-md shadow-[#040c16] hover:scale-105 transition-transform duration-500"
            >
              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="py-6 px-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.specs}</p>
                  <p className="text-lg font-bold text-gray-700 mt-2">
                    {item.price}
                  </p>
                  <p className="text-gray-600 text-sm mt-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Residential;
