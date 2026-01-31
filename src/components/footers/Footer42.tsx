import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, LinkedInIcon } from '../icons';

const Footer42: React.FC = () => {
  const productLinks = ['Landing Page', 'Popup Builder', 'Web-design', 'Content', 'Integrations'];
  const useCaseLinks = ['Web-designers', 'Marketers', 'Small Business', 'Website Builder'];
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-12">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-5 gap-8">
          <div><Logo variant="white" /><p className="mt-4 text-white/70 text-sm">High level experience in web design.</p><div className="flex gap-3 mt-4"><a href="#" className="text-white/70 hover:text-white"><FacebookIcon size={18} /></a><a href="#" className="text-white/70 hover:text-white"><TwitterIcon size={18} /></a><a href="#" className="text-white/70 hover:text-white"><TelegramIcon size={18} /></a><a href="#" className="text-white/70 hover:text-white"><InstagramIcon size={18} /></a><a href="#" className="text-white/70 hover:text-white"><LinkedInIcon size={18} /></a></div></div>
          <div><h4 className="font-semibold mb-4">Product</h4><nav className="space-y-2">{productLinks.map((item) => (<a key={item} href="#" className="block text-sm text-white/70 hover:text-white">{item}</a>))}</nav></div>
          <div><h4 className="font-semibold mb-4">Use Cases</h4><nav className="space-y-2">{useCaseLinks.map((item) => (<a key={item} href="#" className="block text-sm text-white/70 hover:text-white">{item}</a>))}</nav></div>
          <div><h4 className="font-semibold mb-4">Company</h4><nav className="space-y-2">{companyLinks.map((item) => (<a key={item} href="#" className="block text-sm text-white/70 hover:text-white">{item}</a>))}</nav></div>
          <div><h4 className="font-semibold mb-4">Subscribe</h4><div className="flex"><input type="email" placeholder="Email" className="flex-1 px-4 py-2 rounded-l bg-white/20 text-white text-sm placeholder:text-white/60 focus:outline-none" /><button className="px-4 py-2 bg-white text-blue-500 rounded-r font-medium text-sm">Subscribe</button></div></div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-white/20"><p className="text-white/60 text-sm">© 2021 All Rights Reserved</p></div>
      </div>
    </footer>
  );
};

export default Footer42;
