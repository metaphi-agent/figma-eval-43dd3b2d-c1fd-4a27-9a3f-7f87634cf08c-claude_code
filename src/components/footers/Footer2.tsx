import React from 'react';
import { LogoColorful } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon } from '../icons';
import { SearchIcon } from '../icons';

const Footer2: React.FC = () => {
  return (
    <footer className="bg-[#2d2d2d] text-white">
      <div className="max-w-[1440px] mx-auto px-20 py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <LogoColorful />

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {['About', 'Features', 'Pricing', 'Gallery', 'Team'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Search */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="search..."
                className="w-40 bg-transparent border border-gray-600 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-white transition-colors"
              />
              <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TelegramIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6" />

        {/* Legal Links */}
        <nav className="flex justify-center gap-8">
          {['Privacy Policy', 'Terms of Use', 'Sales and Refunds', 'Legal', 'Site Map'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer2;
