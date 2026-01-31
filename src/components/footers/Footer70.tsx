import React from 'react';
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedInIcon } from '../icons';

const Footer70: React.FC = () => {
  return (
    <footer className="bg-white py-10">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="flex items-center justify-between gap-8">
          <p className="text-gray-900 font-semibold max-w-xs">
            Subscribe to stay tuned for new web-design and latest updates.
          </p>
          <div className="flex flex-1 max-w-xl">
            <input
              type="email"
              placeholder="Enter your email Address"
              className="flex-1 px-6 py-3 bg-gray-100 rounded-l-full text-gray-600 placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full -ml-4 transition-colors">
              Subscribe
            </button>
          </div>
          <div className="flex gap-5">
            <a href="#" className="text-gray-400 hover:text-gray-600"><FacebookIcon size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-600"><InstagramIcon size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-600"><YoutubeIcon size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-600"><LinkedInIcon size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer70;
