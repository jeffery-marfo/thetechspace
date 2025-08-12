import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import C1 from "../assets/img/C1.jpg";

export default function ContactPage() {
  return (
    <div className="min-h-screen ">
      
      <section className="relative py-50">
                    
            
                    <img
                      src={C1}
                      alt="About Hero"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay for readability */}
                    <div className="container mx-auto px-4 relative z-10">
                      <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block mb-6  bg-slate-900  text-white border border-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                         Get In Touch
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Get In Touch
                        </h1>
                        <p className="text-xl text-blue-100 mb-8">
                        Ready to bring your vision to life? We'd love to hear about your project and discuss how we can help you
              achieve your goals.
                        </p>
                      </div>
                    </div>
                  </section>
      

     
      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="border-0 shadow-xl rounded-lg">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                      <input type="text" placeholder="John" className="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
                      <input type="text" placeholder="Doe" className="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                    <input type="email" placeholder="john@example.com" className="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" placeholder="+1 (555) 123-4567" className="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Project Type</label>
                    <select className="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select a service</option>
                      <option>Website Design & Development</option>
                      <option>Graphic Design</option>
                      <option>UI/UX Design</option>
                      <option>Digital Strategy</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Project Budget</label>
                    <select className="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select budget range</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Project Details *</label>
                    <textarea
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      rows={5}
                      className="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-md flex items-center justify-center">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in touch</h2>
                <p className="text-lg text-slate-600 mb-8">
                  We're here to help bring your vision to life. Reach out to us through any of the channels below, and
                  we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-0 shadow-lg rounded-lg">
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Email Us</h3>
                        <p className="text-slate-600 mb-2">Send us an email anytime</p>
                        <a
                          href="mailto:hello@thetechspace.com"
                          className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                          hello@thetechspace.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-0 shadow-lg rounded-lg">
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Call Us</h3>
                        <p className="text-slate-600 mb-2">Mon-Fri from 9am to 6pm</p>
                        <a href="tel:+15551234567" className="text-emerald-600 hover:text-emerald-700 font-medium">
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-0 shadow-lg rounded-lg">
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Visit Us</h3>
                        <p className="text-slate-600 mb-2">Come say hello at our office</p>
                        <p className="text-slate-700">
                          123 Tech Street
                          <br />
                          Digital City, DC 12345
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-0 shadow-lg rounded-lg">
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                        <div className="text-slate-600 space-y-1">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p>Saturday: 10:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-600">
                Quick answers to common questions about our services and process.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How long does a typical project take?",
                  answer:
                    "Project timelines vary depending on scope and complexity. A simple website typically takes 4-6 weeks, while more complex projects can take 8-12 weeks or more.",
                },
                {
                  question: "Do you provide ongoing support after launch?",
                  answer:
                    "Yes! We offer various support and maintenance packages to keep your website secure, updated, and performing optimally.",
                },
                {
                  question: "What's included in your web development service?",
                  answer:
                    "Our web development includes responsive design, SEO optimization, content management system, security features, and basic training on how to use your new website.",
                },
                {
                  question: "Can you work with our existing brand guidelines?",
                  answer: "We can work within your existing brand guidelines or help you develop new ones if needed.",
                },
              ].map((faq, index) => (
                <div key={index} className="border-0 shadow-lg rounded-lg">
                  <div className="p-6">
                    <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}