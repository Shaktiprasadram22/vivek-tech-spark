
import React from 'react';
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-portfolio-navy text-xl md:text-2xl font-bold">
          Vivek<span className="text-portfolio-orange">.dev</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {['About', 'Skills', 'Projects', 'Certifications', 'Education', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-portfolio-dark-gray hover:text-portfolio-orange transition-colors"
            >
              {item}
            </a>
          ))}
          <Button className="bg-portfolio-orange hover:bg-portfolio-navy text-white font-medium">
            Resume
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-navy p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            {['About', 'Skills', 'Projects', 'Certifications', 'Education', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-portfolio-dark-gray hover:text-portfolio-orange transition-colors"
              >
                {item}
              </a>
            ))}
            <Button className="bg-portfolio-orange hover:bg-portfolio-navy text-white font-medium w-full">
              Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
