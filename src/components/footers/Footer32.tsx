import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, LinkedInIcon } from '../icons';

const Footer32: React.FC = () => {
  const productLinks = ['Landing Page', 'Popup Builder', 'Web-design', 'Content', 'Integrations'];
  const useCaseLinks = ['Web-designers', 'Marketers', 'Small Business', 'Website Builder'];
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-5 gap-8">
          <div>
            <Logo variant="white" />
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><TelegramIcon size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><LinkedInIcon size={18} /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <nav className="space-y-2">{productLinks.map((item) => (<a key={item} href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">{item}</a>))}</nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Use Cases</h4>
            <nav className="space-y-2">{useCaseLinks.map((item) => (<a key={item} href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">{item}</a>))}</nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <nav className="space-y-2">{companyLinks.map((item) => (<a key={item} href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">{item}</a>))}</nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Subscribe</h4>
            <div className="flex">
              <input type="email" placeholder="Enter email" className="flex-1 px-4 py-2 bg-gray-800 text-white text-sm rounded-l focus:outline-none" />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 transition-colors text-sm">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-gray-800"><p className="text-gray-500 text-sm">© 2021 All Rights Reserved</p></div>
      </div>
    </footer>
  );
};

export default Footer32;
