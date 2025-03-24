
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Upload or Describe",
      description: "Upload your image or describe what you'd like to see sketched in detail.",
      color: "from-cyber-purple to-cyber-pink"
    },
    {
      number: "02",
      title: "AI Processing",
      description: "Our AI processes your image or creates a new one based on your description.",
      color: "from-cyber-pink to-cyber-blue"
    },
    {
      number: "03",
      title: "Sketch Conversion",
      description: "The image is converted to a high-quality sketch using advanced techniques.",
      color: "from-cyber-blue to-cyber-green"
    },
    {
      number: "04",
      title: "Review & Download",
      description: "View your completed sketch and download it in high resolution.",
      color: "from-cyber-green to-cyber-purple"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="demo">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute left-0 top-1/4 w-1/3 h-1/3 bg-cyber-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-1/4 w-1/3 h-1/3 bg-cyber-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="cyber-gradient-text">How It Works</span>
          </h2>
          <p className="text-white/70 text-lg">
            A simple step-by-step process to transform your images or ideas into beautiful sketches
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-purple via-cyber-blue to-cyber-pink md:transform md:-translate-x-1/2 hidden sm:block"></div>
            
            {/* Steps */}
            <div className="space-y-12 md:space-y-24 relative">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-4 md:gap-12`}
                >
                  {/* Step number/icon */}
                  <div className="relative flex-shrink-0 w-16 h-16 flex items-center justify-center bg-cyber-dark border border-white/10 rounded-full shadow-neon-purple z-10">
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-20 rounded-full`}></div>
                    <span className="text-xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  {/* Step content */}
                  <div 
                    className={`cyber-card p-6 md:p-8 w-full max-w-xl ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                  >
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <a 
            href="https://chatgpt.com/g/g-67e13d4c3c6c81918c22e1a147fb209d-sketch-artist-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-cyber-purple to-cyber-pink text-white font-medium shadow-neon-purple transition-all hover:shadow-neon-pink hover:scale-105"
          >
            Try Sketch Artist GPT Now
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
