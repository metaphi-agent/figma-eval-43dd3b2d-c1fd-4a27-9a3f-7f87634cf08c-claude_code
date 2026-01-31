import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, LinkedInIcon } from '../icons';

const Footer8: React.FC = () => {
  const productLinks = ['Landing Page', 'Popup Builder', 'Web-design', 'Content', 'Integrations'];
  const useCaseLinks = ['Web-designers', 'Marketers', 'Small Business', 'Website Builder'];
  const resourceLinks = ['Academy', 'Blog', 'Themes', 'Hosting', 'Developers', 'Support'];
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">
      <div className="max-w-[1440px] mx-auto px-20 py-12">
        <div className="grid grid-cols-6 gap-8">
          {/* Logo */}
          <div>
            <Logo variant="white" />
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <nav className="space-y-2">
              {productLinks.map((item) => (
                <a key={item} href="#" className="block text-sm text-white/70 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Use Cases</h4>
            <nav className="space-y-2">
              {useCaseLinks.map((item) => (
                <a key={item} href="#" className="block text-sm text-white/70 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <nav className="space-y-2">
              {resourceLinks.map((item) => (
                <a key={item} href="#" className="block text-sm text-white/70 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <nav className="space-y-2">
              {companyLinks.map((item) => (
                <a key={item} href="#" className="block text-sm text-white/70 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow us</h4>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <TelegramIcon size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <LinkedInIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm">© 2021 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer8;
