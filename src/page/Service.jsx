import React from 'react';
import toggle from '../assets/home/toggle.png';
import service from '../assets/services.jpg';
import wifi from '../assets/service/wifi installation.jpg';
import cctv from '../assets/service/cctv.jpg';
import computer from '../assets/service/computerservice.jpg';
import printer from '../assets/service/printerService.jpg';
import cartages from '../assets/service/cartages.jpg';
function Service() {
  return (
    <>
    <div className="bg-gray-100 ">
          {/* Hero Section */}
          <div className="relative w-full bg-center bg-cover h-80 "  style={{ backgroundImage: `url(${service})` }}>
             {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold">Services</h1>
                <p className="mt-2 text-lg">
                  <span className="text-blue-400">Home</span> » Services
                </p>
              </div>
            </div>
          </div>
          {/* <div className='m-12 mx-24 font-medium'>
            <p>At Auro Systems, we have been delivering cutting-edge networking, security, and IT solutions since 1988. Our services are designed to enhance connectivity, security, and efficiency for both residential and commercial clients. Whether you need Wi-Fi installation, mobile signal boosting, CCTV security, computer or printer services, or high-quality compatible cartridges, we provide tailored solutions that ensure reliability and performance.</p>
          </div> */}
           <section className="bg-gray-50 py-16 px-6">
                <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
                  {/* Left Section - Image with Play Button */}
                  <div className="relative">
                    <img
                      src={wifi} 
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
                    1. Networking Solutions (Wi-Fi Installation & Mobile Signal Boosting)

                    </h2>
                    <p className="text-gray-600 mt-4">
                    Reliable and uninterrupted connectivity is essential for both personal and professional spaces. At Auro Systems, we offer comprehensive networking solutions, ensuring seamless internet access and strong mobile signal reception. Our services include expert Wi-Fi installation for homes and businesses and mobile signal boosting to eliminate weak reception areas.

                    </p>
          
                    {/* Service Highlights */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-gray-900">Wi-Fi Installation</h4>
                        <p className="text-sm text-gray-600">
                        Setting up fast, secure, and stable wireless networks.

                        </p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-gray-900">Coverage Optimization</h4>
                        <p className="text-sm text-gray-600">
                        Eliminating dead zones and enhancing signal strength.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-gray-900">Mobile Signal Boosting</h4>
                        <p className="text-sm text-gray-600">
                        Strengthening weak mobile signals for uninterrupted calls and data.

                        </p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-gray-900">Secure Network Configuration </h4>
                        <p className="text-sm text-gray-600">
                        Implementing encryption and protection against cyber threats.

                        </p>
                      </div>
                    </div>
          
                    {/* Call to Action & Profile */}
                    <div className="mt-8 flex items-center justify-between">
                      <a
                        href="#"
                        className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-blue-600 text-white rounded-lg transition"
                      >
                        Whatsapp us →
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
                    2. Security Services (CCTV Installation & Surveillance Solutions)

                    </h2>
                    <p className="text-gray-600 mt-4">
                    Your security is our priority. With our advanced CCTV installation services, we provide state-of-the-art surveillance systems for homes, offices, and businesses. Our high-resolution cameras, remote monitoring options, and motion-detection technology ensure you stay protected 24/7.
                    </p>
          
                    {/* Service Highlights */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-gray-900">High-Resolution Surveillance</h4>
                        <p className="text-sm text-gray-600">
                        Crystal-clear footage for enhanced security.
                        </p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-gray-900">Remote Monitoring Access</h4>
                        <p className="text-sm text-gray-600">
                        View live feeds from anywhere.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-gray-900">Smart Security Features</h4>
                        <p className="text-sm text-gray-600">
                        Motion detection, night vision, and cloud storage.
                        </p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-gray-900">Customized Security Solutions</h4>
                        <p className="text-sm text-gray-600">
                        Tailored installations for any space.
                        </p>
                      </div>
                    </div>
          
                    {/* Call to Action & Profile */}
                    <div className="mt-8 flex items-center justify-between">
                      <a
                        href="#"
                        className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-blue-600 text-white rounded-lg transition"
                      >
                        Whatsapp us →
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
                      src={cctv} 
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
                      src={computer} 
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
                    3. Computer Services

                    </h2>
                    <p className="text-gray-600 mt-4">
                    From routine maintenance to complex troubleshooting, we ensure your computers run at peak performance. Whether it’s hardware issues, software updates, virus removal, or system optimization, our experts provide fast and effective solutions.
                    </p>
          
                    {/* Service Highlights */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-gray-900">Expert Troubleshooting & Repairs </h4>
                        <p className="text-sm text-gray-600">
                        Quick diagnosis and efficient fixes.
                        </p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-gray-900">System Optimization & Upgrades</h4>
                        <p className="text-sm text-gray-600">
                        Speed up your device for better performance.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-gray-900">Virus & Malware Protection </h4>
                        <p className="text-sm text-gray-600">
                        Keeping your system secure from threats.
                        </p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-gray-900">Regular Maintenance Plans </h4>
                        <p className="text-sm text-gray-600">
                        Prevent issues before they happen.

                        </p>
                      </div>
                    </div>
          
                    {/* Call to Action & Profile */}
                    <div className="mt-8 flex items-center justify-between">
                      <a
                        href="#"
                        className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-blue-600 text-white rounded-lg transition"
                      >
                        Whatsapp us →
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
                    4. Printer Services

                    </h2>
                    <p className="text-gray-600 mt-4">
                    Printers are essential for business operations, and we ensure they function flawlessly. Our printer services include installation, repairs, maintenance, and troubleshooting, ensuring minimal downtime and maximum productivity.

                    </p>
          
                    {/* Service Highlights */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-gray-900">Expert Printer Installation</h4>
                        <p className="text-sm text-gray-600">
                        Hassle-free setup for seamless operations.

                        </p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-gray-900">Comprehensive Maintenance </h4>
                        <p className="text-sm text-gray-600">
                        Prevent breakdowns with regular servicing.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-gray-900">Fast & Reliable Repairs </h4>
                        <p className="text-sm text-gray-600">
                        Quick fixes to minimize downtime.
                        </p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-gray-900">All Major Brands Supported </h4>
                        <p className="text-sm text-gray-600">
                        Expertise in servicing various printer models.

                        </p>
                      </div>
                    </div>
          
                    {/* Call to Action & Profile */}
                    <div className="mt-8 flex items-center justify-between">
                      <a
                        href="#"
                        className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-blue-600 text-white rounded-lg transition"
                      >
                        Whatsapp us →
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
                      src={printer} 
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
                      src={cartages} 
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
                    5. Compatible Cartridges


                    </h2>
                    <p className="text-gray-600 mt-4">
                    Looking for a cost-effective alternative to expensive OEM cartridges? Our high-quality compatible cartridges offer the same reliability and print quality—at a fraction of the cost. Designed to work seamlessly with major printer brands, our cartridges help you save money without compromising performance.

                    </p>
          
                    {/* Service Highlights */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-gray-900">Cost-Effective Printing </h4>
                        <p className="text-sm text-gray-600">
                        High-quality prints at a lower price.
                        </p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-gray-900">Eco-Friendly & Sustainable</h4>
                        <p className="text-sm text-gray-600">
                        Reducing waste with recyclable materials.

                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-gray-900">Seamless Compatibility</h4>
                        <p className="text-sm text-gray-600">
                        Works with all leading printer brands.
                        </p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-gray-900">Reliable & Long-Lasting </h4>
                        <p className="text-sm text-gray-600">
                        Tested for durability and efficiency.

                        </p>
                      </div>
                    </div>
          
                    {/* Call to Action & Profile */}
                    <div className="mt-8 flex items-center justify-between">
                      <a
                        href="#"
                        className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-blue-600 text-white rounded-lg transition"
                      >
                        Whatsapp us →
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
          </div>
          </>
  )
}

export default Service