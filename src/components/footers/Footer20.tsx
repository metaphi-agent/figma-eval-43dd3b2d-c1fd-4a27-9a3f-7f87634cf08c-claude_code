import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TelegramIcon, InstagramIcon, HeadhunterIcon } from '../icons';

const Footer20: React.FC = () => {
  const productLinks = ['Landing Page', 'Popup Builder', 'Web-design', 'Content', 'Integrations'];
  const useCaseLinks = ['Web-designers', 'Marketers', 'Small Business', 'Website Builder'];
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];
  const legalLinks = ['Privacy Policy', 'Terms of Use', 'Sales and Refunds', 'Legal', 'Site Map'];

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-[1440px] mx-auto px-20 py-12">
        <div className="grid grid-cols-6 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2">
            <Logo variant="white" />
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs">
              High level experience in web design and development knowledge, producing quality work.
            </p>
            <div className="mt-4 border-t border-gray-800 pt-4">
              <p className="text-gray-500 text-sm">© 2021 All Rights Reserved</p>
            </div>
          </div>

          {/* Follow & Call */}
          <div>
            <h4 className="font-semibold mb-4">Follow us</h4>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><TelegramIcon size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><HeadhunterIcon size={20} /></a>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Call us</h4>
              <a href="tel:+18008543680" className="text-gray-400 text-sm hover:text-white transition-colors">
                +1 800 854-36-80
              </a>
            </div>
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

        {/* Legal Links */}
        <div className="flex gap-8 mt-8 pt-8 border-t border-gray-800">
          {legalLinks.map((item) => (
            <a key={item} href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer20;
