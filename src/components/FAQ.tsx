'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What types of infrastructure projects do you handle?',
      answer: 'We specialize in a wide range of infrastructure projects including highways, bridges, commercial buildings, water treatment facilities, and sustainable infrastructure development. Our expertise covers everything from design and engineering to construction and maintenance.'
    },
    {
      question: 'How do you ensure project quality and safety?',
      answer: 'We maintain ISO 9001 certification and follow strict quality control protocols. Our safety-first approach includes regular training, comprehensive safety audits, and the use of advanced safety equipment. We have maintained a zero-accident record for over 10 years.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on scope and complexity. Small projects may take 3-6 months, while large infrastructure projects can span 1-3 years. We provide detailed timelines during the planning phase and maintain regular progress updates throughout the project.'
    },
    {
      question: 'Do you provide project financing options?',
      answer: 'Yes, we offer various financing solutions including traditional contracts, design-build-finance arrangements, and public-private partnerships. Our financial team works with clients to develop customized payment structures that fit their budget requirements.'
    },
    {
      question: 'How do you handle environmental compliance?',
      answer: 'Environmental responsibility is core to our operations. We conduct thorough environmental impact assessments, obtain all necessary permits, and implement sustainable construction practices. We also offer green building certifications and LEED compliance services.'
    },
    {
      question: 'What warranty do you provide on completed projects?',
      answer: 'We provide comprehensive warranties ranging from 2-10 years depending on the project type and components. Our warranties cover materials, workmanship, and structural integrity. We also offer extended maintenance agreements for ongoing support.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-yellow-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our infrastructure services and project processes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-xl"
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openItem === index ? (
                  <ChevronUp className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openItem === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We are here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;