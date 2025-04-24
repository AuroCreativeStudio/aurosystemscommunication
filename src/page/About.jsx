/* eslint-disable no-unused-vars */
import React from 'react';
import Image1 from "../assets/image4.jpg";
import Image2 from "../assets/image3.jpg";
import Image3 from "../assets/image1.jpg";
import Image4 from "../assets/image2.jpg";
import { motion }from "framer-motion";
import { Pagination, Navigation } from "swiper/modules";
import { FaGlobe, FaAndroid, FaApple, FaTv, FaRobot, FaClock } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRight } from "lucide-react";

const offerings = [
  { icon: <FaGlobe />, label: "Website" },
  { icon: <FaAndroid />, label: "Android" },
  { icon: <FaApple />, label: "iOS" },
  { icon: <FaClock />, label: "Watch" },
  { icon: <FaTv />, label: "Tv" },
  { icon: <FaRobot />, label: "IoT" },
];

const carouselItems = [
  { title: "Platform Integration", category: "Technology", image: Image1 },
  { title: "Web Development", category: "Solution", image: Image2 },
  { title: "Network Security", category: "Security", image: Image3 },
  { title: "IT Management", category: "Solution", image: Image4 },
  { title: "Development", category: "Solution", image: Image2 },
];

function About() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full bg-center bg-cover h-80" style={{ backgroundImage: `url(${Image4})` }}>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="mt-2 text-lg">
              <span className="text-blue-400">Home</span> » About Us
            </p>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="container mx-auto px-6 py-16 lg:flex">
        <div className="lg:w-1/2 relative flex justify-center">
          <img src={Image1} alt="About Us" className="w-full max-w-md rounded-lg shadow-lg" />
          <img src={Image1} alt="Team Working" className="absolute bottom-8 right-[-30px] w-40 md:w-48 lg:w-56 border-4 border-white rounded-lg shadow-lg" />
        </div>

        <div className="mt-10 lg:w-1/2 lg:pl-16 lg:mt-0">
          <h3 className="text-blue-500 font-semibold uppercase">Who We Are</h3>
          <h2 className="mt-2 text-3xl font-bold">Ensuring Your Success Through Reliable IT Solutions</h2>
          <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

          <div className="mt-6 space-y-2">
            {['Technology Consultancy', 'Best Services', 'Maintenance Support', 'Requirements Gathering'].map((item, index) => (
              <p key={index} className="flex items-center">✅ <span className="ml-2">{item}</span></p>
            ))}
          </div>

          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">Explore More →</button>
          <p className="mt-4 text-2xl italic font-signature">Signature</p>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section>
      {/* Main Section */}
      <div className="relative bg-gradient-to-b py-16 mt-10 px-6 md:px-12 from-[#0A0F1D] to-[#05080F] text-white">
        <div className="max-w-6xl mx-auto text-center px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-44">
            <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left">
              Enhance And Pioneer Using Technology Trends
            </h2>
            <button className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-blue-600 text-white rounded-lg flex items-center space-x-2 transition">
              <span>Explore More</span>
            </button>
          </div>

          {/* Offerings Grid */}
          <div className="mt-12 mb-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      {offerings.map((item, index) => (
        <motion.div
          key={index}
          initial={{ y: 50, opacity: 0 }} // Start hidden & below
          whileInView={{ y: 0, opacity: 1 }} // Animate when in view
          viewport={{ once: true, amount: 0.2 }} // Only animate once when 20% is visible
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }} // Stagger effect
          className="flex flex-col items-center justify-center bg-[#111827] p-6 rounded-lg hover:bg-blue-500 transition text-center"
        >
          <div className="text-3xl text-blue-400 mb-2">{item.icon}</div>
          <span className="text-white font-semibold">{item.label}</span>
        </motion.div>
      ))}
    </div>
        </div>
      </div>

      {/* Scrolling Image Section */}
      <div className="relative -mt-10 max-w-5xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 py-8 px-4 text-center rounded-lg shadow-lg overflow-hidden">
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div className="flex gap-12 animate-marquee">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <img
                key={num}
                src={`/images/tech${num}.png`}
                alt={`Tech ${num}`}
                className="h-16 md:h-20 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Keyframes for Smooth Scrolling */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            80% { transform: translateX(-50%); } 
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: flex;
            min-width: 200%;
            animation: marquee 20s linear infinite;
            animation-delay: 1s;
          }
        `}
      </style>
    </section>

      {/* Swiper Carousel */}
      <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="mb-24 mt-24 px-4 md:px-8"
    >
      {carouselItems.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 bg-black/50 transition-opacity duration-300">
              <p className="text-xs sm:text-sm text-blue-400">{item.category}</p>
              <h3 className="text-sm sm:text-lg font-bold text-white">{item.title}</h3>
              <button className="mt-2 w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}

export default About;
