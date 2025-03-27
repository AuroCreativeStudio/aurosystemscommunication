import React from 'react';
import Image1 from "../assets/image4.jpg";
import Image2 from "../assets/image3.jpg";
import Image3 from "../assets/image1.jpg";
import Image4 from "../assets/image2.jpg";
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
      <section className='mb-28'>
        <div className="relative bg-gradient-to-b py-16 from-[#0A0F1D] to-[#05080F] text-white text-center">
          <h2 className="text-3xl font-bold">Enhance And Pioneer Using Technology Trends</h2>
          <button className="mt-4 px-6 py-3 bg-blue-600 rounded-lg">Explore More</button>
          <div className="grid grid-cols-2 gap-4 mt-12 sm:grid-cols-3 md:grid-cols-6">
            {offerings.map((item, index) => (
              <div key={index} className="p-6 rounded-lg bg-[#111827] hover:bg-blue-500">
                <div className="text-3xl text-blue-400">{item.icon}</div>
                <span className="font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mb-24"
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative group">
              <img src={item.image} alt={item.title} className="object-cover w-full rounded-lg h-72" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-black/50">
                <p className="text-sm text-blue-400">{item.category}</p>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <button className="mt-2 w-10 h-10 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100">
                  <ArrowRight />
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
