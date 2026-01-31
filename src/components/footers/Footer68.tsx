import React from 'react';
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedInIcon } from '../icons';

const Footer68: React.FC = () => {
  const navLinks = ['About', 'Features', 'Pricing', 'Gallery', 'Team'];

  // Minimal colored bars logo
  const LogoBars = () => (
    <div className="flex gap-1">
      <div className="w-1 h-6 bg-[#FF3366] rounded-full"></div>
      <div className="w-1 h-6 bg-[#FFCC00] rounded-full"></div>
      <div className="w-1 h-6 bg-[#00CCFF] rounded-full"></div>
    </div>
  );

  return (
    <footer className="bg-white py-8">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="flex items-center justify-between">
          <LogoBars />
          <nav className="flex gap-10">
            {navLinks.map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-gray-900">{item}</a>
            ))}
          </nav>
          <div className="flex gap-5">
            <a href="#" className="text-gray-400 hover:text-gray-600"><FacebookIcon size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-600"><InstagramIcon size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-600"><YoutubeIcon size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-600"><LinkedInIcon size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer68;
