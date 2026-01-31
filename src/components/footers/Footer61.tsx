import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon } from '../icons';

const Footer61: React.FC = () => {
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-[1440px] mx-auto px-20 flex items-start justify-between">
        <Logo />
        <div><h4 className="font-semibold text-gray-900 mb-4">Company</h4><nav className="flex gap-6">{companyLinks.map((item) => (<a key={item} href="#" className="text-sm text-gray-500 hover:text-gray-900">{item}</a>))}</nav></div>
        <div className="flex gap-4"><a href="#" className="text-gray-400 hover:text-gray-600"><FacebookIcon size={20} /></a><a href="#" className="text-gray-400 hover:text-gray-600"><TwitterIcon size={20} /></a><a href="#" className="text-gray-400 hover:text-gray-600"><TelegramIcon size={20} /></a><a href="#" className="text-gray-400 hover:text-gray-600"><InstagramIcon size={20} /></a></div>
      </div>
    </footer>
  );
};

export default Footer61;
