import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon } from '../icons';

const Footer37: React.FC = () => {
  const navLinks = ['About', 'Features', 'Pricing', 'Gallery', 'Team'];

  return (
    <footer className="bg-[#1a1a1a] text-white py-8">
      <div className="max-w-[1440px] mx-auto px-20 flex items-center justify-between">
        <Logo variant="white" />
        <nav className="flex gap-8">{navLinks.map((item) => (<a key={item} href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>))}</nav>
        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><TelegramIcon size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer37;
