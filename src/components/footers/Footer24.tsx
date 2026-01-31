import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, LinkedInIcon, GithubIcon } from '../icons';
import { MapPinIcon, EmailIcon, PhoneIcon } from '../icons';

const Footer24: React.FC = () => {
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-[1440px] mx-auto px-20 py-12">
        <div className="grid grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <Logo variant="white" />
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">High level experience in web design and development knowledge, producing quality work.</p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <nav className="space-y-2">
              {companyLinks.map((item) => (<a key={item} href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">{item}</a>))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPinIcon className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-400 text-sm">Wisconsin Ave, Suite 700<br />Chevy Chase, Maryland 20815</p>
              </div>
              <div className="flex items-center gap-3">
                <EmailIcon className="text-gray-400" size={18} />
                <a href="mailto:support@figma.com" className="text-gray-400 text-sm hover:text-white transition-colors">support@figma.com</a>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="text-gray-400" size={18} />
                <a href="tel:+18008543680" className="text-gray-400 text-sm hover:text-white transition-colors">+1 800 854-36-80</a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow us</h4>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"><FacebookIcon size={18} /></a>
              <a href="#" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"><TwitterIcon size={18} /></a>
              <a href="#" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"><GithubIcon size={18} /></a>
              <a href="#" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"><TelegramIcon size={18} /></a>
              <a href="#" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"><InstagramIcon size={18} /></a>
              <a href="#" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"><LinkedInIcon size={18} /></a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">© 2021 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer24;
