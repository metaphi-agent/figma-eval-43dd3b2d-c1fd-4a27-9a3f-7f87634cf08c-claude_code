import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, TwitterIcon, YoutubeIcon, InstagramIcon, LinkedInIcon, HeadhunterIcon } from '../icons';

const Footer50: React.FC = () => {
  const productLinks = ['Landing Page', 'Popup Builder', 'Web-design', 'Content', 'Integrations'];
  const useCaseLinks = ['Web-designers', 'Marketers', 'Small Business', 'Website Builder'];
  const resourceLinks = ['Academy', 'Blog', 'Themes', 'Hosting', 'Developers', 'Support'];
  const companyLinks = ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'];

  return (
    <footer className="bg-white py-12">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-5 gap-8">
          <div><h4 className="font-semibold text-gray-900 mb-4">Product</h4><nav className="space-y-2">{productLinks.map((item) => (<a key={item} href="#" className="block text-sm text-gray-500 hover:text-gray-900">{item}</a>))}</nav></div>
          <div><h4 className="font-semibold text-gray-900 mb-4">Use Cases</h4><nav className="space-y-2">{useCaseLinks.map((item) => (<a key={item} href="#" className="block text-sm text-gray-500 hover:text-gray-900">{item}</a>))}</nav></div>
          <div><h4 className="font-semibold text-gray-900 mb-4">Resources</h4><nav className="space-y-2">{resourceLinks.map((item) => (<a key={item} href="#" className="block text-sm text-gray-500 hover:text-gray-900">{item}</a>))}</nav></div>
          <div><h4 className="font-semibold text-gray-900 mb-4">Company</h4><nav className="space-y-2">{companyLinks.map((item) => (<a key={item} href="#" className="block text-sm text-gray-500 hover:text-gray-900">{item}</a>))}</nav></div>
          <div><Logo /><h4 className="font-semibold text-gray-900 mt-4 mb-2">Professional Web Design</h4><p className="text-gray-500 text-sm mb-4">Hi! My name ia Dmitrii Rogoza and i'm an expert in web design.</p><p className="text-gray-400 text-sm mb-2">© 2021 All Rights Reserved</p><div className="flex gap-2"><a href="#" className="text-gray-400 hover:text-gray-600"><FacebookIcon size={16} /></a><a href="#" className="text-gray-400 hover:text-gray-600"><TwitterIcon size={16} /></a><a href="#" className="text-gray-400 hover:text-gray-600"><YoutubeIcon size={16} /></a><a href="#" className="text-gray-400 hover:text-gray-600"><InstagramIcon size={16} /></a><a href="#" className="text-gray-400 hover:text-gray-600"><LinkedInIcon size={16} /></a><a href="#" className="text-gray-400 hover:text-gray-600"><HeadhunterIcon size={16} /></a></div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer50;
