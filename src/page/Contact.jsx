import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-white">
    {/* Hero Section */}
    <div className="relative w-full bg-center bg-cover h-80" style={{ backgroundImage: "url({Image4})" }}>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">
            <span className="text-blue-400">Home</span> » Contact Us
          </p>
        </div>
      </div>
    </div>

    <section className="py-12 bg-white">
      <div className="container flex flex-wrap gap-10 mx-auto lg:flex-nowrap">
        {/* Left Section - Contact Info */}
        <div className="w-full p-8 text-white bg-blue-600 rounded-lg lg:w-1/3">
          <h3 className="mb-4 text-2xl font-bold">Contact Information</h3>
          <p className="mb-6 text-sm">
            Nullam varius, erat quis iaculis dictum, eros urna varius eros, ut blandit felis odio in turpis.
          </p>
          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="p-3 text-blue-600 bg-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
</svg>

              </div>
              <div>
                <p className="text-sm">Call Us 7/24</p>
                <p className="text-lg font-semibold">+208-555-0112</p>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="p-3 text-blue-600 bg-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
</svg>

              </div>
              <div>
                <p className="text-sm">Make a Quote</p>
                <p className="text-lg font-semibold">info@gmail.com</p>
              </div>
            </div>
            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="p-3 text-blue-600 bg-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
</svg>

              </div>
              <div>
                <p className="text-sm">Location</p>
                <p className="text-lg font-semibold">4517 Washington Ave.</p>
              </div>
            </div>
          </div>
          {/* Social Media */}
          <div className="mt-6">
            <p className="text-sm">Follow Social:</p>
            <div className="flex gap-3 mt-2">
              <span className="p-2 text-black bg-white rounded-full cursor-pointer"><FaFacebookF /></span>
              <span className="p-2 text-black bg-white rounded-full cursor-pointer"><FaTwitter/></span>
              <span className="p-2 text-black bg-white rounded-full cursor-pointer"><FaLinkedinIn/></span>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full lg:w-2/3">
          <h4 className="text-sm font-semibold text-blue-600 uppercase">Get in Touch</h4>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Ready To Get Started?</h2>
          <p className="mt-2 text-gray-600">
            Nullam varius, erat quis iaculis dictum, eros urna varius eros, ut blandit felis odio in turpis.
          </p>
          <form className="mt-6 space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="Your Name" className="w-1/2 p-3 border rounded-md focus:ring-2 focus:ring-blue-600" />
              <input type="email" placeholder="Your Email" className="w-1/2 p-3 border rounded-md focus:ring-2 focus:ring-blue-600" />
              
            </div>
            <div className="flex gap-4">
              <input type="text" placeholder="Subject" className="w-1/2 p-3 border rounded-md focus:ring-2 focus:ring-blue-600" />
              <input type="phone" placeholder="PhoneNo" className="w-1/2 p-3 border rounded-md focus:ring-2 focus:ring-blue-600" />
            </div>
            <textarea placeholder="Write Message" className="w-full h-32 p-3 border rounded-md focus:ring-2 focus:ring-blue-600"></textarea>
            <button className="flex items-center gap-2 px-6 py-3 text-white transition-all rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-blue-700">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>

    <div className="w-full h-[550px] mt-8 bg-white">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31526.948191707163!2d-47.9292!3d-15.7801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a30f84f5907bb%3A0x14f65aefe6447e89!2sBrasilia%2C%20Brazil!5e0!3m2!1sen!2sus!4v1616572442827!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
    </div>
  )
}

export default Contact