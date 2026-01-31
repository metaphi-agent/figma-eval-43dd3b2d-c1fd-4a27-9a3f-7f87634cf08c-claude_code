import React from 'react';
import { LogoColorful } from '../ui/Logo';

const Footer69: React.FC = () => {
  const navLinks = ['About', 'Features', 'Pricing', 'Gallery', 'Team'];

  return (
    <footer className="bg-white py-8">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="flex items-center justify-between">
          <LogoColorful />
          <nav className="flex gap-10">
            {navLinks.map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-gray-900">{item}</a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-gray-900 font-medium">Let's do it!</span>
            <span className="text-gray-400">—</span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer69;
