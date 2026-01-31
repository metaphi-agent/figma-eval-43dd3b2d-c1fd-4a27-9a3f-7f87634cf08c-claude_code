import React from 'react';
import { Logo } from '../ui/Logo';

const Footer5: React.FC = () => {
  const productLinks = ['Landing Page', 'Popup Builder', 'Web-design', 'Content', 'Integrations'];
  const useCaseLinks = ['Web-designers', 'Marketers', 'Small Business', 'Website Builder'];
  const resourceLinks = ['Academy', 'Blog', 'Themes', 'Hosting', 'Developers', 'Support'];
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];
  const legalLinks = ['Privacy Policy', 'Terms of Use', 'Sales and Refunds', 'Legal', 'Site Map'];

  return (
    <footer className="bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      <div className="max-w-[1440px] mx-auto px-20 py-12">
        {/* Top Section */}
        <div className="flex justify-center mb-8">
          <Logo />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-5 gap-8">
          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <nav className="space-y-2">
              {productLinks.map((item) => (
                <a key={item} href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Use Cases</h4>
            <nav className="space-y-2">
              {useCaseLinks.map((item) => (
                <a key={item} href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <nav className="space-y-2">
              {resourceLinks.map((item) => (
                <a key={item} href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <nav className="space-y-2">
              {companyLinks.map((item) => (
                <a key={item} href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact us</h4>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Firs Name"
                className="w-full px-4 py-2 rounded border border-gray-200 text-sm focus:outline-none focus:border-gray-400 transition-colors"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full px-4 py-2 rounded border border-gray-200 text-sm focus:outline-none focus:border-gray-400 transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-2 rounded border border-gray-200 text-sm focus:outline-none focus:border-gray-400 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded border border-gray-200 text-sm focus:outline-none focus:border-gray-400 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-orange-400 text-white py-2 rounded font-medium hover:opacity-90 transition-opacity"
              >
                Call Me
              </button>
            </form>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex justify-center gap-8 mt-12 pt-8 border-t border-gray-200">
          {legalLinks.map((item) => (
            <a key={item} href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer5;
