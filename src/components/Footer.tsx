import React from 'react';
import { Building2, Mail, Phone, Facebook, Instagram } from 'lucide-react';

const para1 = "Building dreams, brick by brick. With 7+ years of expertise since 2019, we deliver end-to-end design, construction, and interior solutions for homes and commercial spaces — trusted by 30+ clients with 99% satisfaction."

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Building2 className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold">DreamBrick Construction Pvt. Ltd.</span>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
              {para1}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61581404014525" target="_blank" className="bg-gray-800 hover:bg-yellow-600 p-3 rounded-lg transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/dreambrickconstruction" target="_blank" className="bg-gray-800 hover:bg-yellow-600 p-3 rounded-lg transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors duration-200">FAQ</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-400 mr-3" />
                <p className="text-gray-300">+91 7350000723</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-400 mr-3" />
                <p className="text-gray-300">dreambrickconstruction@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 DreamBrick. All rights reserved. | Licensed • Bonded • Insured
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;