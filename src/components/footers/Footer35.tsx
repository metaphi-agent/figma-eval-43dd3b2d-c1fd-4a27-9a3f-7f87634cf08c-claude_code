import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, GithubIcon, TelegramIcon, InstagramIcon, HeadhunterIcon } from '../icons';
import { ChevronUpIcon } from '../icons';

const Footer35: React.FC = () => {
  const productLinks = ['Landing Page', 'Popup Builder', 'Web-design', 'Content', 'Integrations'];
  const useCaseLinks = ['Web-designers', 'Marketers', 'Small Business', 'Website Builder'];
  const resourceLinks = ['Academy', 'Blog', 'Themes', 'Hosting', 'Developers', 'Support'];
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];
  const legalLinks = ['Privacy Policy', 'Terms of Use', 'Sales and Refunds', 'Legal', 'Site Map'];

  return (
    <footer className="bg-white">
      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-20 py-12">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <nav className="space-y-2">{productLinks.map((item) => (<a key={item} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">{item}</a>))}</nav>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Use Cases</h4>
            <nav className="space-y-2">{useCaseLinks.map((item) => (<a key={item} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">{item}</a>))}</nav>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <nav className="space-y-2">{resourceLinks.map((item) => (<a key={item} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">{item}</a>))}</nav>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <nav className="space-y-2">{companyLinks.map((item) => (<a key={item} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">{item}</a>))}</nav>
          </div>
        </div>

        {/* Middle Bar */}
        <div className="flex items-center justify-between mt-12 py-6 border-y border-gray-200">
          <Logo />
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm">Follow us</span>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><FacebookIcon size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><GithubIcon size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><TwitterIcon size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><TelegramIcon size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><InstagramIcon size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><HeadhunterIcon size={20} /></a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-6">
          <nav className="flex gap-6">{legalLinks.map((item) => (<a key={item} href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">{item}</a>))}</nav>
          <p className="text-gray-400 text-sm">© 2021 All Rights Reserved</p>
        </div>
      </div>

      {/* Back to top */}
      <div className="flex justify-end px-20 pb-8">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
          <ChevronUpIcon size={24} className="text-gray-400" />
        </button>
      </div>
    </footer>
  );
};

export default Footer35;
