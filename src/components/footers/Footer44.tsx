import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, LinkedInIcon } from '../icons';
import { MapPinIcon, EmailIcon, PhoneIcon } from '../icons';

const Footer44: React.FC = () => {
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-12">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-4 gap-12">
          <div><Logo variant="white" /><p className="mt-4 text-white/70 text-sm">High level experience in web design.</p></div>
          <div><h4 className="font-semibold mb-4">Company</h4><nav className="space-y-2">{companyLinks.map((item) => (<a key={item} href="#" className="block text-sm text-white/70 hover:text-white">{item}</a>))}</nav></div>
          <div><h4 className="font-semibold mb-4">Contact</h4><div className="space-y-3"><div className="flex items-start gap-3"><MapPinIcon className="text-white/70 mt-1" size={16} /><p className="text-white/70 text-sm">Wisconsin Ave, Suite 700</p></div><div className="flex items-center gap-3"><EmailIcon className="text-white/70" size={16} /><span className="text-white/70 text-sm">support@figma.com</span></div><div className="flex items-center gap-3"><PhoneIcon className="text-white/70" size={16} /><span className="text-white/70 text-sm">+1 800 854-36-80</span></div></div></div>
          <div><h4 className="font-semibold mb-4">Follow us</h4><div className="flex gap-3"><a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"><FacebookIcon size={18} /></a><a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"><TwitterIcon size={18} /></a><a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"><TelegramIcon size={18} /></a><a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"><InstagramIcon size={18} /></a><a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"><LinkedInIcon size={18} /></a></div></div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-white/20"><p className="text-white/60 text-sm">© 2021 All Rights Reserved</p></div>
      </div>
    </footer>
  );
};

export default Footer44;
