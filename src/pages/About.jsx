import { Target, Eye, Heart, Zap, Users, Award } from "lucide-react";


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-6 bg-blue-100 text-blue-800 border border-blue-200 px-3 py-1 rounded-full text-sm font-medium">
              About TTS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              We're More Than Just a Creative Agency
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              At TTS, we believe in the perfect blend of creativity and technology. We're passionate about creating
              digital experiences that not only look amazing but also drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center border-0 shadow-lg bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600">
                To empower businesses with innovative digital solutions that drive growth, enhance user experiences,
                and create lasting impact in the digital landscape.
              </p>
            </div>

            <div className="text-center border-0 shadow-lg bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600">
                To be the leading creative agency that bridges the gap between cutting-edge technology and exceptional
                design, setting new standards in digital innovation.
              </p>
            </div>

            <div className="text-center border-0 shadow-lg bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Values</h3>
              <p className="text-slate-600">
                Creativity, integrity, collaboration, and excellence. We believe in building long-term partnerships
                based on trust, transparency, and mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why TTS?</h2>
              <p className="text-lg text-slate-600 mb-6">
                Founded in 2019, TTS emerged from a simple belief: that great design and powerful technology should work
                hand in hand. Our founders, coming from backgrounds in both creative design and software development,
                saw an opportunity to create something different.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                We're not just another agency. We're your strategic partners who understand that every pixel, every line
                of code, and every user interaction matters. Our unique approach combines artistic vision with technical
                expertise to deliver solutions that are both beautiful and functional.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-emerald-500 mr-3" />
                  <span className="font-semibold">Fast Delivery</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-emerald-500 mr-3" />
                  <span className="font-semibold">Expert Team</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-emerald-500 mr-3" />
                  <span className="font-semibold">Quality Assured</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-6 w-6 text-emerald-500 mr-3" />
                  <span className="font-semibold">Client-Focused</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">What Sets Us Apart</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      Technical + Creative Expertise
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      Agile Development Process
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      24/7 Support & Maintenance
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      Results-Driven Approach
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 text-lg rounded-md transition-colors">
            Start Your Project
          </button>
        </div>
      </section>

      
    </div>
  );
}