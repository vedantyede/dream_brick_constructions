import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              About <span className="text-yellow-600">InfraTech</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 1998, InfraTech has grown from a small regional contractor to one of
              the nation most trusted infrastructure development companies. We specialize in
              complex engineering projects that require precision, innovation, and unwavering
              commitment to quality.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our portfolio spans across highways, bridges, commercial buildings, and sustainable
              infrastructure projects. We pride ourselves on our ability to tackle challenging
              projects while maintaining the highest safety standards and environmental responsibility.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600 mb-2">25+</div>
                <div className="text-gray-700">Years in Business</div>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600 mb-2">500+</div>
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
              To build sustainable infrastructure that enhances communities and drives economic
              growth while maintaining the highest standards of safety and quality.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
            <div className="bg-gray-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading infrastructure company recognized for innovation, sustainability,
              and excellence in project delivery across the nation.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl">
            <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600">
              Integrity, safety, innovation, and environmental stewardship guide every decision
              we make and every project we undertake.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;