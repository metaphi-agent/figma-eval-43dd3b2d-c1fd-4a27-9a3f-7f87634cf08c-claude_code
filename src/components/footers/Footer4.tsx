import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon } from '../icons';

const Footer4: React.FC = () => {
  const productLinks = ['Landing Page', 'Popup Builder', 'Web-design', 'Content', 'Integrations'];
  const useCaseLinks = ['Web-designers', 'Marketers', 'Small Business', 'Website Builder'];
  const resourceLinks = ['Academy', 'Blog', 'Themes', 'Hosting', 'Developers', 'Support'];
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-[1440px] mx-auto px-20 py-12">
        <div className="grid grid-cols-6 gap-8">
          {/* Logo & Info */}
          <div className="col-span-2">
            <Logo variant="white" />
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs">
              High level experience in web design and development knowledge, producing quality work.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <nav className="space-y-2">
              {productLinks.map((item) => (
                <a key={item} href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Use Cases</h4>
            <nav className="space-y-2">
              {useCaseLinks.map((item) => (
                <a key={item} href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <nav className="space-y-2">
              {resourceLinks.map((item) => (
                <a key={item} href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <nav className="space-y-2">
              {companyLinks.map((item) => (
                <a key={item} href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">© 2021 All Rights Reserved</p>
          <div className="flex gap-4">
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
    </footer>
  );
};

export default Footer4;
