import React from 'react';
import { Logo } from '../ui/Logo';
import { GithubIcon, HeadhunterIcon, InstagramIcon, TwitterIcon } from '../icons';

const Footer10: React.FC = () => {
  const navLinks = ['About', 'Features', 'Pricing', 'Gallery', 'Team'];
  const legalLinks = ['Privacy Policy', 'Terms of Use', 'Sales and Refunds', 'Legal', 'Site Map'];

  return (
    <footer className="relative overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0 bg-blue-500">
        <svg className="absolute top-0 w-full" viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path
            fill="white"
            d="M0,100 C200,50 400,150 600,100 C800,50 1000,150 1200,100 C1300,75 1400,125 1440,100 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-20 pt-24 pb-8">
        <div className="grid grid-cols-3 gap-12">
          {/* Left - Logo & Button */}
          <div>
            <Logo variant="white" />
            <button className="mt-6 px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </div>

          {/* Center - Nav */}
          <div>
            <nav className="space-y-3">
              {navLinks.map((item) => (
                <a key={item} href="#" className="block text-white hover:text-white/80 transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Right - Social */}
          <div className="flex flex-col items-end gap-3">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <GithubIcon size={24} />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <HeadhunterIcon size={24} />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <InstagramIcon size={24} />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <TwitterIcon size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between mt-16 pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm">© 2021 All Rights Reserved</p>
          <nav className="flex gap-6">
            {legalLinks.map((item) => (
              <a key={item} href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <p className="text-white/60 text-sm">+1 800 854-36-80</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer10;
