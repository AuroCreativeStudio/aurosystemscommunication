import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import aurosystems from "../assets/Auro-Systems-Logo-01-2048x470 (2) (1).png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#0d0d1d] text-white">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 text-sm bg-[#12122b]">
        <div className="flex items-center space-x-6">
          <a href="mailto:info@example.com" className="hover:text-blue-400">
            info@example.com
          </a>
          <a href="tel:+2086660112" className="hover:text-blue-400">
            +208-6666-0112
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
          <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-blue-400"><FaYoutube /></a>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="relative flex items-center justify-between px-6 py-4 bg-white text-black">
        {/* Logo Section */}
        <div className="absolute left-0 top-0 h-full flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 clip-path-logo">
          <Link to="/">
            <img src={aurosystems} alt="Gratech Logo" className="h-16 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex space-x-6 font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about-us" },
            { name: "Services", path: "/service" },
            { name: "Blog", path: "/blogs" },
            { name: "Contact", path: "/contact-us" }
          ].map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `transition hover:text-blue-400 ${isActive ? "text-blue-600 font-semibold" : ""}`
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4 ml-auto">
          <FiSearch className="text-xl cursor-pointer hover:text-blue-500" />
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-80 text-white rounded-md">
            Get A Quote →
          </button>

          {/* Mobile Menu Button */}
          <button
            className="text-2xl md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IoMdClose /> : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-75 z-50 transform ${
          isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="w-64 bg-[#12122b] h-full p-6">
          <button
            className="absolute top-4 right-4 text-2xl text-white focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <IoMdClose />
          </button>

          <nav className="mt-8 space-y-4">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about-us" },
              { name: "Services", path: "/service" },
              { name: "Blog", path: "/blogs" },
              { name: "Contact", path: "/contact-us" }
            ].map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className="block py-2 text-lg text-white hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Custom Clip-Path Style */}
      <style>
        {`
          .clip-path-logo {
            width: 300px;
            height: 100%;
            clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
          }

          @media (max-width: 768px) {
            .clip-path-logo {
              width: 200px;
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;
