import React from 'react';
import { LogoColorful } from '../ui/Logo';
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedInIcon } from '../icons';

const Footer67: React.FC = () => {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="flex justify-between items-start mb-12">
          <LogoColorful />
          <div className="text-right max-w-md">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Web Design</h3>
            <p className="text-gray-500">
              High level experience in web design and development knowledge, producing quality work.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-sm">© 2021 All Rights Reserved</p>
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

export default Footer67;
