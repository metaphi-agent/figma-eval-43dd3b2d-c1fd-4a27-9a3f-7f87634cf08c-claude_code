import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, YoutubeIcon, LinkedInIcon } from '../icons';

const Footer18: React.FC = () => {
  const productLinks = ['Landing Page', 'Popup Builder', 'Web-design', 'Content', 'Integrations'];
  const useCaseLinks = ['Web-designers', 'Marketers', 'Small Business', 'Website Builder'];
  const resourceLinks = ['Academy', 'Blog', 'Themes', 'Hosting', 'Developers', 'Support'];
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-[1440px] mx-auto px-20 py-12">
        <div className="grid grid-cols-6 gap-8">
          {/* Logo & Description */}
          <div>
            <Logo variant="white" />
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
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

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow us</h4>
            <div className="grid grid-cols-3 gap-3">
              <a href="#" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FacebookIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <TwitterIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <TelegramIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <InstagramIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <YoutubeIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <LinkedInIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">© 2021 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer18;
