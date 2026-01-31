import React from 'react';
import { Logo } from '../ui/Logo';
import { MapPinIcon, EmailIcon, PhoneIcon } from '../icons';

const Footer43: React.FC = () => {
  return (
    <footer className="relative min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-600" />
      <div className="relative z-10 max-w-[1440px] mx-auto px-20 py-16 text-white">
        <div className="grid grid-cols-2 gap-16">
          <div>
            <Logo variant="white" />
            <h2 className="text-4xl font-bold mt-8 mb-4">Professional Web Design</h2>
            <p className="text-white/70 mb-8 max-w-md">High level experience in web design and development knowledge, producing quality work.</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3"><MapPinIcon className="text-white/70 mt-1" size={18} /><p className="text-white/70 text-sm">Wisconsin Ave, Suite 700<br />Chevy Chase, Maryland 20815</p></div>
              <div className="flex items-center gap-3"><EmailIcon className="text-white/70" size={18} /><a href="mailto:support@figma.com" className="text-white/70 text-sm hover:text-white">support@figma.com</a></div>
              <div className="flex items-center gap-3"><PhoneIcon className="text-white/70" size={18} /><a href="tel:+18008543680" className="text-white/70 text-sm hover:text-white">+1 800 854-36-80</a></div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6">Contact us</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 text-sm focus:outline-none" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 text-sm focus:outline-none" />
              <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 text-sm focus:outline-none" />
              <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 text-sm focus:outline-none resize-none" />
              <button className="w-full py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">Send</button>
            </form>
          </div>
        </div>
        <p className="text-center text-white/60 text-sm mt-16">© 2021 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer43;
