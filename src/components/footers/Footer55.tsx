import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, LinkedInIcon, GithubIcon } from '../icons';
import { MapPinIcon, EmailIcon, PhoneIcon } from '../icons';

const Footer55: React.FC = () => {
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-4 gap-12">
          <div><Logo variant="white" /><p className="mt-4 text-gray-400 text-sm">High level experience in web design and development knowledge.</p><div className="flex gap-3 mt-4"><a href="#" className="text-gray-400 hover:text-white"><FacebookIcon size={18} /></a><a href="#" className="text-gray-400 hover:text-white"><TwitterIcon size={18} /></a><a href="#" className="text-gray-400 hover:text-white"><GithubIcon size={18} /></a><a href="#" className="text-gray-400 hover:text-white"><TelegramIcon size={18} /></a><a href="#" className="text-gray-400 hover:text-white"><InstagramIcon size={18} /></a><a href="#" className="text-gray-400 hover:text-white"><LinkedInIcon size={18} /></a></div></div>
          <div><h4 className="font-semibold mb-4">Company</h4><nav className="space-y-2">{companyLinks.map((item) => (<a key={item} href="#" className="block text-sm text-gray-400 hover:text-white">{item}</a>))}</nav></div>
          <div><h4 className="font-semibold mb-4">Contact</h4><div className="space-y-3"><div className="flex items-start gap-3"><MapPinIcon className="text-gray-400 mt-1" size={16} /><p className="text-gray-400 text-sm">Wisconsin Ave, Suite 700<br />Chevy Chase, Maryland 20815</p></div><div className="flex items-center gap-3"><EmailIcon className="text-gray-400" size={16} /><span className="text-gray-400 text-sm">support@figma.com</span></div><div className="flex items-center gap-3"><PhoneIcon className="text-gray-400" size={16} /><span className="text-gray-400 text-sm">+1 800 854-36-80</span></div></div></div>
          <div><h4 className="font-semibold mb-4">Subscribe</h4><div className="space-y-3"><input type="email" placeholder="Email" className="w-full px-4 py-2 rounded bg-gray-800 text-white text-sm focus:outline-none" /><button className="w-full py-2 bg-blue-500 text-white rounded font-medium text-sm hover:bg-blue-600">Subscribe</button></div></div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-gray-800"><p className="text-gray-500 text-sm">© 2021 All Rights Reserved</p></div>
      </div>
    </footer>
  );
};

export default Footer55;
