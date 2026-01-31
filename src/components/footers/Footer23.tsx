import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, GithubIcon, HeadhunterIcon } from '../icons';

const Footer23: React.FC = () => {
  const navLinks = ['About', 'Features', 'Pricing', 'Gallery', 'Team'];
  const legalLinks = ['Privacy Policy', 'Terms of Use', 'Sales and Refunds', 'Legal', 'Site Map'];

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-[1440px] mx-auto px-20 py-12">
        <div className="flex items-center justify-between mb-8">
          <Logo variant="white" />
          <nav className="flex gap-8">
            {navLinks.map((item) => (<a key={item} href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>))}
          </nav>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><GithubIcon size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><TelegramIcon size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><HeadhunterIcon size={20} /></a>
          </div>
        </div>

        <div className="border-t border-gray-800" />

        <div className="flex items-center justify-between mt-8">
          <p className="text-gray-500 text-sm">© 2021 All Rights Reserved</p>
          <nav className="flex gap-6">
            {legalLinks.map((item) => (<a key={item} href="#" className="text-sm text-gray-500 hover:text-white transition-colors">{item}</a>))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer23;
