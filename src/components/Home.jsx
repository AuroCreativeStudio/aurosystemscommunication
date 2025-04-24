/* eslint-disable no-unused-vars */
import React, { useRef,useState, useEffect  } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion }from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import logo1 from '../assets/home/logo1.png';
import logo2 from '../assets/home/logo2.png';
import logo3 from '../assets/home/logo3.png';
import toggle from '../assets/home/toggle.png';
import satisfied from '../assets/home/satisfiedclient.png';
import finish from '../assets/home/finished project.png';
import skilled from '../assets/home/skilled experts.png';
import media from "../assets/home/mediapost.png";
import { FaGlobe, FaAndroid, FaApple, FaTv, FaRobot, FaClock } from "react-icons/fa";
import { Outlet } from "react-router";

const statsData = [
  { img: satisfied, number: "6,561+", label: "Satisfied Clients" },
  { img: finish, number: "600+", label: "Finished Projects" },
  { img: skilled, number: "250+", label: "Skilled Experts" },
  { img: media, number: "590+", label: "Media Posts" },
];

const carouselItems = [
  {
    title: "Platform Integration",
    category: "Technology",
    image: image1,
  },
  {
    title: "Web Development",
    category: "Solution",
    image: image2,
  },
  {
    title: "Network Security",
    category: "Security",
    image: image3,
  },
  {
    title: "IT Management",
    category: "Solution",
    image: image4,
  },
  {
    title: "Development",
    category: "Solution",
    image: image2,
  },
];

const offerings = [
  { icon: <FaGlobe />, label: "Website" },
  { icon: <FaAndroid />, label: "Android" },
  { icon: <FaApple />, label: "iOS" },
  { icon: <FaClock />, label: "Watch" },
  { icon: <FaTv />, label: "Tv" },
  { icon: <FaRobot />, label: "IoT" },
];

