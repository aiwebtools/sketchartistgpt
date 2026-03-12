
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  const navLinks = [
    { name: 'Sketch Artist GPT', href: 'https://chatgpt.com/g/g-67e13d4c3c6c81918c22e1a147fb209d-sketch-artist-gpt', external: true },
    { name: 'Coloring Book Generator GPT', href: 'https://coloringbookmaker.lovable.app/?via=aiwebtools', external: true },
    { name: 'FAQ', href: '#faq', external: false },
    { name: 'Disclaimer', href: '#disclaimer', external: false },
    { name: 'More AI Tools', href: 'https://aiwebtools.lovable.app/?via=aiwebtools', external: true },
  ];

  const renderLink = (link: typeof navLinks[0], className: string, onClick?: () => void) => {
    const props = {
      key: link.name,
      href: link.href,
      className,
      onClick,
      ...(link.external ? { target: '_blank' as const, rel: 'noopener noreferrer' } : {}),
    };
    return <a {...props}>{link.name}</a>;
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'py-2 sm:py-3 bg-cyber-black/90 backdrop-blur-lg shadow-lg' : 'py-3 sm:py-5 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-4 xl:space-x-8">
              {navLinks.map((link) =>
                renderLink(link, 'text-white/80 hover:text-cyber-purple transition-colors duration-200 px-2 py-1 text-xs lg:text-sm font-medium whitespace-nowrap')
              )}
            </div>

            {/* Mobile Navigation Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white focus:outline-none p-2 -mr-2 touch-manipulation"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-cyber-purple" />
              ) : (
                <Menu className="h-6 w-6 text-cyber-purple" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed top-0 right-0 z-50 h-full w-[280px] max-w-[80vw] bg-cyber-dark/98 backdrop-blur-xl border-l border-cyber-purple/30 transform transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="text-white p-2 touch-manipulation"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-cyber-purple" />
          </button>
        </div>
        <div className="px-4 py-2 space-y-1 overflow-y-auto max-h-[calc(100vh-80px)]">
          {navLinks.map((link) =>
            renderLink(
              link,
              'block text-white/80 hover:text-cyber-purple active:text-cyber-purple px-4 py-3 text-base font-medium rounded-lg hover:bg-cyber-purple/10 active:bg-cyber-purple/20 transition-colors duration-150 touch-manipulation',
              closeMenu
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
