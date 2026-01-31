import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, LinkedInIcon } from '../icons';

const Footer27: React.FC = () => {
  const productLinks = ['Landing Page', 'Popup Builder', 'Web-design', 'Content', 'Integrations'];
  const useCaseLinks = ['Web-designers', 'Marketers', 'Small Business', 'Website Builder'];
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white">
      <div className="max-w-[1440px] mx-auto px-20 py-12">
        <div className="grid grid-cols-5 gap-8">
          <div>
            <Logo variant="white" />
            <p className="mt-4 text-white/70 text-sm">High level experience in web design.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <nav className="space-y-2">{productLinks.map((item) => (<a key={item} href="#" className="block text-sm text-white/70 hover:text-white transition-colors">{item}</a>))}</nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Use Cases</h4>
            <nav className="space-y-2">{useCaseLinks.map((item) => (<a key={item} href="#" className="block text-sm text-white/70 hover:text-white transition-colors">{item}</a>))}</nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <nav className="space-y-2">{companyLinks.map((item) => (<a key={item} href="#" className="block text-sm text-white/70 hover:text-white transition-colors">{item}</a>))}</nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow us</h4>
            <div className="flex gap-3">
              <a href="#" className="text-white/70 hover:text-white transition-colors"><FacebookIcon size={20} /></a>
              <a href="#" className="text-white/70 hover:text-white transition-colors"><TwitterIcon size={20} /></a>
              <a href="#" className="text-white/70 hover:text-white transition-colors"><TelegramIcon size={20} /></a>
              <a href="#" className="text-white/70 hover:text-white transition-colors"><InstagramIcon size={20} /></a>
              <a href="#" className="text-white/70 hover:text-white transition-colors"><LinkedInIcon size={20} /></a>
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

export default Footer27;
