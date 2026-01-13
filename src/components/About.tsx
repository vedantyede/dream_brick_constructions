import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              About <span className="text-yellow-600">DreamBrick</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2019, DreamBrick Construction Pvt. Ltd. has been transforming visions into reality for over 7 years. With a commitment to excellence, transparency, and trust, we specialize in end-to-end solutions — from home design and development to complete interiors.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We have successfully delivered 30+ residential and commercial projects, achieving an outstanding 99% client satisfaction rate. Backed by verified architects and engineers with 10+ years of experience, we combine expertise, quality materials, and modern methods to build lasting spaces.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Currently serving Nagpur, Wardha, Amravati, Chandrapur, Gondia, Bhandara, and Akola, our vision is to expand across Maharashtra, becoming the most trusted name in construction and interiors.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At DreamBrick, we don’t just build structures — we design lifestyles, create spaces, and deliver dreams brick by brick.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600 mb-2">10+</div>
                <div className="text-gray-700">Years in Business</div>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600 mb-2">30+</div>
                <div className="text-gray-700">Projects Completed</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="">Image</div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-white p-6 rounded-xl shadow-xl">
              <div className="text-2xl font-bold">99%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl">
            <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To deliver end-to-end construction and interior solutions that combine quality, transparency, and innovation — ensuring every client’s dream home or commercial space is built with precision and care.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
            <div className="bg-gray-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become a leading construction brand across Maharashtra, recognized for our excellence, integrity, and customer satisfaction, while expanding into new cities and creating landmarks that inspire generations.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl">
            <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600">
              Quality First, Integrity & Transparency, Customer Commitment, Innovation, and Teamwork — the foundation of every DreamBrick project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;