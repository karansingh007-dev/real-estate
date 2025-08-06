// components/Footer.jsx

import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-8 border-b pb-8">
          {/* Logo and Social */}
          <div className="flex items-center gap-6">
            <h2 className="text-2xl font-bold">GURGAON HOMES</h2>
            <div className="flex gap-4 text-xl text-gray-600">
              <FaFacebookF />
              <FaXTwitter />
              <FaYoutube />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-6 md:mt-0">
            <form className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="px-4 py-2 w-64 border border-gray-300 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gray-400 text-white px-6 py-2 hover:bg-gray-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {/* About */}
          <div>
            <h4 className="font-semibold mb-3">About Gurgaon Homes</h4>
            <ul className="space-y-2">
              <li>Who We Are</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>FAQ</li>
              <li>Investor Relations</li>
              <li>Real Estate News</li>
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h4 className="font-semibold mb-3">Communities</h4>
            <ul className="space-y-2">
              <li>DLF Phase 1–5</li>
              <li>MG Road</li>
              <li>Sohna Road</li>
              <li>Golf Course Road</li>
              <li>New Gurgaon</li>
              <li>South City 1 & 2</li>
              <li>Sector 49, 51, 56</li>
            </ul>
          </div>

          {/* Latest Launches */}
          <div>
            <h4 className="font-semibold mb-3">Latest Launches</h4>
            <ul className="space-y-2">
              <li>DLF Privana West</li>
              <li>M3M Altitude</li>
              <li>Godrej Aristocrat</li>
              <li>Smartworld The Edition</li>
              <li>EMAAR Urban Oasis</li>
              <li>Elan Presidential</li>
              <li>Whiteland Urban Resort</li>
            </ul>
          </div>

          {/* Other / International / Placeholder */}
          <div>
            <h4 className="font-semibold mb-3">Others</h4>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Blog</li>
              <li>Site Map</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
