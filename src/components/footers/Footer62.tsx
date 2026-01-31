import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, LinkedInIcon } from '../icons';

const Footer62: React.FC = () => {
  const navLinks = ['About', 'Features', 'Pricing', 'Gallery', 'Team'];

  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="flex items-center justify-between mb-6">
          <Logo />
          <nav className="flex gap-8">{navLinks.map((item) => (<a key={item} href="#" className="text-gray-500 hover:text-gray-900">{item}</a>))}</nav>
          <div className="flex gap-4"><a href="#" className="text-gray-400 hover:text-gray-600"><FacebookIcon size={20} /></a><a href="#" className="text-gray-400 hover:text-gray-600"><TwitterIcon size={20} /></a><a href="#" className="text-gray-400 hover:text-gray-600"><TelegramIcon size={20} /></a><a href="#" className="text-gray-400 hover:text-gray-600"><InstagramIcon size={20} /></a><a href="#" className="text-gray-400 hover:text-gray-600"><LinkedInIcon size={20} /></a></div>
        </div>
        <div className="border-t border-gray-200 pt-6 text-center"><p className="text-gray-400 text-sm">© 2021 All Rights Reserved</p></div>
      </div>
    </footer>
  );
};

export default Footer62;
