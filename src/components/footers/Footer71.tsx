import React from 'react';
import { LogoColorful } from '../ui/Logo';
import { MapPinIcon, EmailIcon } from '../icons';

const Footer71: React.FC = () => {
  const useCaseLinks = ['Web-designers', 'Marketers', 'Small Business', 'Website Builder'];
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];
  const legalLinks = ['Privacy Policy', 'Terms of Use', 'Sales and Refunds', 'Legal', 'Site Map'];

  return (
    <footer className="bg-white py-12">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-4 gap-12 mb-12">
          <div>
            <LogoColorful />
            <p className="mt-6 text-gray-600 leading-relaxed">
              Hi! My name ia Dmitrii Rogoza and i'm an expert in web design and branding. I can help you make your website more attractive
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Use Cases</h4>
            <nav className="space-y-3">
              {useCaseLinks.map((item) => (
                <a key={item} href="#" className="block text-gray-500 hover:text-gray-900">{item}</a>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <nav className="space-y-3">
              {companyLinks.map((item) => (
                <a key={item} href="#" className="block text-gray-500 hover:text-gray-900">{item}</a>
              ))}
            </nav>
          </div>
          <div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPinIcon size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-600">Wisconsin Ave, Suite 700<br />Chevy Chase, Maryland 20815</span>
              </div>
              <div className="flex items-center gap-3">
                <EmailIcon size={20} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-600">support@figma.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-sm">© 2021 All Rights Reserved</p>
          <nav className="flex gap-8">
            {legalLinks.map((item) => (
              <a key={item} href="#" className="text-gray-500 hover:text-gray-900 text-sm">{item}</a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer71;
