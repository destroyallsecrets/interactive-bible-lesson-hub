
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled 
          ? "bg-white/90 backdrop-blur-sm shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-xl font-serif font-semibold text-bible-navy">
            Bible Study
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="/" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#lessons" className="nav-link">Lessons</a>
          <a href="#resources" className="nav-link">Resources</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-bible-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in">
          <nav className="flex flex-col py-4 px-6">
            <a 
              href="/" 
              className="py-3 px-4 hover:bg-bible-parchment transition-colors duration-200 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="py-3 px-4 hover:bg-bible-parchment transition-colors duration-200 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#lessons" 
              className="py-3 px-4 hover:bg-bible-parchment transition-colors duration-200 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Lessons
            </a>
            <a 
              href="#resources" 
              className="py-3 px-4 hover:bg-bible-parchment transition-colors duration-200 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </a>
            <a 
              href="#contact" 
              className="py-3 px-4 hover:bg-bible-parchment transition-colors duration-200 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
