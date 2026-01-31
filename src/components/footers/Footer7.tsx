import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, YoutubeIcon, GithubIcon, HeadhunterIcon } from '../icons';
import { MapPinIcon, EmailIcon, PhoneIcon } from '../icons';

const Footer7: React.FC = () => {
  return (
    <footer className="relative bg-blue-500 text-white overflow-hidden">
      {/* Diagonal cut at top */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white transform -skew-y-2 origin-top-right" />

      <div className="max-w-[1440px] mx-auto px-20 pt-24 pb-12">
        <div className="flex gap-12">
          {/* Left - Social Icons */}
          <div className="flex flex-col gap-4">
            <Logo variant="white" />
            <div className="flex flex-col gap-3 mt-8">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <FacebookIcon size={24} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <GithubIcon size={24} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <TelegramIcon size={24} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <HeadhunterIcon size={24} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <InstagramIcon size={24} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <YoutubeIcon size={24} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <TwitterIcon size={24} />
              </a>
            </div>
          </div>

          {/* Decorative shapes */}
          <div className="relative w-80">
            <div className="absolute top-0 left-10 w-32 h-48 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-80 blur-sm transform rotate-45" />
            <div className="absolute top-20 left-20 w-28 h-40 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-80 blur-sm transform -rotate-12" />
            <div className="absolute top-40 left-5 w-24 h-36 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full opacity-80 blur-sm transform rotate-12" />
            <div className="absolute bottom-0 left-16 w-20 h-32 bg-gradient-to-br from-cyan-400 to-green-300 rounded-full opacity-80 blur-sm transform -rotate-45" />
          </div>

          {/* Center - Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Professional Web Design</h2>
            <p className="text-white/80 mb-6 max-w-md">
              High level experience in web design and development knowledge, producing quality work.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPinIcon className="text-blue-200 mt-1" size={20} />
                <p className="text-white/80">
                  Wisconsin Ave, Suite 700<br />
                  Chevy Chase, Maryland 20815
                </p>
              </div>
              <div className="flex items-center gap-3">
                <EmailIcon className="text-blue-200" size={20} />
                <a href="mailto:support@figma.com" className="text-white/80 hover:text-white transition-colors">
                  support@figma.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="text-blue-200" size={20} />
                <a href="tel:+18008543680" className="text-white/80 hover:text-white transition-colors">
                  +1 800 854-36-80
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="w-80 bg-gray-300 rounded-xl p-6">
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Contact us</h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Firs Name"
                className="w-full px-4 py-3 rounded-lg text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 rounded-lg text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Message"
                rows={3}
                className="w-full px-4 py-3 rounded-lg text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-white text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer7;
