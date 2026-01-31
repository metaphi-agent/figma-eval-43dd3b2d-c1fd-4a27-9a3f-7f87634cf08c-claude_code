import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, LinkedInIcon, GithubIcon } from '../icons';

const Footer9: React.FC = () => {
  const productLinks = ['Landing Page', 'Popup Builder', 'Web-design', 'Content', 'Integrations'];
  const useCaseLinks = ['Web-designers', 'Marketers', 'Small Business', 'Website Builder'];
  const resourceLinks = ['Academy', 'Blog', 'Themes', 'Hosting', 'Developers', 'Support'];
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-700 text-white">
      <div className="max-w-[1440px] mx-auto px-20 py-12">
        <div className="grid grid-cols-5 gap-8">
          {/* Logo & Social */}
          <div>
            <Logo variant="white" />
            <div className="flex flex-col gap-3 mt-8">
              <a href="#" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
                <FacebookIcon size={18} />
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
                <TwitterIcon size={18} />
                <span>Twitter</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
                <TelegramIcon size={18} />
                <span>Telegram</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
                <InstagramIcon size={18} />
                <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
                <LinkedInIcon size={18} />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>
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
        </div>

        {/* Bottom */}
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm">© 2021 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer9;
