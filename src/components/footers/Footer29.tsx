import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, LinkedInIcon } from '../icons';

const Footer29: React.FC = () => {
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="bg-white py-12">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-3 gap-12">
          <div>
            <Logo />
            <p className="mt-4 text-gray-500 text-sm">High level experience in web design and development knowledge.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <nav className="space-y-2">{companyLinks.map((item) => (<a key={item} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">{item}</a>))}</nav>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Follow us</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors"><FacebookIcon size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors"><TwitterIcon size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors"><TelegramIcon size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors"><InstagramIcon size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors"><LinkedInIcon size={18} /></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-sm">© 2021 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer29;
