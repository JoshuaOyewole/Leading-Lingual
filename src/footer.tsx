import { Mail, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "../public/asset/logo.jpg";
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-red-500 rounded-lg flex items-center justify-center">
                <img src={logo} alt="logo" />
              </div>
            </div>
            <p className="text-gray-300 my-6 leading-relaxed">
              Join us as we build confident communicators, skillful
              professionals, and globally competitive educators. Connect with us
              through our digital platforms to explore programs, register for
              sessions, or partner with us.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a
                  href="mailto:leadinglingual@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  leadinglingual@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <div className="text-gray-300">
                  <p>+234-809-000-0000</p>
                  <p className="text-sm">
                    <a
                      href="https://wa.me/2348059286631"
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      +2348059286631 (WhatsApp Only)
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="space-y-3">
              <a
                href="https://instagram.com/leadinglingual"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@leadinglingual</span>
              </a>
              <a
                href="https://facebook.com/leadinglingual"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span>Leading Lingual Institute</span>
              </a>
              <a
                href="https://linkedin.com/company/leading-lingual-global"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>Leading Lingual Global</span>
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                Find us @leadinglingual on all platforms
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2025 Leading Lingual. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
