import React from 'react';
import { LogoColorful } from '../ui/Logo';
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedInIcon } from '../icons';

const Footer66: React.FC = () => {
  const productLinks = ['Landing Page', 'Popup Builder', 'Web-design', 'Content', 'Integrations'];
  const useCaseLinks = ['Web-designers', 'Marketers', 'Small Business', 'Website Builder'];
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-4 gap-12">
          <div>
            <LogoColorful />
            <p className="mt-6 text-gray-600 leading-relaxed">
              High level experience in web design and development knowledge, producing quality work.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#" className="text-gray-800 hover:text-gray-600"><FacebookIcon size={20} /></a>
              <a href="#" className="text-gray-800 hover:text-gray-600"><InstagramIcon size={20} /></a>
              <a href="#" className="text-gray-800 hover:text-gray-600"><YoutubeIcon size={20} /></a>
              <a href="#" className="text-gray-800 hover:text-gray-600"><LinkedInIcon size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <nav className="space-y-3">
              {productLinks.map((item) => (
                <a key={item} href="#" className="block text-gray-500 hover:text-gray-900">{item}</a>
              ))}
            </nav>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer66;
