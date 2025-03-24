
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Sketch Artist GPT?",
      answer: "Sketch Artist GPT is an AI-powered tool that transforms images into artistic sketches. It can either convert your uploaded images into sketches or generate original sketches based on your text descriptions using advanced AI technology."
    },
    {
      question: "How does the sketch conversion process work?",
      answer: "For uploaded images, Sketch Artist GPT uses Python-based image processing to create a high-quality sketch. For text descriptions, it first generates a full-color image using DALLE and then converts that image into a sketch, providing you with both versions."
    },
    {
      question: "What types of images can I upload for conversion?",
      answer: "You can upload almost any image for conversion, including photographs, digital art, or scanned drawings. For best results, images should be clear with good contrast and detail. The system works with common image formats like JPEG, PNG, and GIF."
    },
    {
      question: "What resolution are the output sketches?",
      answer: "All sketches are generated at a minimum of 350dpi (dots per inch) to ensure professional quality and detail. This high resolution makes them suitable for printing, professional projects, or further digital editing."
    },
    {
      question: "Can I use the generated sketches commercially?",
      answer: "Usage rights for generated sketches are subject to OpenAI's terms of service. Generally, you own the outputs you create with Sketch Artist GPT, but you should review OpenAI's content policy and terms for specific details regarding commercial use and limitations."
    },
    {
      question: "Is there a limit to how many sketches I can create?",
      answer: "The number of sketches you can create depends on your OpenAI usage limits and subscription plan. Standard OpenAI limitations for GPT and DALLE usage apply to Sketch Artist GPT."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="faq">
      {/* Background elements */}
      <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-cyber-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-cyber-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="cyber-gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-white/70 text-lg">
            Everything you need to know about Sketch Artist GPT
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                <span className="ml-6 flex-shrink-0 text-cyber-purple">
                  {openIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </span>
              </button>
              <div
                className={`mt-2 transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-white/70">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
