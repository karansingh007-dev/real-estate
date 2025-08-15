import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 w-full h-[40px] flex justify-between items-center px-4 transition-colors duration-300
      ${
        isScrolled
          ? "bg-black text-white shadow-md"
          : isHomePage
          ? "bg-transparent text-white"
          : "bg-black text-white shadow-md"
      }`}
    >
      {/* Logo */}
      <div className="text-2xl font-semibold cursor-pointer inline-flex items-center">
        <Link to="/" smooth={true} duration={500}>
          Estate
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden" onClick={handleMenuClick}>
        {showMenu ? (
          <svg
            className="h-6 w-6 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M14.95 5.879l-1.414-1.414L10 8.586 6.464 5.05 5.05 6.464 8.586 10l-3.536 3.536 1.414 1.414L10 11.414l3.536 3.536 1.414-1.414L11.414 10l3.536-3.536z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/communities">Communities</Link>
        </li>
        <li>
          <Link to="/projects">Latest Projects</Link>
        </li>
      </ul>

      {/* Contact Button */}
      <div className="hidden md:flex">
        <button className="px-4 py-2  text-white font-semibold rounded-md hover:bg-blue-900 mx-2">
          <Link to="/contact">Contact Us</Link>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`${
          showMenu ? "flex" : "hidden"
        } md:hidden flex-col bg-blue-800 text-white w-full absolute top-16 left-0 z-10`}
      >
        <Link
          to="/"
          className="p-4 hover:bg-gray-700"
          onClick={handleMenuClick}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="p-4 hover:bg-gray-700"
          onClick={handleMenuClick}
        >
          About Us
        </Link>
        <Link
          to="/communities"
          className="p-4 hover:bg-gray-700"
          onClick={handleMenuClick}
        >
          Communities
        </Link>
        <Link
          to="/projects"
          className="p-4 hover:bg-gray-700"
          onClick={handleMenuClick}
        >
          Latest Projects
        </Link>
        <Link
          to="/contact"
          className="p-4 hover:bg-gray-700"
          onClick={handleMenuClick}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
