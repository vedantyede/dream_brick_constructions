import React from 'react';
import { Phone, Mail, MessageCircle, Calendar } from 'lucide-react';

const Support: React.FC = () => {
  const supportOptions = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: '24/7 Emergency Support',
      description: 'Round-the-clock emergency response for critical infrastructure issues.',
      contact: '+1 (555) 123-4567',
      color: 'bg-red-100 text-red-700'
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Email Support',
      description: 'Comprehensive project support and technical assistance via email.',
      contact: 'support@infratech.com',
      color: 'bg-yellow-100 text-yellow-700'
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Live Chat',
      description: 'Instant messaging support for quick questions and project updates.',
      contact: 'Available 9 AM - 6 PM EST',
      color: 'bg-green-100 text-green-700'
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: 'Schedule Consultation',
      description: 'Book a meeting with our engineering experts for project planning.',
      contact: 'Book Online',
      color: 'bg-gray-100 text-gray-700'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Customer <span className="text-yellow-600">Support</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated support team is here to assist you throughout your project lifecycle. 
            Get the help you need, when you need it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg ${option.color} mb-6`}>
                {option.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">{option.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{option.description}</p>
              <div className="text-yellow-600 font-semibold text-sm">{option.contact}</div>
            </div>
          ))}
        </div>

        {/* <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <HeadphonesIcon className="h-12 w-12 text-yellow-400 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold">Dedicated Project Managers</h3>
                  <p className="text-gray-300">Personal support throughout your project</p>
                </div>
              </div>
              <p className="text-lg text-gray-300 mb-8">
                Every project is assigned a dedicated project manager who serves as your single 
                point of contact. They'll keep you updated on progress, handle any concerns, 
                and ensure your project meets all specifications and deadlines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Contact Project Manager
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                  View Project Portal
                </button>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-yellow-400 mr-2" />
                  <span className="text-xl font-bold">Support Hours</span>
                </div>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>7 AM - 8 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9 AM - 5 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Emergency Only</span>
                  </div>
                  <div className="border-t border-gray-400 pt-2 mt-4">
                    <div className="flex justify-between font-semibold text-yellow-400">
                      <span>Emergency Support:</span>
                      <span>24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Support;