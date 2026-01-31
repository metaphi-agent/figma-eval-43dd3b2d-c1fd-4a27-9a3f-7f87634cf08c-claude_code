import React from 'react';
import { Logo } from '../ui/Logo';

const Footer41: React.FC = () => {
  return (
    <footer className="relative h-96 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-pink-500" />
      <div className="relative z-10 max-w-[1440px] mx-auto px-20 py-12 h-full flex flex-col justify-between text-white">
        <Logo variant="white" />
        <div className="text-center"><h2 className="text-3xl font-bold mb-4">Get started today</h2><p className="text-white/70 mb-6">Start building your dream website</p><button className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors">Contact Us</button></div>
        <p className="text-center text-white/60 text-sm">© 2021 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer41;
