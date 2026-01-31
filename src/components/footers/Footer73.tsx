import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, HeadhunterIcon, GithubIcon } from '../icons';
import { MapPinIcon, EmailIcon, PhoneIcon } from '../icons';

const Footer73: React.FC = () => {
  const productLinks = ['Landing Page', 'Popup Builder', 'Web-design', 'Content', 'Integrations'];
  const useCaseLinks = ['Web-designers', 'Marketers', 'Small Business', 'Website Builder'];
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="bg-[#1a1a1a]">
      {/* Subscribe Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-[1440px] mx-auto px-20 py-8">
          <div className="flex items-center justify-between gap-8">
            <h2 className="text-yellow-400 text-3xl font-bold tracking-wider">SUBSCRIBE</h2>
            <div className="flex flex-1 max-w-2xl">
              <input
                type="email"
                placeholder="Enter your email Address"
                className="flex-1 px-6 py-3 bg-white text-gray-600 placeholder-gray-400 focus:outline-none"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          <p className="text-gray-400 mt-4 text-center">
            Subscribe to stay tuned for new web design and latest updates. Let's do it!
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-20 py-12">
        <div className="grid grid-cols-5 gap-8">
          {/* Logo & Social */}
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-1 text-white">
                <div className="flex gap-0.5">
                  <div className="w-1 h-5 bg-white rounded-full"></div>
                  <div className="w-1 h-5 bg-white rounded-full"></div>
                  <div className="w-1 h-5 bg-white rounded-full"></div>
                </div>
                <span className="ml-2 text-lg font-semibold">SiteLogo</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">Follow us</p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-white"><FacebookIcon size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><TwitterIcon size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><HeadhunterIcon size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><GithubIcon size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><TelegramIcon size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><TwitterIcon size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><InstagramIcon size={18} /></a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <nav className="space-y-3">
              {productLinks.map((item) => (
                <a key={item} href="#" className="block text-gray-400 hover:text-white">{item}</a>
              ))}
            </nav>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="font-semibold text-white mb-4">Use Cases</h4>
            <nav className="space-y-3">
              {useCaseLinks.map((item) => (
                <a key={item} href="#" className="block text-gray-400 hover:text-white">{item}</a>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <nav className="space-y-3">
              {companyLinks.map((item) => (
                <a key={item} href="#" className="block text-gray-400 hover:text-white">{item}</a>
              ))}
            </nav>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-4">
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
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-500 text-sm">© 2021 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer73;
