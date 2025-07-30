import React from "react";
import Imagee from "../../assets/1.png";
import Imageee from "../../assets/2.png";
import Imageeee from "../../assets/3.png";
import { useNavigate } from "react-router-dom";
import im1 from "../../assets/im1.jpg";
import im2 from "../../assets/im2.jpg";
import im3 from "../../assets/im4.jpg";
const Features = () => {
  const navigate = useNavigate();
  return (
    <div
      id="feature"
      className="w-full min-h-screen p-2 flex items-center justify-between "
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Feature <span className="text-blue-800">Properties</span>
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Here are some of our featured properties:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={im1}
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
                <button
                  onClick={() => navigate("/residential")}
                  className="mt-6 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={im2}
                alt="Property"
                className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64"
              />
              <div className="py-6 px-4">
                <h3 className="text-xl font-medium  text-gray-900">
                  Commercial Properties
                </h3>
                <p className="text-sm text-gray-500">
                  4 bd | 3 ba | 2,000 sqft
                </p>
                <p className="text-lg font-bold text-gray-700 mt-4">$750,000</p>
                <button
                  onClick={() => navigate("/commercial")}
                  className="mt-6 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={im3}
                alt="Property"
                className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64"
              />
              <div className="py-6 px-4">
                <h3 className="text-xl font-bold font-medium text-gray-900">
                  Best Featured Properties
                </h3>
                <p className="text-sm text-gray-500">
                  2 bd | 1 ba | 1,000 sqft
                </p>
                <p className="text-lg font-bold text-gray-700 mt-4">$300,000</p>
                <button className="mt-6 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
