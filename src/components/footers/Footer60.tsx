import React from 'react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedInIcon } from '../icons';

const Footer60: React.FC = () => {
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
          <div><h4 className="font-semibold text-gray-900 mb-4">Follow us</h4><div className="flex gap-3"><a href="#" className="text-gray-400 hover:text-gray-600"><FacebookIcon size={20} /></a><a href="#" className="text-gray-400 hover:text-gray-600"><InstagramIcon size={20} /></a><a href="#" className="text-gray-400 hover:text-gray-600"><YoutubeIcon size={20} /></a><a href="#" className="text-gray-400 hover:text-gray-600"><LinkedInIcon size={20} /></a></div><Logo className="mt-4" /></div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-gray-200"><p className="text-gray-400 text-sm">© 2021 All Rights Reserved</p></div>
      </div>
    </footer>
  );
};

export default Footer60;
