import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, LinkedInIcon } from '../icons';
import { MapPinIcon, EmailIcon, PhoneIcon } from '../icons';

const Footer33: React.FC = () => {
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-4 gap-12">
          <div>
            <Logo variant="white" />
            <p className="mt-4 text-gray-400 text-sm">High level experience in web design and development knowledge.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <nav className="space-y-2">{companyLinks.map((item) => (<a key={item} href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">{item}</a>))}</nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3"><MapPinIcon className="text-gray-400 mt-1" size={16} /><p className="text-gray-400 text-sm">Wisconsin Ave, Suite 700</p></div>
              <div className="flex items-center gap-3"><EmailIcon className="text-gray-400" size={16} /><a href="mailto:support@figma.com" className="text-gray-400 text-sm hover:text-white transition-colors">support@figma.com</a></div>
              <div className="flex items-center gap-3"><PhoneIcon className="text-gray-400" size={16} /><a href="tel:+18008543680" className="text-gray-400 text-sm hover:text-white transition-colors">+1 800 854-36-80</a></div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow us</h4>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><TelegramIcon size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><LinkedInIcon size={20} /></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-gray-800"><p className="text-gray-500 text-sm">© 2021 All Rights Reserved</p></div>
      </div>
    </footer>
  );
};

export default Footer33;
