
import React from 'react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // On mount, read the preferred theme from local storage or system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? theme === 'dark' 
          ? 'bg-portfolio-navy shadow-lg shadow-portfolio-navy/20 py-2' 
          : 'bg-white shadow-md py-2'
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border-2 border-portfolio-orange transition-all duration-300 hover:scale-110">
            <AvatarImage src="/profile-vivek.jpg" alt="Vivek Sharma" />
            <AvatarFallback className="bg-portfolio-orange text-white">VS</AvatarFallback>
          </Avatar>
          <a href="#" className={`text-xl md:text-2xl font-bold transition-all duration-300 ${
            theme === 'dark' ? 'text-white hover:text-portfolio-orange' : 'text-portfolio-navy hover:text-portfolio-orange'
          } transform hover:scale-105`}>
            Vivek<span className="text-portfolio-orange transition-all duration-300 hover:text-portfolio-navy">.</span>dev
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {['About', 'Skills', 'Projects', 'Certifications', 'Education', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`${
                theme === 'dark' ? 'text-gray-300 hover:text-portfolio-orange' : 'text-portfolio-dark-gray hover:text-portfolio-orange'
              } transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-portfolio-orange after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
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
          <div className="flex items-center space-x-2 ml-4 p-1 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-portfolio-navy/50">
            <Sun className={`h-4 w-4 ${theme === 'dark' ? 'text-gray-400' : 'text-yellow-500'} transition-all duration-300`} />
            <Switch 
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
              className={`${theme === 'dark' ? 'bg-portfolio-navy' : 'bg-portfolio-orange'}`}
            />
            <Moon className={`h-4 w-4 ${theme === 'dark' ? 'text-blue-400' : 'text-gray-400'} transition-all duration-300`} />
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <div className="flex items-center p-1 mr-2 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-portfolio-navy/50">
            <Switch 
              checked={theme === 'dark'} 
              onCheckedChange={toggleTheme}
              className={`${theme === 'dark' ? 'bg-portfolio-navy' : 'bg-portfolio-orange'} scale-75`}
            />
          </div>
          <button 
            className={`p-2 transition-transform duration-300 hover:scale-110 ${
              theme === 'dark' ? 'text-white' : 'text-portfolio-navy'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden ${theme === 'dark' ? 'bg-portfolio-navy/95' : 'bg-white'} shadow-lg absolute w-full transition-all duration-300 origin-top ${
          isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col py-4 px-6 space-y-4">
          {['About', 'Skills', 'Projects', 'Certifications', 'Education', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                theme === 'dark' ? 'text-white hover:text-portfolio-orange' : 'text-portfolio-dark-gray hover:text-portfolio-orange'
              } transition-all duration-300 hover:translate-x-2`}
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
