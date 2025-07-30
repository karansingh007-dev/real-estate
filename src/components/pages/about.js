import React from "react";
import Image from "../../assets/4.png";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="flex flex-col pt-12 md:flex-row  md:mb-0 w-full h-auto bg-gray-200"
    >
      <div className=" md:w-full md:w-1/2 p-0 md:p-8 flex  items-center justify-center ">
        <img
          src={Image}
          alt="About Us"
          className="w-[60%] md:w-full h-auto  object-cover rounded-md md:rounded-lg shadow-lg"
        />
      </div>

      <div className="w-full  p-4 md:p-8 bg-gray-200 flex items-center justify-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl  text-center justify-center md:text-6xl  text-black-800 mb-4">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Welcome to Real Estate Hub, your trusted destination for finding the
            perfect property in Delhi NCR, Gurgaon, Noida, and surrounding
            regions. We specialize in residential apartments, builder floors,
            commercial spaces, and luxury villas, offering verified listings and
            personalized assistance at every step. Whether you're looking to buy
            your dream home, invest in real estate, or rent a premium property,
            we make the entire process smooth, transparent, and hassle-free.
            <br />
            Why Choose Us?
            <br />
            ✔️ Local Expertise in South Delhi, Dwarka, Rohini, Gurugram, and
            Noida
            <br />
            ✔️ Verified Listings with detailed information and real-time
            availability
            <br />
            ✔️ Personalized Support for site visits, paperwork, loans, and
            registration
            <br />
            ✔️ Wide Inventory covering both affordable and premium segments At
            Real Estate Hub, we don’t just help you find a property — we help
            you find the right place to live, grow, and invest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
