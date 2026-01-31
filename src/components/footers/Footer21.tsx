import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, LinkedInIcon, GithubIcon } from '../icons';
import { MapPinIcon, EmailIcon, PhoneIcon } from '../icons';

const Footer21: React.FC = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600" />
      <div className="relative max-w-[1440px] mx-auto px-20 py-12 text-white">
        <div className="grid grid-cols-3 gap-12">
          {/* Logo & Contact */}
          <div>
            <Logo variant="white" />
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <MapPinIcon className="text-white/70 mt-1 flex-shrink-0" size={18} />
                <p className="text-white/70 text-sm">Wisconsin Ave, Suite 700<br />Chevy Chase, Maryland 20815</p>
              </div>
              <div className="flex items-center gap-3">
                <EmailIcon className="text-white/70 flex-shrink-0" size={18} />
                <a href="mailto:support@figma.com" className="text-white/70 text-sm hover:text-white transition-colors">support@figma.com</a>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="text-white/70 flex-shrink-0" size={18} />
                <a href="tel:+18008543680" className="text-white/70 text-sm hover:text-white transition-colors">+1 800 854-36-80</a>
              </div>
            </div>
          </div>

          {/* Center - Social with labels */}
          <div>
            <h4 className="font-semibold mb-4">Follow us</h4>
            <div className="grid grid-cols-2 gap-3">
              <a href="#" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"><FacebookIcon size={18} /><span>Facebook</span></a>
              <a href="#" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"><TwitterIcon size={18} /><span>Twitter</span></a>
              <a href="#" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"><TelegramIcon size={18} /><span>Telegram</span></a>
              <a href="#" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"><InstagramIcon size={18} /><span>Instagram</span></a>
              <a href="#" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"><LinkedInIcon size={18} /><span>LinkedIn</span></a>
              <a href="#" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"><GithubIcon size={18} /><span>Github</span></a>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-semibold mb-4">Subscribe</h4>
            <p className="text-white/70 text-sm mb-4">Get the latest updates and offers</p>
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-l bg-white/20 text-white placeholder:text-white/60 text-sm focus:outline-none" />
              <button className="px-6 py-3 bg-white text-purple-600 rounded-r font-medium text-sm hover:bg-white/90 transition-colors">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm">© 2021 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer21;
