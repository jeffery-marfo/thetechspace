import React from 'react';
import logo1 from '../assets/img/logo1.png'; // Adjust the path to your logo image file

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-slate-900 shadow-md">
       <div className="flex items-center space-x-2">
      <img src={logo1} alt="The Tech Space Logo" className="h-15 w-15" />
      <h1 className="text-lg font-semibold text-white">The Tech Space</h1>
    </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-white font-medium">
        <li><a href="/" className="hover:text-white">Home</a></li>
        <li><a href="/about" className="hover:text-white">About</a></li>
        <li><a href="/services" className="hover:text-white">Services</a></li>
        <li><a href="/team" className="hover:text-white">Team</a></li>
        <li><a href="/blogs" className="hover:text-white">Blogs</a></li>
        <li><a href="/contact" className="hover:text-white">Contact</a></li>
      </ul>

      {/* Get Quote Button */}
      <div>
        <button className="border border-white px-4 py-2 rounded-md  text-white hover:bg-gray-400">
          Get Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
