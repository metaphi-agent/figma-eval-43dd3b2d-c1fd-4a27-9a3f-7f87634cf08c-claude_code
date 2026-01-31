import React from 'react';
import { Logo } from '../ui/Logo';

const Footer36: React.FC = () => {
  return (
    <footer className="relative h-[500px] overflow-hidden">
      {/* Large background image placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-[1440px] mx-auto px-20 py-12 h-full flex flex-col justify-between text-white">
        <Logo variant="white" />
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Let's work together</h2>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">High level experience in web design and development knowledge, producing quality work.</p>
          <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors">Contact Us</button>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-white/60 text-sm">© 2021 All Rights Reserved</p>
          <p className="text-white/60 text-sm">+1 800 854-36-80</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer36;
