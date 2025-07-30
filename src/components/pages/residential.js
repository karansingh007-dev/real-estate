import React from "react";
import Imagee from "../../assets/1.png";
const residential = () => {
  return (
    <div className="md:m-40 mt-40 ">
      <div className="flex leading-relaxed gap-5 flex-col items-center justify-center">
        <h1 className="text-4xl ">RESIDENTIAL BUILDINGS</h1>
        <p>
          Step into a world where comfort meets innovation. Our residential
          buildings are designed to redefine the way you live — blending
          contemporary architecture, smart layouts, and elegant finishes to
          create the perfect living environment. Enjoy spacious interiors,
          natural lighting, and thoughtfully planned amenities that cater to
          every lifestyle. Whether you're a young professional, a growing
          family, or someone seeking peace and privacy, our residences offer the
          ideal space to call home.
        </p>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={Imagee}
                alt="Property"
                className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64"
              />
              <div className="py-6 px-4">
                <h3 className="text-xl font-medium text-gray-900">
                  Residential Properties
                </h3>
                <p className="text-sm text-gray-500">
                  3 bd | 2 ba | 1,500 sqft
                </p>
                <p className="text-lg font-bold text-gray-700 mt-4">$500,000</p>
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={Imagee}
                alt="Property"
                className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64"
              />
              <div className="py-6 px-4">
                <h3 className="text-xl font-medium text-gray-900">
                  Residential Properties
                </h3>
                <p className="text-sm text-gray-500">
                  3 bd | 2 ba | 1,500 sqft
                </p>
                <p className="text-lg font-bold text-gray-700 mt-4">$500,000</p>
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={Imagee}
                alt="Property"
                className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64"
              />
              <div className="py-6 px-4">
                <h3 className="text-xl font-medium text-gray-900">
                  Residential Properties
                </h3>
                <p className="text-sm text-gray-500">
                  3 bd | 2 ba | 1,500 sqft
                </p>
                <p className="text-lg font-bold text-gray-700 mt-4">$500,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default residential;
