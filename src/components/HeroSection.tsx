
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = (x - 0.5) * 30;
      const moveY = (y - 0.5) * 30;
      
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
      className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-16 overflow-hidden divine-section"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/40 via-transparent to-transparent animate-aurora"></div>
        <div className="absolute inset-0 grid-pattern opacity-40"></div>
        
        {/* Floating particles */}
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Enhanced floating elements with more divine effects */}
      <div 
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl animate-float opacity-70"
        style={{ 
          animationDelay: '0s',
          background: 'radial-gradient(circle, rgba(204, 0, 255, 0.4) 0%, rgba(204, 0, 255, 0.1) 50%, transparent 100%)',
          transform: 'translateX(calc(var(--move-x, 0) * -0.5)) translateY(calc(var(--move-y, 0) * -0.5))'
        }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float opacity-60"
        style={{ 
          animationDelay: '1s',
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, rgba(0, 255, 255, 0.1) 50%, transparent 100%)',
          transform: 'translateX(calc(var(--move-x, 0) * -0.3)) translateY(calc(var(--move-y, 0) * -0.3))'
        }}
      ></div>
      <div 
        className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full blur-3xl animate-float opacity-50"
        style={{ 
          animationDelay: '2s',
          background: 'radial-gradient(circle, rgba(255, 0, 153, 0.4) 0%, rgba(255, 0, 153, 0.1) 50%, transparent 100%)',
          transform: 'translateX(calc(var(--move-x, 0) * -0.7)) translateY(calc(var(--move-y, 0) * -0.7))'
        }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl animate-float opacity-40"
        style={{ 
          animationDelay: '3s',
          background: 'radial-gradient(circle, rgba(255, 255, 0, 0.3) 0%, rgba(255, 255, 0, 0.1) 50%, transparent 100%)',
          transform: 'translateX(calc(var(--move-x, 0) * -0.4)) translateY(calc(var(--move-y, 0) * -0.4))'
        }}
      ></div>
      
      {/* Orbiting elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-96 h-96">
          <div className="absolute top-0 left-1/2 w-4 h-4 bg-cyber-purple rounded-full animate-orbit opacity-60 shadow-neon-purple"></div>
          <div 
            className="absolute top-0 left-1/2 w-3 h-3 bg-cyber-blue rounded-full opacity-50 shadow-neon-blue"
            style={{ animation: 'orbit 12s linear infinite reverse' }}
          ></div>
          <div 
            className="absolute top-0 left-1/2 w-2 h-2 bg-cyber-pink rounded-full opacity-40 shadow-neon-pink"
            style={{ animation: 'orbit 18s linear infinite' }}
          ></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Enhanced hero badge */}
          <div className="inline-block mb-6 backdrop-blur-sm animate-scale-in">
            <span className="inline-flex items-center py-2 px-4 rounded-full text-sm font-medium bg-gradient-to-r from-cyber-purple/30 to-cyber-pink/30 text-white border border-cyber-purple/50 shadow-neon-purple hover:shadow-neon-pink transition-all duration-500 hover:scale-105">
              ✨ AI-Powered Sketch Generation ✨
            </span>
          </div>
          
          {/* Enhanced hero title with more spacing and effects */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight md:leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="block mb-4">Transform Images into</span>
            <span className="block cyber-gradient-text neon-glow animate-glow-pulse">Artistic Sketches</span>
          </h1>
          
          {/* Enhanced hero description with better spacing */}
          <div className="max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Powered by an AI with over 50 years of virtual artistic experience, Sketch Artist GPT converts 
              your images into professional sketches or creates original artwork from your descriptions.
            </p>
          </div>
          
          {/* Enhanced CTA buttons with more spacing and effects */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a 
              href="https://chatgpt.com/g/g-67e13d4c3c6c81918c22e1a147fb209d-sketch-artist-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-10 py-4 rounded-xl bg-gradient-to-r from-cyber-purple via-cyber-pink to-cyber-blue text-white font-bold text-lg shadow-divine transition-all duration-500 hover:shadow-ethereal hover:scale-110 hover:-rotate-1 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt"></div>
              <span className="relative z-10">✨ Try Sketch Artist GPT ✨</span>
            </a>
            <button 
              onClick={scrollToDemo}
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-transparent border-2 border-cyber-purple/60 text-white font-bold text-lg hover:bg-gradient-to-r hover:from-cyber-purple/20 hover:to-cyber-pink/20 shadow-sm hover:shadow-neon-purple transition-all duration-500 hover:scale-105 hover:rotate-1 backdrop-blur-sm"
            >
              🎨 Learn How It Works
            </button>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll down indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white/70 text-base mb-3 font-medium">Experience the Magic Below</span>
        <div className="p-2 rounded-full bg-gradient-to-r from-cyber-purple to-cyber-pink shadow-neon-purple">
          <ArrowDown className="h-6 w-6 text-white" />
        </div>
      </div>
      
      {/* Additional divine elements */}
      <div className="absolute top-20 right-10 w-6 h-6 bg-cyber-purple rounded-full animate-ping opacity-60"></div>
      <div className="absolute bottom-32 left-20 w-4 h-4 bg-cyber-pink rounded-full animate-pulse opacity-50"></div>
      <div className="absolute top-1/2 right-20 w-3 h-3 bg-cyber-blue rounded-full animate-bounce opacity-40"></div>
      <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-cyber-yellow rounded-full animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default HeroSection;
