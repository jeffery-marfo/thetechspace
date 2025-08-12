import { Code, Palette, Smartphone, Monitor, Search, Zap, ArrowRight, Check } from "lucide-react";
import S1 from "../assets/img/S1.jpg"; // Adjust the path to your image file
import WD1 from "../assets/img/WD1.png"; // Placeholder image for Website Design
import GD1 from "../assets/img/GD1.png"; // Placeholder image for Graphic Design
import UI2 from "../assets/img/UI2.png"; // Placeholder image for UI/UX Design

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Website Design & Development",
      description: "Custom websites built with modern technologies, optimized for performance and conversions.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Fast Loading Speed",
        "CMS Integration",
        "E-commerce Solutions",
        "Maintenance & Support",
      ],
      color: "blue",
      image: WD1, // Added image property
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Visual identity and marketing materials that make your brand stand out from the competition.",
      features: [
        "Logo Design",
        "Brand Identity",
        "Marketing Materials",
        "Print Design",
        "Packaging Design",
        "Social Media Graphics",
      ],
      color: "purple",
      image: GD1, // Added image property
    },
    {
      icon: Smartphone,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive experiences and drives engagement across all devices.",
      features: ["User Research", "Wireframing", "Prototyping", "User Testing", "Mobile App Design", "Design Systems"],
      color: "emerald",
      image: UI2, // Added image property
    },
  ];

  const additionalServices = [
    {
      icon: Monitor,
      title: "Digital Strategy",
      description: "Comprehensive digital strategies that align with your business goals.",
    },
    {
      icon: Search,
      title: "SEO & Marketing",
      description: "Boost your online visibility and drive qualified traffic to your website.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your website and improve user experience across all devices.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-50">
        <img
          src={S1}
          alt="Service Hero"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay for readability */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-6 bg-slate-900 text-white border border-blue-200 px-3 py-1 rounded-full text-sm font-medium">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Digital Solutions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              From concept to launch, we provide end-to-end digital services that help your business thrive in the
              digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div
                    className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mb-6`}
                  >
                    <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className=" bg-slate-700 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-md flex items-center">
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                    <button className="border border-slate-900 text-slate-800 hover:bg-emerald-500 hover:text-white font-semibold px-4 py-2 rounded-md transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="border-0 shadow-xl overflow-hidden rounded-lg">
                    <img
                      src={service.image}
                      alt={`${service.title} illustration`}
                      className="w-full h-auto object-cover aspect-video"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Additional Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We offer a comprehensive suite of digital services to support your business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white p-8 text-center rounded-lg">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-200 transition-colors">
                  <service.icon className="h-8 w-8 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <button className="border border-slate-500 text-slate-500 hover:bg-slate-500 hover:text-white font-semibold px-4 py-2 rounded-md text-sm transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We follow a proven process to ensure your project is delivered on time, on budget, and exceeds
              expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We learn about your business, goals, and target audience.",
              },
              {
                step: "02",
                title: "Strategy",
                description: "We develop a comprehensive strategy and project roadmap.",
              },
              {
                step: "03",
                title: "Design & Development",
                description: "We bring your vision to life with expert design and development.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "We launch your project and provide ongoing support and maintenance.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss your needs and create a custom solution that drives results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 text-lg rounded-md">
              Get Free Quote
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-4 text-lg rounded-md transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}