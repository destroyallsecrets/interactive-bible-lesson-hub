
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-serif font-semibold text-bible-navy">
            Bible Study
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/lessons" className="nav-link">Lessons</Link>
          <a href="#about" className="nav-link">About</a>
          <a href="#resources" className="nav-link">Resources</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-bible-navy hover:text-bible-navy/80 transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in">
            <nav className="flex flex-col py-4 px-6">
              <Link 
                to="/" 
                className="py-3 px-4 hover:bg-bible-parchment transition-colors duration-200 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/lessons" 
                className="py-3 px-4 hover:bg-bible-parchment transition-colors duration-200 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Lessons
              </Link>
              <a 
                href="#about" 
                className="py-3 px-4 hover:bg-bible-parchment transition-colors duration-200 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
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
      </div>
    </header>
  );
};

export default Header;
