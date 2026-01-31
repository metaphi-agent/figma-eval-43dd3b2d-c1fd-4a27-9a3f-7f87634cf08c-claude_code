import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, LinkedInIcon } from '../icons';

const Footer49: React.FC = () => {
  const productLinks = ['Landing Page', 'Popup Builder', 'Web-design', 'Content', 'Integrations'];
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-4 gap-12">
          <div><Logo /><p className="mt-4 text-gray-500 text-sm">High level experience in web design.</p></div>
          <div><h4 className="font-semibold text-gray-900 mb-4">Product</h4><nav className="space-y-2">{productLinks.map((item) => (<a key={item} href="#" className="block text-sm text-gray-500 hover:text-gray-900">{item}</a>))}</nav></div>
          <div><h4 className="font-semibold text-gray-900 mb-4">Company</h4><nav className="space-y-2">{companyLinks.map((item) => (<a key={item} href="#" className="block text-sm text-gray-500 hover:text-gray-900">{item}</a>))}</nav></div>
          <div><h4 className="font-semibold text-gray-900 mb-4">Follow us</h4><div className="flex gap-3"><a href="#" className="text-gray-400 hover:text-gray-600"><FacebookIcon size={20} /></a><a href="#" className="text-gray-400 hover:text-gray-600"><TwitterIcon size={20} /></a><a href="#" className="text-gray-400 hover:text-gray-600"><TelegramIcon size={20} /></a><a href="#" className="text-gray-400 hover:text-gray-600"><InstagramIcon size={20} /></a><a href="#" className="text-gray-400 hover:text-gray-600"><LinkedInIcon size={20} /></a></div></div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-gray-200"><p className="text-gray-400 text-sm">© 2021 All Rights Reserved</p></div>
      </div>
    </footer>
  );
};

export default Footer49;
