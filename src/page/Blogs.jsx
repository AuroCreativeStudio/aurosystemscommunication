import React, { useState } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const blogPosts = [
  { id: 1, title: "Necessity May Give us Best Virtual Court", date: "10 Dec", author: "Admin", comments: 0, image: "https://via.placeholder.com/400" },
  { id: 2, title: "Tackling the Changes of Retail Industry", date: "12 Dec", author: "Admin", comments: 0, image: "https://via.placeholder.com/400" },
  { id: 3, title: "Easy and Most Powerful Server and Platform", date: "15 Dec", author: "Admin", comments: 0, image: "https://via.placeholder.com/400" },
  { id: 4, title: "How AI is Revolutionizing Businesses", date: "18 Dec", author: "Admin", comments: 0, image: "https://via.placeholder.com/400" },
  { id: 5, title: "Future Trends in Cloud Computing", date: "20 Dec", author: "Admin", comments: 0, image: "https://via.placeholder.com/400" },
  { id: 6, title: "The Rise of Remote Work Solutions", date: "24 Dec", author: "Admin", comments: 0, image: "https://via.placeholder.com/400" },
];

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Pagination Logic
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const selectedPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);
  return (
    <>
    <div className="bg-gray-100">
          {/* Hero Section */}
          <div className="relative w-full bg-center bg-cover h-80" style={{ backgroundImage: "url({Image4})" }}>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold">Blogs</h1>
                <p className="mt-2 text-lg">
                  <span className="text-blue-400">Home</span> » Blogs
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Blogs 
        </h2>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* Image with Date Badge */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-60 object-cover"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-md">
                  {post.date}
                </span>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <span className="mr-4">👤 {post.author}</span>
                  <span>💬 {post.comments} Comments</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {post.title}
                </h3>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline flex items-center"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-gray-100 py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
      

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img src={post.image} alt={post.title} className="w-full h-60 object-cover" />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-md">
                  {post.date}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <span className="mr-4">👤 {post.author}</span>
                  <span>💬 {post.comments} Comments</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
                <a href="#" className="text-blue-600 font-medium hover:underline flex items-center">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 mx-2 text-white rounded-md ${currentPage === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 mx-2 rounded-md ${currentPage === index + 1 ? "bg-blue-700 text-white" : "bg-gray-300 text-gray-700 hover:bg-gray-400"}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 mx-2 text-white rounded-md ${currentPage === totalPages ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            Next
          </button>
        </div>
      </div>
      </div>
          </div>
          </>
  )
}

export default Blogs