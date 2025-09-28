import React from 'react';
import { Shield, Award, Users, Clock, Wrench, Leaf } from 'lucide-react';

const para1 = "Build with confidence. Build with DreamBrick."

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'High-Quality Materials',
      description: 'InduNo compromises — only certified-grade, trusted brands for lasting durability.',
      color: 'bg-green-100 text-green-700'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality Excellence',
      description: 'ISO 9001 certified processes ensuring the highest standards in every project.',
      color: 'bg-yellow-100 text-yellow-700'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Expert Team',
      description: 'Certified engineers and skilled professionals with decades of combined experience.',
      color: 'bg-purple-100 text-purple-700'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'On-Time Delivery',
      description: 'Proven track record of completing projects on schedule and within budget.',
      color: 'bg-gray-100 text-gray-700'
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Advanced Technology',
      description: 'Cutting-edge equipment and innovative construction methodologies.',
      color: 'bg-yellow-100 text-yellow-700'
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: 'Sustainable Solutions',
      description: 'Environmental responsibility with green building practices and sustainable materials.',
      color: 'bg-green-100 text-green-700'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="text-yellow-600">DreamBrick?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {para1}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg ${feature.color} mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Trusted by Industry Leaders
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to excellence has earned us partnerships with Fortune 500 companies 
                and recognition as a premier infrastructure contractor.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-yellow-600 mb-2">$2.5B+</div>
                  <div className="text-gray-600">Project Value Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-600 mb-2">15</div>
                  <div className="text-gray-600">States Operating In</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction team"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;