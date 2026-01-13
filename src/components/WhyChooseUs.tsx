import React from 'react';
import { Award, Clock, Leaf, BadgeIndianRupee, ShieldCheck, UsersRound } from 'lucide-react';

const para1 = "Build with confidence. Build with DreamBrick."

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Safety First',
      description: 'Strict safety protocols and a zero-accident commitment on every site.',
      color: 'bg-yellow-100 text-yellow-700'
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: 'High-Quality Materials',
      description: 'No compromises — only certified-grade, trusted brands for lasting durability.',
      color: 'bg-green-100 text-green-700'
    },
    {
      icon: <UsersRound className="h-8 w-8" />,
      title: 'Expert Supervision & Team',
      description: 'Dedicated engineers, architects, and craftsmen ensuring flawless execution with precision and care.'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'On-Time Delivery',
      description: 'Milestone-based execution ensuring projects are completed as promised',
      color: 'bg-gray-100 text-gray-700'
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: 'Sustainable Solutions',
      description: 'Environmental responsibility with green building practices and eco-friendly materials.',
      color: 'bg-green-100 text-green-700'
    },
    {
      icon: <BadgeIndianRupee className="h-8 w-8" />,
      title: 'Price Transparency',
      description: 'Honest pricing with no hidden surprises — just clarity and peace of mind.',
      color: 'bg-yellow-100 text-yellow-700'
    },
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
      </div>
    </section>
  );
};

export default WhyChooseUs;