import React from "react";
import Imagee from "../../assets/1.png";
import Imagee2 from "../../assets/2.png";
import Imagee3 from "../../assets/3.png";
import Imagee4 from "../../assets/4.png";
const commercial = () => {
  return (
    <div className=" md:m-40 mt-40 ">
      <div className="flex leading-relaxed gap-5 flex-col items-center justify-center">
        <h1 className="text-4xl ">COMMERCIAL BUILDINGS</h1>
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
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">
        {/* Property 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={Imagee2}
            alt="Greenwood Estate"
            data-aos="fade-right"
            className="w-full md:w-1/2 rounded-lg object-cover"
          />
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Greenwood Estate
            </h2>
            <p className="text-sm text-gray-500 mb-1">
              742 Maple Drive, Austin, TX
            </p>
            <p className="text-lg font-semibold text-blue-700 mb-4">$659,000</p>
            <p className="text-gray-600 text-lg mb-4">
              Nestled in the heart of Austin’s green belt, this 3-bedroom,
              2.5-bath residence offers a serene blend of nature and modern
              living...
            </p>
          </div>
        </div>

        {/* Property 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <img
            src={Imagee2}
            alt="Lakeview Manor"
            data-aos="fade-left"
            className="w-full md:w-1/2 rounded-lg object-cover"
          />
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Lakeview Manor
            </h2>
            <p className="text-sm text-gray-500 mb-1">
              15 Waterside Lane, Chicago, IL
            </p>
            <p className="text-lg font-semibold text-blue-700 mb-4">
              $1,250,000
            </p>
            <p className="text-gray-600 text-lg mb-4">
              A stunning 4-bedroom waterfront property with panoramic views of
              Lake Michigan...
            </p>
          </div>
        </div>

        {/* Property 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={Imagee2}
            alt="Willow Creek Residence"
            data-aos="fade-right"
            className="w-full md:w-1/2 rounded-lg object-cover"
          />
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Willow Creek Residence
            </h2>
            <p className="text-sm text-gray-500 mb-1">
              890 Forest Ridge Rd, Asheville, NC
            </p>
            <p className="text-lg font-semibold text-blue-700 mb-4">$849,500</p>
            <p className="text-gray-600 text-lg mb-4">
              Set on a wooded hillside, this craftsman-style home combines
              rustic charm with upscale finishes...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default commercial;
