import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TelegramIcon, InstagramIcon, FigmaIcon } from '../icons';
import { MapPinIcon, EmailIcon, PhoneIcon, ChevronUpIcon } from '../icons';

const Footer74: React.FC = () => {
  const productLinks = ['Landing Page', 'Popup Builder', 'Web-design', 'Content', 'Integrations'];
  const useCaseLinks = ['Web-designers', 'Marketers', 'Small Business', 'Website Builder'];
  const resourceLinks = ['Academy', 'Blog', 'Themes', 'Hosting', 'Developers', 'Support'];
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="bg-[#1a1a1a] py-12">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="flex gap-8">
          {/* Logo & Contact Section */}
          <div className="pr-8 border-r border-gray-700">
            <Logo variant="white" />
            <div className="mt-8 space-y-4">
              <h4 className="font-semibold text-white">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPinIcon size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Wisconsin Ave, Suite 700<br />Chevy Chase, Maryland 20815</span>
                </div>
                <div className="flex items-center gap-3">
                  <EmailIcon size={18} className="text-gray-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">support@figma.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon size={18} className="text-gray-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">+1 800 854-36-80</span>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-gray-800">
                  <FacebookIcon size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-gray-800">
                  <TelegramIcon size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-gray-800">
                  <InstagramIcon size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-gray-800">
                  <FigmaIcon size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          <div className="flex-1 grid grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <nav className="space-y-3">
                {productLinks.map((item) => (
                  <a key={item} href="#" className="block text-gray-400 hover:text-white">{item}</a>
                ))}
              </nav>
              <h4 className="font-semibold text-white mt-8 mb-4">Use Cases</h4>
              <nav className="space-y-3">
                {useCaseLinks.map((item) => (
                  <a key={item} href="#" className="block text-gray-400 hover:text-white">{item}</a>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <nav className="space-y-3">
                {resourceLinks.map((item) => (
                  <a key={item} href="#" className="block text-gray-400 hover:text-white">{item}</a>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <nav className="space-y-3">
                {companyLinks.map((item) => (
                  <a key={item} href="#" className="block text-gray-400 hover:text-white">{item}</a>
                ))}
              </nav>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
              >
                <ChevronUpIcon size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer74;
