import React from 'react';
import { Logo } from '../ui/Logo';

const Footer45: React.FC = () => {
  return (
    <footer className="relative min-h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600" />
      <div className="relative z-10 max-w-[1440px] mx-auto px-20 py-16 text-white h-full flex flex-col justify-between">
        <Logo variant="white" />
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6">Let's create something amazing</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">High level experience in web design and development knowledge, producing quality work.</p>
          <button className="px-10 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">Get Started</button>
        </div>
        <div className="flex items-center justify-between"><p className="text-white/60 text-sm">© 2021 All Rights Reserved</p><p className="text-white/60 text-sm">+1 800 854-36-80</p></div>
      </div>
    </footer>
  );
};

export default Footer45;
