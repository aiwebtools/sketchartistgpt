
import React from 'react';
import { Phone, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { name: 'Sketch Artist GPT', href: 'https://chatgpt.com/g/g-67e13d4c3c6c81918c22e1a147fb209d-sketch-artist-gpt', external: true },
    { name: 'Coloring Book Generator GPT', href: 'https://coloringbookmaker.lovable.app/?via=aiwebtools', external: true },
    { name: 'FAQ', href: '#faq', external: false },
    { name: 'Disclaimer', href: '#disclaimer', external: false },
    { name: 'More AI Tools', href: 'https://www.aiwebtools.ai', external: true },
    { name: 'Privacy Policy', href: 'https://openai.com/policies/privacy-policy/', external: true },
    { name: 'Terms of Service', href: 'https://aiwebtools.lovable.app/disclaimers', external: true },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-cyber-dark/90 via-purple-900/20 to-cyber-black border-t border-gradient-to-r from-cyber-purple via-cyber-pink to-cyber-blue pt-12 pb-6 overflow-hidden">
      {/* Divine background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-indigo-900/20 to-cyber-black animate-gradient-shift"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-cyber-purple/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-cyber-pink/20 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Company Info */}
          <div className="space-y-6 backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple to-cyber-pink">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:+14758008096" className="flex items-center gap-3 text-white/80 hover:text-cyber-purple transition-all duration-300 hover:scale-105 group">
                <div className="p-2 rounded-lg bg-cyber-purple/20 group-hover:bg-cyber-purple/30 transition-all">
                  <Phone className="h-4 w-4" />
                </div>
                <span>(475) 800-8096</span>
              </a>
              <a href="mailto:Contact@ai-webtools.com" className="flex items-center gap-3 text-white/80 hover:text-cyber-purple transition-all duration-300 hover:scale-105 group">
                <div className="p-2 rounded-lg bg-cyber-purple/20 group-hover:bg-cyber-purple/30 transition-all">
                  <Mail className="h-4 w-4" />
                </div>
                <span>Contact@ai-webtools.com</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6 backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-green">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-cyber-purple transition-all duration-300 flex items-center gap-2 hover:scale-105 group"
                    >
                      <span className="group-hover:bg-gradient-to-r group-hover:from-cyber-purple group-hover:to-cyber-pink group-hover:bg-clip-text group-hover:text-transparent transition-all">
                        {link.name}
                      </span>
                      <ExternalLink className="h-3 w-3 group-hover:text-cyber-purple" />
                    </a>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-cyber-purple transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-cyber-purple hover:to-cyber-pink hover:bg-clip-text hover:text-transparent"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6 backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-pink to-cyber-yellow">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.slice(5).map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-cyber-purple transition-all duration-300 flex items-center gap-2 hover:scale-105 group"
                  >
                    <span className="group-hover:bg-gradient-to-r group-hover:from-cyber-purple group-hover:to-cyber-pink group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {link.name}
                    </span>
                    <ExternalLink className="h-3 w-3 group-hover:text-cyber-purple" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Educational Disclaimer */}
        <div className="mb-8">
          <div className="backdrop-blur-sm bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-4 rounded-xl border border-amber-500/30 text-center">
            <p className="text-amber-200/90 text-sm">
              This tool is provided for informational, educational, and research purposes only.
            </p>
          </div>
        </div>

        {/* More AI Tools Button */}
        <div className="flex justify-center md:justify-end mb-8">
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyber-purple via-cyber-pink to-cyber-blue text-white font-bold shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-1 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt"></div>
            <span className="relative z-10">More AI Tools</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gradient-to-r from-cyber-purple/30 via-cyber-pink/30 to-cyber-blue/30 text-center">
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-white/60 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyber-purple hover:to-cyber-pink transition-all duration-300 hover:scale-105"
          >
            © 2025 AI WEB TOOLS LLC. All rights reserved.
          </a>
        </div>
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-cyber-purple rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-cyber-pink rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-2 h-2 bg-cyber-blue rounded-full animate-bounce"></div>
    </footer>
  );
};

export default Footer;
