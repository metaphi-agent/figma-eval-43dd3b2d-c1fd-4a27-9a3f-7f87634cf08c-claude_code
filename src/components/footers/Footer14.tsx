import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, LinkedInIcon } from '../icons';

const Footer14: React.FC = () => {
  const productLinks = ['Landing Page', 'Popup Builder', 'Web-design', 'Content', 'Integrations'];
  const useCaseLinks = ['Web-designers', 'Marketers', 'Small Business', 'Website Builder'];
  const resourceLinks = ['Academy', 'Blog', 'Themes', 'Hosting', 'Developers', 'Support'];
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="max-w-[1440px] mx-auto px-20 py-12">
        <div className="grid grid-cols-5 gap-8">
          {/* Logo & Subscribe */}
          <div className="col-span-2">
            <Logo variant="white" />
            <p className="mt-4 text-white/70 text-sm">
              Subscribe to stay tuned for new web design and latest updates.
            </p>
            <div className="flex gap-2 mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded bg-white/20 text-white placeholder:text-white/60 text-sm focus:outline-none focus:bg-white/30"
              />
              <button className="px-4 py-2 bg-white text-blue-600 rounded font-medium text-sm hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </div>
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
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm">© 2021 All Rights Reserved</p>
          <div className="flex gap-4">
            <a href="#" className="text-white/70 hover:text-white transition-colors"><FacebookIcon size={20} /></a>
            <a href="#" className="text-white/70 hover:text-white transition-colors"><TwitterIcon size={20} /></a>
            <a href="#" className="text-white/70 hover:text-white transition-colors"><TelegramIcon size={20} /></a>
            <a href="#" className="text-white/70 hover:text-white transition-colors"><InstagramIcon size={20} /></a>
            <a href="#" className="text-white/70 hover:text-white transition-colors"><LinkedInIcon size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer14;
