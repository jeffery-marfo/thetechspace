import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0c1731] to-[#1e3a8a] text-white min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          {/* Top Tag */}
          <div className="inline-block bg-teal-700 text-white text-sm font-medium px-4 py-1 rounded-full mb-4">
            Your Partner in Digital Innovation
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Your Partner in Digital <br />
            <span className="text-white">Design and Development</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            We blend creativity with cutting-edge technology to build exceptional
            digital experiences that drive results for your business.
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center gap-2 bg-blue-900 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md transition">
              Let's Build Something Great <ArrowRight className="w-4 h-4" />
            </button>

            <button className="flex justify-center gap-2 w-45 px-4 py-3 rounded-md border border-gray-200 hover:bg-green-600 bg-white text-black font-semibold transition">
              Get A Quote
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do Best</h2>
        <p className="text-gray-600 mb-12">From concept to launch, we deliver comprehensive digital solutions that elevate your brand.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Website Design & Development</h3>
            <p className="text-gray-600">Custom websites that are fast, responsive, and optimized for conversions. Built with the latest technologies.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Graphic Design</h3>
            <p className="text-gray-600">Visual identity, branding, and marketing materials that make your business stand out from the competition.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">UI/UX Design</h3>
            <p className="text-gray-600">User-centered design that creates intuitive experiences and drives engagement across all devices.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;