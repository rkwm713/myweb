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
    <footer className="bg-dark-100/90 backdrop-blur-md shadow-lg py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Code className="h-6 w-6 text-primary-500 mr-2" />
            <span className="text-white font-bold text-xl font-mono">Ryan.Miller</span>
          </div>          
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-300">Have a wonderful day!</p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-3 bg-dark-300 hover:bg-dark-200 rounded-full text-gray-400 hover:text-white transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
