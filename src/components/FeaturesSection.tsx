
import React from 'react';
import { Image, Wand2, Download, Upload, FileImage, Sparkles } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Upload className="h-6 w-6 text-cyber-purple" />,
      title: "Upload Your Image",
      description: "Upload any image and our AI will transform it into a clean, professional sketch."
    },
    {
      icon: <FileImage className="h-6 w-6 text-cyber-pink" />,
      title: "Describe Your Vision",
      description: "Don't have an image? Simply describe what you want, and our AI will create a custom sketch."
    },
    {
      icon: <Wand2 className="h-6 w-6 text-cyber-blue" />,
      title: "AI-Powered Transformation",
      description: "Using advanced AI techniques to create artistic sketches with precision and detail."
    },
    {
      icon: <Image className="h-6 w-6 text-cyber-green" />,
      title: "High-Resolution Output",
      description: "All sketches are generated at 350dpi minimum resolution for professional quality."
    },
    {
      icon: <Download className="h-6 w-6 text-cyber-yellow" />,
      title: "Instant Download",
      description: "Download your sketches immediately for your creative projects or personal use."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-cyber-purple" />,
      title: "Artistic Expertise",
      description: "Our AI has over 50 years of virtual experience in sketch art and visual rendering."
    }
  ];

  return (
    <section className="py-20 bg-cyber-dark" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="cyber-gradient-text">Powerful Features</span>
          </h2>
          <p className="text-white/70 text-lg">
            Discover all the ways Sketch Artist GPT can transform your images and ideas into stunning sketch artwork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="cyber-card p-6 flex flex-col items-start space-y-4 transition-all duration-300 hover:shadow-neon-purple hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 rounded-lg bg-cyber-black/40 border border-white/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
