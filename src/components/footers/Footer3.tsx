import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon } from '../icons';

const Footer3: React.FC = () => {
  const productLinks = ['Landing Page', 'Popup Builder', 'Web-design', 'Content', 'Integrations'];
  const useCaseLinks = ['Web-designers', 'Marketers', 'Small Business', 'Website Builder'];
  const resourceLinks = ['Academy', 'Blog', 'Themes', 'Hosting', 'Developers', 'Support'];
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="bg-gradient-to-r from-pink-500 to-rose-500 text-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-6 gap-8">
          {/* Left Column - Gray Section */}
          <div className="col-span-1 bg-gray-500/80 px-8 py-12">
            <Logo variant="white" />
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Professional Web Design</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                Hi! My name ia Dmitrii Rogoza and i'm an expert in web design and branding. I can help you make your website more attractive
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-5 px-8 py-12 grid grid-cols-5 gap-8">
            {/* Follow Us */}
            <div>
              <h4 className="font-semibold mb-4">Follow us</h4>
              <div className="flex gap-3">
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <FacebookIcon size={20} />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <TwitterIcon size={20} />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <TelegramIcon size={20} />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <InstagramIcon size={20} />
                </a>
              </div>
            </div>

            {/* Subscribe */}
            <div className="col-span-2">
              <h4 className="font-semibold mb-2">Subscribe</h4>
              <p className="text-sm text-white/80 mb-4">
                Subscribe to stay tuned for new web design and latest updates. Let's do it!
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email Address"
                  className="flex-1 bg-white/20 backdrop-blur px-4 py-2 rounded text-sm placeholder:text-white/60 focus:outline-none focus:bg-white/30 transition-colors"
                />
                <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded text-sm transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Empty space */}
            <div className="col-span-2" />

            {/* Links Columns */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <nav className="space-y-2">
                {productLinks.map((item) => (
                  <a key={item} href="#" className="block text-sm text-white/80 hover:text-white transition-colors">
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Use Cases</h4>
              <nav className="space-y-2">
                {useCaseLinks.map((item) => (
                  <a key={item} href="#" className="block text-sm text-white/80 hover:text-white transition-colors">
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <nav className="space-y-2">
                {resourceLinks.map((item) => (
                  <a key={item} href="#" className="block text-sm text-white/80 hover:text-white transition-colors">
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <nav className="space-y-2">
                {companyLinks.map((item) => (
                  <a key={item} href="#" className="block text-sm text-white/80 hover:text-white transition-colors">
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
