import { MapPin, Mail, Phone, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import SocialIcon from '../ui/SocialIcon';

export default function Footer1() {
  return (
    <footer className="bg-[#222429] text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Company Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xl font-bold">
            <div className="flex gap-0.5">
              <div className="w-1 h-6 bg-white"></div>
              <div className="w-1 h-6 bg-white"></div>
              <div className="w-1 h-6 bg-white"></div>
            </div>
            SiteLogo
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Professional Web Design</h3>
            <p className="text-gray-400 leading-relaxed">
              Hi! My name ia Dmitrii Rogoza and i'm an expert in web design and branding.
              I can help you make your website more attractive
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <div>
                <div>Wisconsin Ave, Suite 700</div>
                <div>Chevy Chase, Maryland 20815</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 flex-shrink-0" />
              <div>support@figma.com</div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 flex-shrink-0" />
              <div>+1 800 854-36-80</div>
            </div>
          </div>
        </div>

        {/* Middle Column - Contact Form */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-6">Question us</h3>
          <Input placeholder="Enter your name" theme="dark" />
          <Input placeholder="Company Name" theme="dark" />
          <select className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white">
            <option>CEO</option>
            <option>Manager</option>
            <option>Developer</option>
          </select>
          <Input type="tel" placeholder="+1 800 123-34-45" theme="dark" />
          <Input type="email" placeholder="Enter your email" theme="dark" />
          <Button variant="white" fullWidth className="rounded-lg py-4">
            Get started
          </Button>
        </div>

        {/* Right Column - Navigation */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Company</h3>
          <nav className="space-y-4">
            {['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'].map((item) => (
              <a
                key={item}
                href="#"
                className="flex items-center justify-between group hover:text-gray-300 transition-colors"
              >
                <span>{item}</span>
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </nav>
          <div className="flex gap-4 pt-4">
            <SocialIcon platform="facebook" theme="dark" />
            <SocialIcon platform="twitter" theme="dark" />
            <SocialIcon platform="telegram" theme="dark" />
            <SocialIcon platform="instagram" theme="dark" />
            <SocialIcon platform="linkedin" theme="dark" />
          </div>
        </div>
      </div>
    </footer>
  );
}
