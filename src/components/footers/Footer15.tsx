import React from 'react';
import { FacebookIcon, TwitterIcon, GithubIcon, LinkedInIcon, HeadhunterIcon } from '../icons';

const Footer15: React.FC = () => {
  const productLinks = ['Landing Page', 'Popup Builder', 'Web-design', 'Content', 'Integrations'];
  const useCaseLinks = ['Web-designers', 'Marketers', 'Small Business', 'Website Builder'];
  const resourceLinks = ['Academy', 'Blog', 'Themes', 'Hosting', 'Developers', 'Support'];
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer>
      {/* Main Content - Blue Section */}
      <div className="bg-blue-500 text-white">
        <div className="max-w-[1440px] mx-auto px-20 py-12">
          <div className="grid grid-cols-6 gap-8">
            {/* Logo bars */}
            <div className="flex gap-1">
              <div className="w-2 h-8 bg-white rounded" />
              <div className="w-2 h-8 bg-white rounded" />
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4 text-yellow-300">Product</h4>
              <nav className="space-y-2">
                {productLinks.map((item) => (
                  <a key={item} href="#" className="block text-sm text-white/80 hover:text-white transition-colors">
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-yellow-300">Use Cases</h4>
              <nav className="space-y-2">
                {useCaseLinks.map((item) => (
                  <a key={item} href="#" className="block text-sm text-white/80 hover:text-white transition-colors">
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-yellow-300">Resources</h4>
              <nav className="space-y-2">
                {resourceLinks.map((item) => (
                  <a key={item} href="#" className="block text-sm text-white/80 hover:text-white transition-colors">
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-yellow-300">Company</h4>
              <nav className="space-y-2">
                {companyLinks.map((item) => (
                  <a key={item} href="#" className="block text-sm text-white/80 hover:text-white transition-colors">
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* Subscribe */}
            <div>
              <h4 className="font-semibold mb-4 text-yellow-300">Subscribe</h4>
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Firs Name"
                  className="w-full px-4 py-2 rounded bg-white text-gray-700 text-sm focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded bg-white text-gray-700 text-sm focus:outline-none"
                />
                <button className="w-full py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded font-medium text-sm hover:opacity-90 transition-opacity">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Dark Section */}
      <div className="bg-[#1a2744] text-white">
        <div className="max-w-[1440px] mx-auto px-20 py-6 flex items-center justify-between">
          <p className="text-white/60 text-sm">© 2021 All Rights Reserved</p>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors"><FacebookIcon size={20} /></a>
            <a href="#" className="text-white/60 hover:text-white transition-colors"><GithubIcon size={20} /></a>
            <a href="#" className="text-white/60 hover:text-white transition-colors"><TwitterIcon size={20} /></a>
            <a href="#" className="text-white/60 hover:text-white transition-colors"><LinkedInIcon size={20} /></a>
            <a href="#" className="text-white/60 hover:text-white transition-colors"><HeadhunterIcon size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer15;
