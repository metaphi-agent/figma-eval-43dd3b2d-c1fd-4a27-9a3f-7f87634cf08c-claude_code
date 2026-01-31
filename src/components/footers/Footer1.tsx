import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, LinkedInIcon } from '../icons';
import { MapPinIcon, EmailIcon, PhoneIcon, ChevronRightIcon } from '../icons';

const Footer1: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-[1440px] mx-auto px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Logo & Info */}
          <div className="space-y-6">
            <Logo variant="white" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Professional Web Design</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Hi! My name ia Dmitrii Rogoza and i'm an expert in web design and branding. I can help you make your website more attractive
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPinIcon className="text-gray-400 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-300 text-sm">
                  Wisconsin Ave, Suite 700<br />
                  Chevy Chase, Maryland 20815
                </p>
              </div>
              <div className="flex items-center gap-3">
                <EmailIcon className="text-gray-400 flex-shrink-0" size={20} />
                <a href="mailto:support@figma.com" className="text-gray-300 text-sm hover:text-white transition-colors">
                  support@figma.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="text-gray-400 flex-shrink-0" size={20} />
                <a href="tel:+18008543680" className="text-gray-300 text-sm hover:text-white transition-colors">
                  +1 800 854-36-80
                </a>
              </div>
            </div>
          </div>

          {/* Center Column - Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Question us</h3>
            <form className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="text-sm text-gray-400 block mb-1">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b border-gray-600 py-2 text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-1">Company</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full bg-transparent border-b border-gray-600 py-2 text-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-1">Position</label>
                <select className="w-full bg-transparent border-b border-gray-600 py-2 text-sm focus:outline-none focus:border-white transition-colors text-gray-400">
                  <option>CEO</option>
                  <option>CTO</option>
                  <option>Designer</option>
                  <option>Developer</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-1">Phone</label>
                <input
                  type="tel"
                  placeholder="+1 800 123-34-45"
                  className="w-full bg-transparent border-b border-gray-600 py-2 text-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-gray-600 py-2 text-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-gray-900 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors mt-4"
              >
                Get started
              </button>
            </form>
          </div>

          {/* Right Column - Company Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Company</h3>
            <nav className="space-y-4">
              {['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="flex items-center justify-between text-gray-300 hover:text-white transition-colors group"
                >
                  <span>{item}</span>
                  <ChevronRightIcon className="text-gray-500 group-hover:text-white transition-colors" size={20} />
                </a>
              ))}
            </nav>
            <div className="flex gap-4 mt-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TelegramIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LinkedInIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
