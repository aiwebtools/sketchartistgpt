
import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      heroRef.current.style.setProperty('--move-x', `${moveX}px`);
      heroRef.current.style.setProperty('--move-y', `${moveY}px`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-16 overflow-hidden"
      style={{
        background: `radial-gradient(circle at 50% 50%, rgba(204, 0, 255, 0.15), transparent 70%)`,
      }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      {/* Floating elements */}
      <div 
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyber-purple/10 blur-3xl animate-float"
        style={{ 
          animationDelay: '0s',
          transform: 'translateX(calc(var(--move-x, 0) * -0.5)) translateY(calc(var(--move-y, 0) * -0.5))'
        }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyber-blue/10 blur-3xl animate-float"
        style={{ 
          animationDelay: '1s',
          transform: 'translateX(calc(var(--move-x, 0) * -0.3)) translateY(calc(var(--move-y, 0) * -0.3))'
        }}
      ></div>
      <div 
        className="absolute top-1/3 right-1/3 w-56 h-56 rounded-full bg-cyber-pink/10 blur-3xl animate-float"
        style={{ 
          animationDelay: '2s',
          transform: 'translateX(calc(var(--move-x, 0) * -0.7)) translateY(calc(var(--move-y, 0) * -0.7))'
        }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Hero badge */}
          <div className="inline-block mb-4 backdrop-blur-sm">
            <span className="inline-flex items-center py-1.5 px-3 rounded-full text-xs font-medium bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30">
              AI-Powered Sketch Generation
            </span>
          </div>
          
          {/* Hero title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight">
            Transform Images into 
            <span className="block cyber-gradient-text mt-2">Artistic Sketches</span>
          </h1>
          
          {/* Hero description */}
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Powered by an AI with over 50 years of virtual artistic experience, Sketch Artist GPT converts 
            your images into professional sketches or creates original artwork from your descriptions.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 md:mt-12">
            <a 
              href="https://chatgpt.com/g/g-67e13d4c3c6c81918c22e1a147fb209d-sketch-artist-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-cyber-purple to-cyber-pink text-white font-medium shadow-neon-purple transition-all hover:shadow-neon-pink hover:scale-105"
            >
              Try Sketch Artist GPT
            </a>
            <button 
              onClick={scrollToDemo}
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-transparent border border-cyber-purple/50 text-white font-medium hover:bg-cyber-purple/10 shadow-sm hover:shadow-neon-purple transition-all"
            >
              Learn How It Works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
