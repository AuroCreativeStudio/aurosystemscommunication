import React from 'react'
import image2 from '../assets/image2.jpg';
import toggle from '../assets/home/toggle.png';
function Service() {
  return (
    <>
    <div className="bg-gray-100">
          {/* Hero Section */}
          <div className="relative w-full bg-center bg-cover h-80" style={{ backgroundImage: "url({Image4})" }}>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold">Services</h1>
                <p className="mt-2 text-lg">
                  <span className="text-blue-400">Home</span> » Services
                </p>
              </div>
            </div>
          </div>
           <section className="bg-gray-50 py-16 px-6">
                <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
                  {/* Left Section - Image with Play Button */}
                  <div className="relative">
                    <img
                      src={image2} 
                      alt="Team working"
                      className="rounded-lg shadow-lg"
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
              <section className="bg-blue-100 py-16 px-6">
                <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
                 
          
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
                   {/* Left Section - Image with Play Button */}
                   <div className="relative">
                    <img
                      src={image2} 
                      alt="Team working"
                      className="rounded-lg shadow-lg"
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
                </div>
              </section>
              <section className="bg-gray-50 py-16 px-6">
                <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
                  {/* Left Section - Image with Play Button */}
                  <div className="relative">
                    <img
                      src={image2} 
                      alt="Team working"
                      className="rounded-lg shadow-lg"
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
              <section className="bg-blue-100 py-16 px-6">
                <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
                 
          
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
                   {/* Left Section - Image with Play Button */}
                   <div className="relative">
                    <img
                      src={image2} 
                      alt="Team working"
                      className="rounded-lg shadow-lg"
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
                </div>
              </section>
          </div>
          </>
  )
}

export default Service