import { Linkedin, Twitter, Github } from "lucide-react";
import Ab1 from "../assets/img/Ab1.jpg";
import Ab2 from "../assets/img/Ab2.jpeg";
import Ab3 from "../assets/img/Ab3.jpeg";
import T4 from "../assets/img/T4.jpg";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & Creative Director",
      specialty: "Brand Strategy & Visual Design",
      bio: "With 8+ years in creative direction, Alex leads our design vision and ensures every project tells a compelling story.",
      funFact: "Coffee enthusiast who can design better after the 3rd cup ☕",
      image: Ab1
    },
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      specialty: "Full-Stack Development & DevOps",
      bio: "Sarah brings complex ideas to life with clean, scalable code. She's our go-to for technical architecture and optimization.",
      funFact: "Solves coding problems while rock climbing 🧗‍♀️",
      image: Ab2
    },
    {
      name: "Marcus Rodriguez",
      role: "UX/UI Designer",
      specialty: "User Experience & Interface Design",
      bio: "Marcus crafts intuitive user experiences that convert. His designs are both beautiful and highly functional.",
      funFact: "Sketches app ideas on napkins during lunch breaks 📱",
      image: Ab3
    },
  ];

  return (
    
    <div className="min-h-screen ">

        <section className="relative py-50">
              
      
              <img
                src={T4}
                alt="About Hero"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay for readability */}
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                  <span className="inline-block mb-6  bg-slate-900  text-white border border-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                     Meet Our Team
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                   The Creative Minds Behind TTS
                  </h1>
                  <p className="text-xl text-blue-100 mb-8">
                   Our diverse team of designers, developers, and strategists work together to create exceptional digital
              experiences. Get to know the people who make the magic happen.
                  </p>
                </div>
              </div>
            </section>

     

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white rounded-lg"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name} profile`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                        <Linkedin className="h-4 w-4 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                        <Twitter className="h-4 w-4 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                        <Github className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-semibold mb-2">{member.role}</p>
                  <span className="inline-block mb-4 bg-slate-200 text-slate-800 px-2 py-1 rounded-full text-xs font-medium">
                    {member.specialty}
                  </span>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-xs text-slate-500 font-medium mb-1">Fun Fact:</p>
                    <p className="text-sm text-slate-700">{member.funFact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Team Culture</h2>
            <p className="text-xl text-slate-600 mb-12">
              We believe that great work comes from great people working together in an environment that fosters
              creativity, collaboration, and continuous learning.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Innovation First</h3>
                <p className="text-slate-600 text-sm">
                  We encourage experimentation and embrace new technologies to stay ahead of the curve.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Collaboration</h3>
                <p className="text-slate-600 text-sm">
                  Every voice matters. We work together to create solutions that exceed expectations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Continuous Learning</h3>
                <p className="text-slate-600 text-sm">
                  We invest in our team's growth through training, conferences, and skill development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}