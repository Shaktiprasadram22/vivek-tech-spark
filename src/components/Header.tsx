
import React from 'react';
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border-2 border-portfolio-orange transition-all duration-300 hover:scale-105">
            <AvatarImage src="https://media.licdn.com/dms/image/v2/D4E03AQGyX_i3AU8AYA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1665151988738?e=1751500800&v=beta&t=EjbEDBebPG_Ey168q-phbifv08elWt6cZGOL0YwkFjw" alt="Vivek" />
            <AvatarFallback>VS</AvatarFallback>
          </Avatar>
          <a href="#" className="text-portfolio-navy text-xl md:text-2xl font-bold transition-all duration-300 hover:text-portfolio-orange transform hover:scale-105">
            Vivek<span className="text-portfolio-orange transition-all duration-300 hover:text-portfolio-navy">.</span>dev
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {['About', 'Skills', 'Projects', 'Certifications', 'Education', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-portfolio-dark-gray hover:text-portfolio-orange transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-portfolio-orange after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {item}
            </a>
          ))}
          <a 
            href="https://drive.google.com/file/d/186it-y4Z2idwoToiOGjyWHf2nRxqMmqk/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-portfolio-orange hover:bg-portfolio-navy text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md">
              Resume
            </Button>
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-navy p-2 transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-white shadow-lg absolute w-full transition-all duration-300 origin-top ${
          isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col py-4 px-6 space-y-4">
          {['About', 'Skills', 'Projects', 'Certifications', 'Education', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-portfolio-dark-gray hover:text-portfolio-orange transition-all duration-300 hover:translate-x-2"
            >
              {item}
            </a>
          ))}
          <a 
            href="https://drive.google.com/file/d/186it-y4Z2idwoToiOGjyWHf2nRxqMmqk/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-portfolio-orange hover:bg-portfolio-navy text-white font-medium w-full transition-all duration-300 hover:shadow-md">
              Resume
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
