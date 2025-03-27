import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b0e1e] text-white font-sans">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold">Gratech</h2>
          <p className="text-gray-400 text-sm mt-3">
            Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a
            lacinia curabitur lacinia mollis.
          </p>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#1d2336] rounded-full text-white hover:bg-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#1d2336] rounded-full text-white hover:bg-blue-500">
              <FaTwitter />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#1d2336] rounded-full text-white hover:bg-blue-500">
              <FaLinkedinIn />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#1d2336] rounded-full text-white hover:bg-blue-500">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* IT Solution Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">IT Solution</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">➤ IT Management</li>
            <li className="hover:text-blue-400 cursor-pointer">➤ SEO Optimization</li>
            <li className="hover:text-blue-400 cursor-pointer">➤ Web Development</li>
            <li className="hover:text-blue-400 cursor-pointer">➤ Cyber Security</li>
            <li className="hover:text-blue-400 cursor-pointer">➤ Data Security</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">➤ About Gratech</li>
            <li className="hover:text-blue-400 cursor-pointer">➤ Our Services</li>
            <li className="hover:text-blue-400 cursor-pointer">➤ Pricing Plan</li>
            <li className="hover:text-blue-400 cursor-pointer">➤ Our Projects</li>
            <li className="hover:text-blue-400 cursor-pointer">➤ Our Team</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400 text-sm">4517 Washington Ave, Manchester, Kentucky 39495</p>
          <p className="text-gray-400 text-sm mt-2">
            <strong>Opening Hours:</strong> Mon - Sat: 10:00 AM - 4:00 PM
          </p>
          <p className="text-gray-400 text-sm mt-2">
            <strong>Phone Call:</strong> 208-6666-0112, 308-5555-0113
          </p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-gray-400 text-sm">
          <p>© All Copyright 2024 by Gratech</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400">Terms & Conditions</a>
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
