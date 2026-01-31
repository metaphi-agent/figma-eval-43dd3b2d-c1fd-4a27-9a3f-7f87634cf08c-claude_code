import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, GithubIcon, HeadhunterIcon } from '../icons';
import { ChevronUpIcon } from '../icons';

const Footer30: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-white">
      <div className="max-w-[1440px] mx-auto px-20 py-12">
        <div className="flex flex-col items-center text-center">
          <Logo />
          <p className="mt-4 text-gray-500 max-w-md">High level experience in web design and development knowledge, producing quality work.</p>
          <button className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors">Contact Us</button>
          <div className="flex gap-4 mt-8">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><FacebookIcon size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><GithubIcon size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><TwitterIcon size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><TelegramIcon size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><InstagramIcon size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors"><HeadhunterIcon size={20} /></a>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="relative h-48">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path fill="#93c5fd" d="M0,100 C200,50 400,150 600,100 C800,50 1000,150 1200,100 C1300,75 1400,125 1440,100 L1440,200 L0,200 Z" />
          <path fill="#60a5fa" d="M0,120 C200,70 400,170 600,120 C800,70 1000,170 1200,120 C1300,95 1400,145 1440,120 L1440,200 L0,200 Z" />
          <path fill="#3b82f6" d="M0,140 C200,90 400,190 600,140 C800,90 1000,190 1200,140 C1300,115 1400,165 1440,140 L1440,200 L0,200 Z" />
        </svg>
        <div className="absolute bottom-4 left-8 text-white text-sm">© 2021 All Rights Reserved</div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="absolute bottom-4 right-8 w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
          <ChevronUpIcon size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer30;
