'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What services does DreamBrick Construction offer?',
      answer: 'We provide end-to-end construction solutions, including home design, structural development, interiors, and turnkey project delivery for both residential and commercial projects.'
    },
    {
      question: 'Do you handle both design and construction?',
      answer: 'Yes. Our team of verified architects and engineers with 10+ years of experience manages everything from concept design to final handover, ensuring a seamless process.'
    },
    {
      question: 'How does the pricing work?',
      answer: 'We follow transparent pricing with milestone-based payments. Costs are clearly shared upfront in the agreement, so there are no hidden charges or surprises.'
    },
    {
      question: 'Can I customize the design of my home?',
      answer: 'Absolutely! We specialize in functional layouts tailored to your lifestyle. Our architects will work with you to ensure the design matches your vision and budget.'
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines depend on the size and scope. Typically, a standard residential home takes 8–12 months from excavation to handover. Commercial projects may take longer depending on complexity.'
    },
    {
      question: 'Do you provide contracts or agreements?',
      answer: 'Yes. Every project begins with a clear, legally binding agreement that outlines scope of work, timelines, materials, and payment milestones. This ensures complete transparency and peace of mind.'
    },
    {
      question: 'What materials do you use in construction?',
      answer: 'We use only certified-grade, trusted brands like Ultratech, Kamdhenu, Ambuja, and others to ensure long-lasting quality and durability.'
    },
    {
      question: 'Do you also provide interior design services?',
      answer: 'Yes. We provide end-to-end interiors, including modular kitchens, wardrobes, false ceilings, flooring, painting, and décor, so your space is move-in ready.'
    },
    {
      question: 'Which locations do you serve?',
      answer: 'We currently provide services in Nagpur, Wardha, Amravati, Chandrapur, Gondia, Bhandara, and Akola, with a vision to expand across Maharashtra.'
    },
    {
      question: 'How do you ensure on-time delivery?',
      answer: 'We follow a milestone-based project management model, conduct regular site supervision, and use digital progress tracking to make sure every stage is completed on schedule.'
    },
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