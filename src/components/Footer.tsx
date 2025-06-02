
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
    <footer className="bg-cyber-dark/90 border-t border-cyber-purple/20 pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Educational Disclaimer */}
        <div className="mb-8 text-center">
          <p className="text-sm text-white/60 italic">
            This tool is provided for informational, educational, and research purposes only and is experimental in nature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-2">
              <a href="tel:+14758008096" className="flex items-center gap-2 text-white/70 hover:text-cyber-purple transition-colors">
                <Phone className="h-4 w-4" />
                <span>(475) 800-8096</span>
              </a>
              <a href="mailto:Contact@ai-webtools.com" className="flex items-center gap-2 text-white/70 hover:text-cyber-purple transition-colors">
                <Mail className="h-4 w-4" />
                <span>Contact@ai-webtools.com</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-cyber-purple transition-colors flex items-center gap-1"
                    >
                      {link.name}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-cyber-purple transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.slice(5).map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-cyber-purple transition-colors flex items-center gap-1"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* More AI Tools Button */}
        <div className="mt-12 flex justify-center md:justify-end">
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-cyber-purple to-cyber-pink text-white font-medium shadow-neon-purple transition-all hover:shadow-neon-pink hover:scale-105"
          >
            More AI Tools
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-white/50 hover:text-cyber-purple transition-colors"
          >
            © 2025 AI WEB TOOLS LLC. All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
