import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, LinkedInIcon, GithubIcon } from '../icons';

const Footer47: React.FC = () => {
  const productLinks = ['Landing Page', 'Popup Builder', 'Web-design', 'Content', 'Integrations'];
  const resourceLinks = ['Academy', 'Blog', 'Themes', 'Hosting', 'Developers', 'Support'];
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-12">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-5 gap-8">
          <div><Logo variant="white" /><div className="flex gap-3 mt-4"><a href="#" className="text-white/70 hover:text-white"><FacebookIcon size={18} /></a><a href="#" className="text-white/70 hover:text-white"><TwitterIcon size={18} /></a><a href="#" className="text-white/70 hover:text-white"><GithubIcon size={18} /></a><a href="#" className="text-white/70 hover:text-white"><TelegramIcon size={18} /></a><a href="#" className="text-white/70 hover:text-white"><InstagramIcon size={18} /></a><a href="#" className="text-white/70 hover:text-white"><LinkedInIcon size={18} /></a></div></div>
          <div><h4 className="font-semibold mb-4">Product</h4><nav className="space-y-2">{productLinks.map((item) => (<a key={item} href="#" className="block text-sm text-white/70 hover:text-white">{item}</a>))}</nav></div>
          <div><h4 className="font-semibold mb-4">Resources</h4><nav className="space-y-2">{resourceLinks.map((item) => (<a key={item} href="#" className="block text-sm text-white/70 hover:text-white">{item}</a>))}</nav></div>
          <div><h4 className="font-semibold mb-4">Company</h4><nav className="space-y-2">{companyLinks.map((item) => (<a key={item} href="#" className="block text-sm text-white/70 hover:text-white">{item}</a>))}</nav></div>
          <div><h4 className="font-semibold mb-4">Subscribe</h4><div className="space-y-3"><input type="email" placeholder="Email" className="w-full px-4 py-2 rounded bg-white/20 text-white text-sm placeholder:text-white/60 focus:outline-none" /><button className="w-full py-2 bg-white text-pink-600 rounded font-medium text-sm">Subscribe</button></div></div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-white/20"><p className="text-white/60 text-sm">© 2021 All Rights Reserved</p></div>
      </div>
    </footer>
  );
};

export default Footer47;
