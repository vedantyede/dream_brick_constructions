import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Build_Tomorrow = "Building Tomorrow's"

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {Build_Tomorrow}
              <span className="text-yellow-400 block">Infrastructure Today</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Leading infrastructure solutions with 25+ years of expertise in construction,
              engineering, and sustainable development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center group">
                <Play className="mr-2 h-5 w-5" />
                Watch Video
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <h3 className="text-gray-500 text-2xl font-bold mb-6">Quick Statics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">100+</div>
                  <div className="text-gray-500">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">5+</div>
                  <div className="text-gray-500">Years Experience</div>
                </div>
                {/* <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
                  <div className="text-gray-500">Expert Engineers</div>
                </div> */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">99%</div>
                  <div className="text-gray-500">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;