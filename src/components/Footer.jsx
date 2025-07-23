import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TTS</span>
              </div>
              <span className="font-bold text-xl">The Tech Space</span>
            </div>
            <p className="text-slate-400 mb-6">
              Your partner in digital design and development. Creating exceptional experiences that drive results.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Branding
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                hello@thetechspace.com
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                123 Tech Street, Digital City
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} TTS - The Tech Space. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}