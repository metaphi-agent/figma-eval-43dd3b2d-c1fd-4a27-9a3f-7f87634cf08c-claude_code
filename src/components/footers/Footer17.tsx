import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, LinkedInIcon } from '../icons';
import { MapPinIcon, EmailIcon, PhoneIcon } from '../icons';

const Footer17: React.FC = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500" />

      <div className="relative max-w-[1440px] mx-auto px-20 py-12 text-white">
        <div className="flex justify-between gap-12">
          {/* Left - Logo & Contact */}
          <div className="max-w-sm">
            <Logo variant="white" />
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <MapPinIcon className="text-white/70 mt-1 flex-shrink-0" size={18} />
                <p className="text-white/70 text-sm">
                  Wisconsin Ave, Suite 700<br />
                  Chevy Chase, Maryland 20815
                </p>
              </div>
              <div className="flex items-center gap-3">
                <EmailIcon className="text-white/70 flex-shrink-0" size={18} />
                <a href="mailto:support@figma.com" className="text-white/70 text-sm hover:text-white transition-colors">
                  support@figma.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="text-white/70 flex-shrink-0" size={18} />
                <a href="tel:+18008543680" className="text-white/70 text-sm hover:text-white transition-colors">
                  +1 800 854-36-80
                </a>
              </div>
            </div>
          </div>

          {/* Center - Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <FacebookIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <TwitterIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <TelegramIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <InstagramIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <LinkedInIcon size={18} />
              </a>
            </div>
          </div>

          {/* Right - Subscribe */}
          <div className="w-80">
            <h4 className="font-semibold mb-4">Subscribe</h4>
            <p className="text-white/70 text-sm mb-4">Subscribe for new web design and latest updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg bg-white/20 text-white placeholder:text-white/60 text-sm focus:outline-none focus:bg-white/30"
              />
              <button className="px-6 py-3 bg-white text-purple-600 rounded-r-lg font-medium text-sm hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm">© 2021 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer17;
