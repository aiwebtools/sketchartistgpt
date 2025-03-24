
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sketch Artist GPT', href: 'https://chatgpt.com/g/g-67e13d4c3c6c81918c22e1a147fb209d-sketch-artist-gpt', external: true },
    { name: 'Coloring Book Generator GPT', href: 'https://coloringbookmaker.lovable.app/?via=aiwebtools', external: true },
    { name: 'FAQ', href: '#faq', external: false },
    { name: 'Disclaimer', href: '#disclaimer', external: false },
    { name: 'More AI Tools', href: 'https://www.aiwebtools.ai', external: true },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-cyber-black/90 backdrop-blur-lg shadow-lg' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.external ? (
                <a 
                  key={link.name} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-cyber-purple transition-colors duration-300 px-2 py-1 text-sm font-medium"
                >
                  {link.name}
                </a>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-white/80 hover:text-cyber-purple transition-colors duration-300 px-2 py-1 text-sm font-medium"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-cyber-purple" />
              ) : (
                <Menu className="h-6 w-6 text-cyber-purple" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cyber-dark/95 backdrop-blur-lg border-t border-cyber-purple/30 animate-slide-up">
          <div className="px-4 py-3 space-y-3">
            {navLinks.map((link) => (
              link.external ? (
                <a 
                  key={link.name} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-white/80 hover:text-cyber-purple px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="block text-white/80 hover:text-cyber-purple px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
