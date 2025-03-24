
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ConsentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted
    const hasAccepted = localStorage.getItem('userConsentAccepted');
    
    if (!hasAccepted) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('userConsentAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="cyber-card max-w-lg w-full p-6 animate-scale-in">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-white">Terms of Use</h3>
          <button 
            onClick={handleAccept}
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="prose prose-invert prose-sm max-w-none mb-6">
          <p className="text-white/80">
            By using Sketch Artist GPT, you agree to our Terms of Service and Privacy Policy. 
            This tool uses AI to generate and transform images. You are responsible for ensuring 
            all content you upload or describe complies with applicable laws and OpenAI's 
            content policies.
          </p>
          <p className="text-white/80">
            Your continued use of this service indicates your acceptance of these terms.
          </p>
        </div>
        
        <div className="flex justify-end">
          <button
            onClick={handleAccept}
            className="px-6 py-2 rounded-md bg-gradient-to-r from-cyber-purple to-cyber-pink text-white font-medium shadow-neon-purple transition-all hover:shadow-neon-pink"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentPopup;
