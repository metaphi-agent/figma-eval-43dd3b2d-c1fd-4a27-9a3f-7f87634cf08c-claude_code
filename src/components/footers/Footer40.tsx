import React from 'react';
import { Logo } from '../ui/Logo';
import { ChevronUpIcon } from '../icons';

const Footer40: React.FC = () => {
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];
  const socialLinks = ['Facebook', 'Linkedin', 'Instagram', 'Youtube', 'Twitter', 'Telegram'];

  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-4 gap-12">
          <div><Logo variant="white" /><p className="mt-4 text-gray-400 text-sm">High level experience in web design and development knowledge, producing quality work.</p></div>
          <div><h4 className="font-semibold mb-4">Company</h4><nav className="space-y-2">{companyLinks.map((item) => (<a key={item} href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">{item}</a>))}</nav></div>
          <div><h4 className="font-semibold mb-4">Subscribe</h4><form className="space-y-3"><input type="text" placeholder="Firs Name" className="w-full px-4 py-3 rounded bg-white text-gray-700 text-sm focus:outline-none" /><input type="email" placeholder="Email" className="w-full px-4 py-3 rounded bg-white text-gray-700 text-sm focus:outline-none" /><button className="w-full py-3 bg-white text-gray-900 rounded font-medium text-sm hover:bg-gray-100">SUBSCRIBE</button></form></div>
          <div><h4 className="font-semibold mb-4">Follow us</h4><nav className="space-y-2">{socialLinks.map((item) => (<a key={item} href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">{item}</a>))}</nav></div>
        </div>
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">© 2021 All Rights Reserved</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"><ChevronUpIcon size={20} /></button>
        </div>
      </div>
    </footer>
  );
};

export default Footer40;
