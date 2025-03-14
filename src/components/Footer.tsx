import React from 'react';
import { Code, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark-300 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Code className="h-6 w-6 text-primary-500 mr-2" />
            <span className="text-white font-bold text-xl font-mono">Ryan.Miller</span>
          </div>          
          <div className="text-center md:text-left mb-4 md:mb-0">
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-3 bg-primary-500/10 hover:bg-primary-500/20 rounded-full text-primary-400 transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
