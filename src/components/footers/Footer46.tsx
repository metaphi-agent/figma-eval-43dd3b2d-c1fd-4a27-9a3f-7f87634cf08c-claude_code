import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon } from '../icons';

const Footer46: React.FC = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-cyan-500 to-blue-500" />
      <div className="relative z-10 max-w-[1440px] mx-auto px-20 py-12 text-white">
        <div className="flex flex-col items-center text-center">
          <Logo variant="white" />
          <h2 className="text-3xl font-bold mt-6 mb-4">Stay Connected</h2>
          <p className="text-white/70 mb-6 max-w-md">Subscribe to get latest updates and news</p>
          <div className="flex gap-2 w-full max-w-md"><input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-l-lg bg-white/20 text-white placeholder:text-white/60 focus:outline-none" /><button className="px-6 py-3 bg-white text-gray-900 rounded-r-lg font-medium hover:bg-gray-100">Subscribe</button></div>
          <div className="flex gap-4 mt-8"><a href="#" className="text-white/70 hover:text-white"><FacebookIcon size={24} /></a><a href="#" className="text-white/70 hover:text-white"><TwitterIcon size={24} /></a><a href="#" className="text-white/70 hover:text-white"><TelegramIcon size={24} /></a><a href="#" className="text-white/70 hover:text-white"><InstagramIcon size={24} /></a></div>
        </div>
        <p className="text-center text-white/60 text-sm mt-12">© 2021 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer46;
