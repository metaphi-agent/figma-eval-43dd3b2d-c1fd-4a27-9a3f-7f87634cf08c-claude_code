import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon } from '../icons';

const Footer48: React.FC = () => {
  const navLinks = ['About', 'Features', 'Pricing', 'Gallery', 'Team'];

  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-[1440px] mx-auto px-20 flex items-center justify-between">
        <Logo />
        <nav className="flex gap-8">{navLinks.map((item) => (<a key={item} href="#" className="text-gray-500 hover:text-gray-900 transition-colors">{item}</a>))}</nav>
        <div className="flex gap-4"><a href="#" className="text-gray-400 hover:text-gray-600"><FacebookIcon size={20} /></a><a href="#" className="text-gray-400 hover:text-gray-600"><TwitterIcon size={20} /></a><a href="#" className="text-gray-400 hover:text-gray-600"><TelegramIcon size={20} /></a><a href="#" className="text-gray-400 hover:text-gray-600"><InstagramIcon size={20} /></a></div>
      </div>
    </footer>
  );
};

export default Footer48;
