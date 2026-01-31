import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, LinkedInIcon, GithubIcon } from '../icons';

const Footer22: React.FC = () => {
  const productLinks = ['Landing Page', 'Popup Builder', 'Web-design', 'Content', 'Integrations'];
  const useCaseLinks = ['Web-designers', 'Marketers', 'Small Business', 'Website Builder'];
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-[1440px] mx-auto px-20 py-12">
        <div className="grid grid-cols-5 gap-8">
          {/* Logo */}
          <div>
            <Logo variant="white" />
            <p className="mt-4 text-gray-400 text-sm">High level experience in web design and development.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <nav className="space-y-2">
              {productLinks.map((item) => (<a key={item} href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">{item}</a>))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Use Cases</h4>
            <nav className="space-y-2">
              {useCaseLinks.map((item) => (<a key={item} href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">{item}</a>))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <nav className="space-y-2">
              {companyLinks.map((item) => (<a key={item} href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">{item}</a>))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow us</h4>
            <nav className="space-y-2">
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"><FacebookIcon size={16} />Facebook</a>
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"><TwitterIcon size={16} />Twitter</a>
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"><TelegramIcon size={16} />Telegram</a>
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"><InstagramIcon size={16} />Instagram</a>
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"><LinkedInIcon size={16} />LinkedIn</a>
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"><GithubIcon size={16} />Github</a>
            </nav>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">© 2021 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer22;
