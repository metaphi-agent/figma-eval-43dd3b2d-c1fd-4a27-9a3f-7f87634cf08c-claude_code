import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, LinkedInIcon, GithubIcon } from '../icons';

const Footer12: React.FC = () => {
  const productLinks = ['Landing Page', 'Popup Builder', 'Web-design', 'Content', 'Integrations'];
  const useCaseLinks = ['Web-designers', 'Marketers', 'Small Business', 'Website Builder'];
  const resourceLinks = ['Academy', 'Blog', 'Themes', 'Hosting', 'Developers', 'Support'];
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600" />

      <div className="relative max-w-[1440px] mx-auto px-20 py-12">
        <div className="grid grid-cols-6 gap-8 text-white">
          {/* Logo & Social */}
          <div>
            <Logo variant="white" />
            <div className="flex gap-3 mt-6">
              <a href="#" className="text-white/70 hover:text-white transition-colors"><FacebookIcon size={18} /></a>
              <a href="#" className="text-white/70 hover:text-white transition-colors"><TwitterIcon size={18} /></a>
              <a href="#" className="text-white/70 hover:text-white transition-colors"><GithubIcon size={18} /></a>
              <a href="#" className="text-white/70 hover:text-white transition-colors"><TelegramIcon size={18} /></a>
              <a href="#" className="text-white/70 hover:text-white transition-colors"><InstagramIcon size={18} /></a>
              <a href="#" className="text-white/70 hover:text-white transition-colors"><LinkedInIcon size={18} /></a>
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

          {/* Subscribe */}
          <div>
            <h4 className="font-semibold mb-4">Subscribe</h4>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder:text-white/60 text-sm focus:outline-none focus:bg-white/30"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder:text-white/60 text-sm focus:outline-none focus:bg-white/30"
              />
              <button className="w-full py-2 bg-white text-purple-600 rounded font-medium text-sm hover:bg-white/90 transition-colors">
                SUBSCRIBE
              </button>
            </form>
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

export default Footer12;
