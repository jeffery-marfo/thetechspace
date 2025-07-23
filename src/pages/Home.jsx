import React from 'react';
import { ArrowRight, Code, Palette, Smartphone } from 'lucide-react';

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

      {/* Services Highlight */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What We Do Best</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From concept to launch, we deliver comprehensive digital solutions that elevate your brand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white p-8 text-center rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors">
                <Code className="h-8 w-8 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Website Design & Development</h3>
              <p className="text-slate-600">
                Custom websites that are fast, responsive, and optimized for conversions. Built with the latest
                technologies.
              </p>
            </div>

            <div className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white p-8 text-center rounded-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500 transition-colors">
                <Palette className="h-8 w-8 text-purple-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Graphic Design</h3>
              <p className="text-slate-600">
                Visual identity, branding, and marketing materials that make your business stand out from the
                competition.
              </p>
            </div>

            <div className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white p-8 text-center rounded-lg">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 transition-colors">
                <Smartphone className="h-8 w-8 text-emerald-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">UI/UX Design</h3>
              <p className="text-slate-600">
                User-centered design that creates intuitive experiences and drives engagement across all devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">150+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
              <div className="text-slate-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">5+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-slate-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

       <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-slate-600">Don't just take our word for it - hear from our satisfied clients.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-0 shadow-lg bg-white p-6 rounded-lg">
                <div className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4">
                    "TTS delivered exactly what we needed. Professional, creative, and always on time. Highly
                    recommended!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-slate-200 rounded-full mr-3"></div>
                    <div>
                      <div className="font-semibold text-slate-900">Sarah Johnson</div>
                      <div className="text-sm text-slate-500">CEO, TechStart</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Inspired</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get tips, trends & updates in your inbox. Join our community of digital innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 p-2 bg-white text-slate-900 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-2 rounded-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;