const steps = [
  {
    id: 1,
    title: "Define Requirements",
    description:
      "In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur.",
    image: image1, // Replace with actual image path
  },
  {
    id: 2,
    title: "Design & Prototyping",
    description:
      "In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur.",
    image: image2,
  },
  {
    id: 3,
    title: "Final Solution",
    description:
      "In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur.",
    image: image3,
  },
];

  const blogs = [
    {
      id: 1,
      image: image4,
      date: "10",
      month: "Dec",
      title: "Necessity May Give us Best Virtual Court",
      author: "Admin",
      comments: "0 Comments",
      link: "#",
    },
    {
      id: 2,
      image: image2,
      date: "12",
      month: "Dec",
      title: "Tackling the Changes of Retail Industry",
      author: "Admin",
      comments: "0 Comments",
      link: "#",
    },
    {
      id: 3,
      image: image3,
      date: "15",
      month: "Dec",
      title: "Easy and Most Powerful Server and Platform",
      author: "Admin",
      comments: "0 Comments",
      link: "#",
    },
  ];

  const testimonials = [
    {
      name: "Suborna Tarchera",
      role: "Web Developer",
      image: "/src/assets/user1.jpg",
      stars: 4,
      review:
        "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo.",
    },
    {
      name: "John Doe",
      role: "Software Engineer",
      image: "/src/assets/user2.jpg",
      stars: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et quam id urna sodales interdum sed vel elit. Nam viverra auctor.",
    },
    {
      name: "Alice Smith",
      role: "UI/UX Designer",
      image: "/src/assets/user3.jpg",
      stars: 3,
      review:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    },
  ];
  const images = [
    "image1.jpg", // Replace with your actual image paths
    "image2.jpg",
    "image3.jpg",
  ];
  
  const Home = () => { 
    const [currentIndex, setCurrentIndex] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true });
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Auto-slide every 5 seconds
  
      return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
      setCurrentIndex(index);
    };
  
  const sliderRef = useRef(null);

  const nextSlide = () => { 
    if (sliderRef.current) {
      sliderRef.current.appendChild(sliderRef.current.firstElementChild);
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.prepend(sliderRef.current.lastElementChild);
    }
  };
  return (
    <>
     <div className="w-full min-h-screen bg-gray-100">
<section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-[#0d0d1d] opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl text-white">
        <h1 className="text-5xl font-bold leading-tight">
          For Your <span className="text-blue-400">Success</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Consectetur adipiscing elit aenean scelerisque at augue vitae consequat
          quisque eget congue velit in cursus leo sed sodales et eget turpis.
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-6">
          <a
            href="#"
            className="bg-gradient-to-r from-blue-700 to-blue-950 px-6 py-3 text-lg font-semibold hover:bg-blue-600 rounded-lg transition-all flex items-center justify-center space-x-2"
          >
            <span>Explore More</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
    <section className="py-16 mt-10 bg-white">
  {/* Subheading */}
  <div className="flex items-center gap-3 justify-center sm:justify-start sm:ml-10 md:ml-40">
    <img src={toggle} className="h-4 w-8" alt="toggle" />
    <p className="text-blue-500 uppercase font-semibold tracking-widest">What we Offer</p>
  </div>

  {/* Heading and Button Wrapper */}
  <div className="max-w-6xl mx-auto text-center px-4 sm:px-6">
    <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center sm:text-left">
        Excellent IT Services
      </h2>

      {/* View All Services Button */}
      <a
        href="#"
        className="mt-4 sm:mt-0 px-5 py-3 text-sm sm:text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 text-white rounded-lg inline-flex items-center space-x-2 transition"
      >
        <span>View All Services</span>
        <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </div>

  {/* Services Grid */}
  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
    {/* IT Management */}
    <div className="hover:bg-gradient-to-r from-blue-500 to-indigo-600 hover:text-white shadow-2xl rounded-lg p-6 text-black text-center transition">
      <div className="flex justify-center items-center mb-4">
        <div className="bg-white p-2 rounded-full">
          <img src={logo1} alt="IT Management" className="h-12" />
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-semibold">IT Management</h3>
      <p className="mt-2 text-sm sm:text-base">
        Pellentesque nec the condimentum nec lorem nulla augue est ultricies.
      </p>
    </div>

    {/* Cyber Security */}
    <div className="hover:bg-gradient-to-r from-blue-500 to-indigo-600 hover:text-white shadow-2xl rounded-lg p-6 text-black text-center transition">
      <div className="flex justify-center items-center mb-4">
        <div className="bg-white p-2 rounded-full">
          <img src={logo2} alt="Cyber Security" className="h-12" />
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-semibold">Cyber Security</h3>
      <p className="mt-2 text-sm sm:text-base">
        Pellentesque nec the condimentum nec lorem nulla augue est ultricies.
      </p>
    </div>

    {/* Web Development */}
    <div className="hover:bg-gradient-to-r from-blue-500 to-indigo-600 hover:text-white shadow-2xl rounded-lg p-6 text-black text-center transition">
      <div className="flex justify-center items-center mb-4">
        <div className="bg-white p-2 rounded-full">
          <img src={logo3} alt="Web Development" className="h-12" />
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-semibold">Web Development</h3>
      <p className="mt-2 text-sm sm:text-base">
        Pellentesque nec the condimentum nec lorem nulla augue est ultricies.
      </p>
    </div>
  </div>
</section>

    <section className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section - Image with Play Button */}
        <div className="relative overflow-hidden group">
        <img
    src={image4}
    alt="Team working"
    className="rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-110"
  />
          {/* Small Overlay Image with Play Button */}
          {/* <div className="absolute bottom-0 left-12 bg-white p-2 rounded-lg shadow-lg">
            <div className="relative">
              <img
                src='C:\Users\Admin\Desktop\React Project\React Project\Auro-Systems\src\assets\image1.jpg'
                alt="Video Thumbnail"
                className="rounded-lg"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  ▶
                </div>
              </button>
            </div>
          </div> */}
        </div>

        {/* Right Section - Text Content */}
        <div>
          <p className="text-blue-500 uppercase inline-flex gap-3 font-semibold tracking-widest">
            <img src={toggle} className="h-4 w-8"></img>
            About Gratech
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            We Strive To Offer Intelligent Business Solutions
          </h2>
          <p className="text-gray-600 mt-4">
            Aonsectetur adipiscing elit aenean scelerisque augue vitae
            consequat aisque eget congue velit in cursus sodales.
          </p>

          {/* Service Highlights */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-900">Best Services</h4>
              <p className="text-sm text-gray-600">
                Scelerisque augue the consequat sodales
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-900">24/7 Call Support</h4>
              <p className="text-sm text-gray-600">
                Scelerisque augue the consequat sodales
              </p>
            </div>
          </div>

          {/* Call to Action & Profile */}
          <div className="mt-8 flex items-center justify-between">
            <a
              href="#"
              className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-blue-600 text-white rounded-lg transition"
            >
              Explore More →
            </a>
            {/* <div className="flex items-center space-x-3">
              <img
                src="https://via.placeholder.com/50"
                alt="Founder"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-bold text-gray-900">Ronald Richards</p>
                <p className="text-sm text-gray-600">Co, Founder</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gradient-to-r mb-24 from-blue-500 to-indigo-600 text-white max-w-7xl py-12 px-6 m-24">
      <div ref={ref}  className="max-w-6xl mx-auto flex flex-wrap justify-between items-center space-y-6 md:space-y-0">
        {statsData.map((stat, index) => (
          <div key={index} className="flex items-center space-x-4">
             <img src={stat.img} alt={stat.label} className="w-16 h-16 mb-2" />
            <div className="text-4xl">{stat.icon}</div>
            <div>
            {inView && (
              <CountUp start={0} end={stat.number} duration={3} className="text-3xl font-bold" />
            )}
              <p className="text-lg">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>


    {/* Subheading */}
<div className="flex items-center gap-2 justify-center sm:justify-start sm:ml-10 md:ml-40">
  <img src={toggle} alt="toggle icon" className="h-4 w-8" />
  <p className="text-blue-500 uppercase font-semibold tracking-widest">What we Offer</p>
</div>

{/* Heading and Button */}
<div className="flex flex-col sm:flex-row items-center justify-between w-full px-4 sm:px-6 mt-4 mb-10 max-w-6xl mx-auto">
  {/* Center - Heading */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center sm:text-left">
    We Deliver Best Solutions
  </h2>

  {/* Right Side - Button */}
  <a
    href="#"
    className="mt-4 sm:mt-0 px-5 py-3 text-sm sm:text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg flex items-center gap-2 transition hover:opacity-90"
  >
    <span>View All Services</span>
    <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
    </svg>
  </a>
</div>

<Swiper
  modules={[Pagination, Navigation]}
  spaceBetween={20}
  slidesPerView={1} // Default for mobile
  navigation
  pagination={{ clickable: true }}
  breakpoints={{
    640: { slidesPerView: 1, spaceBetween: 15 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
  }}
  className="relative pb-10"
>
  {carouselItems.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="relative group cursor-pointer">
        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 sm:h-72 object-cover rounded-lg"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 sm:p-6 rounded-lg">
          <p className="text-xs sm:text-sm text-blue-400">{item.category}</p>
          <h3 className="text-white text-base sm:text-lg font-bold">
            {item.title}
          </h3>

          {/* Button with Mobile & Hover Visibility */}
          <div className="mt-2 flex">
            <button className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}

  {/* Pagination Dots Below */}
  <div className="swiper-pagination absolute -bottom-4 left-1/2 transform -translate-x-1/2"></div>
</Swiper>

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


    
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto text-center px-4">
    {/* Subheading */}
    <h3 className="text-blue-500 text-sm font-semibold uppercase">
      Work Process
    </h3>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
      Our Development Process
    </h2>

    {/* Steps Container */}
    <div className="mt-12 flex flex-wrap justify-center items-center gap-8 sm:gap-16">
      {steps.map((step, index) => (
        <div key={step.id} className="flex flex-col items-center relative w-48 sm:w-56">
          {/* Step Number Badge */}
          <div className="absolute -top-3 left-auto sm:left-16 bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-semibold">
            {step.id}
          </div>

          {/* Circular Image */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 border-4 border-dotted border-blue-500 rounded-full overflow-hidden">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & Description */}
          <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
          <p className="text-gray-500 text-sm text-center max-w-xs">
            {step.description}
          </p>

          {/* Arrow Between Steps - Visible Only on Larger Screens */}
          {index !== steps.length - 1 && (
            <div className="hidden md:block absolute right-[-70px] top-12">
              {/* <img src="/images/arrow-right.png" alt="Arrow" className="w-16" /> */}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>


    <section className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 py-16 px-4">
      {/* Contact Form */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-950 text-white p-8 rounded-lg md:w-1/2 shadow-lg">
        <h3 className="text-sm font-semibold uppercase mb-2">TALK TO US</h3>
        <h2 className="text-3xl font-bold">How May We Help You?</h2>

        <form className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name*"
              className="p-3 rounded-md bg-white text-black w-full"
            />
            <input
              type="email"
              placeholder="Your Email*"
              className="p-3 rounded-md bg-white text-black w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Subject*"
              className="p-3 rounded-md bg-white text-black w-full"
            />
            <input
              type="tel"
              placeholder="Your Phone*"
              className="p-3 rounded-md bg-white text-black w-full"
            />
          </div>
          <textarea
            placeholder="Write Message"
            className="p-3 rounded-md bg-white text-black w-full h-32"
          />
          <button className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-900 transition">
            Send Message
          </button>
        </form>
      </div>

      {/* Testimonials */}
      <div className="flex flex-col items-center justify-center bg-gray-100   p-10">
      <h2 className="text-3xl font-bold mb-6">What They Say About Us</h2>
      <div className="relative w-full max-w-3xl overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-all duration-500 ease-in-out"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full p-6 bg-white shadow-lg rounded-lg text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="mx-auto rounded-full w-20 h-20 mb-4"
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.role}</p>
              <div className="flex justify-center mt-2">
                {"★".repeat(testimonial.stars).padEnd(5, "☆")}
              </div>
              <p className="mt-4 text-gray-600">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex mt-6 space-x-4">
        <button
          onClick={prevSlide}
          className="p-2 bg-blue-400 rounded-full hover:bg-gray-400"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 bg-blue-400 rounded-full hover:bg-gray-400"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
    </section>
    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-blue-600 font-semibold uppercase">Blog & News</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          Explore Blogs And News
        </h2>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
              <div className="absolute top-3 left-3 bg-blue-600 text-white text-center py-1 px-3 rounded">
                <p className="text-lg font-bold">{blog.date}</p>
                <p className="text-sm">{blog.month}</p>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="mr-2">By {blog.author}</span> | <span className="ml-2">{blog.comments}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{blog.title}</h3>
              <a href={blog.link} className="text-blue-600 font-semibold hover:underline">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
    <Outlet />
    </>
    
  )
}

export default Home