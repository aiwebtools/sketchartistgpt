
import React from 'react';
import { ArrowRight, Upload, FileText } from 'lucide-react';

const DemoSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-cyber-dark/80">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-transparent to-cyber-black/60"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Demo image */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyber-purple to-cyber-pink opacity-30 blur-lg rounded-2xl"></div>
              <a 
                href="https://ideogram.ai/assets/image/lossless/response/CPSIx-njRfOSeqn_o5LGdQ"
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-2xl border border-white/10 shadow-lg hover:shadow-neon-purple transition-all duration-300 transform hover:scale-[1.02]"
              >
                <img 
                  src="https://ideogram.ai/assets/image/lossless/response/CPSIx-njRfOSeqn_o5LGdQ" 
                  alt="Sketch Artist GPT Example" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent opacity-80 flex items-end p-6">
                  <span className="text-white text-sm font-medium">View Full Size Example</span>
                </div>
              </a>
            </div>
          </div>
          
          {/* Demo content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="cyber-gradient-text">Start Creating</span>
              <span className="block text-white mt-2">Your Artistic Sketches Today</span>
            </h2>
            
            <p className="text-white/80 text-lg mb-8">
              Whether you want to transform your photos into professional sketches or create entirely new artwork from your descriptions, Sketch Artist GPT makes the process simple and intuitive.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-cyber-purple/10 border border-cyber-purple/30 rounded-md">
                  <Upload className="h-5 w-5 text-cyber-purple" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-lg">Upload Your Images</h3>
                  <p className="text-white/70">Transform any photo or digital image into a high-quality sketch with just a few clicks.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-cyber-pink/10 border border-cyber-pink/30 rounded-md">
                  <FileText className="h-5 w-5 text-cyber-pink" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-lg">Describe Your Vision</h3>
                  <p className="text-white/70">No image to upload? Simply describe what you want, and our AI will create it for you.</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://chatgpt.com/g/g-67e13d4c3c6c81918c22e1a147fb209d-sketch-artist-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-cyber-purple to-cyber-pink text-white font-medium shadow-neon-purple transition-all hover:shadow-neon-pink hover:scale-105"
            >
              Try Sketch Artist GPT
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
