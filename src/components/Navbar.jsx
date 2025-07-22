import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <div className="bg-purple-600 text-white px-2 py-1 rounded-md font-semibold text-sm">
          TTS
        </div>
        <h1 className="text-lg font-semibold text-gray-800">The Tech Space</h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-gray-600 font-medium">
        <li><a href="/" className="hover:text-black">Home</a></li>
        <li><a href="/about" className="hover:text-black">About</a></li>
        <li><a href="/services" className="hover:text-black">Services</a></li>
        <li><a href="/team" className="hover:text-black">Team</a></li>
        <li><a href="/blogs" className="hover:text-black">Blog</a></li>
        <li><a href="/contact" className="hover:text-black">Contact</a></li>
      </ul>

      {/* Get Quote Button */}
      <div>
        <button className="border border-black px-4 py-2 rounded-md hover:bg-gray-100">
          Get Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
