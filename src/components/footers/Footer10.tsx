import SocialIcon from '../ui/SocialIcon';
import Button from '../ui/Button';

export default function Footer10() {
  return (
    <footer className="relative bg-white py-16 px-8 overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0 bg-blue-500" style={{ clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0 100%)' }}></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Button */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xl font-bold text-white">
              <div className="flex gap-0.5">
                <div className="w-1 h-6 bg-white"></div>
                <div className="w-1 h-6 bg-white"></div>
                <div className="w-1 h-6 bg-white"></div>
              </div>
              SiteLogo
            </div>
            <Button variant="white" className="px-12 py-4 rounded-md">
              Contact Us
            </Button>
          </div>

          {/* Navigation */}
          <nav className="text-white space-y-4">
            <a href="#" className="block hover:opacity-80 transition-opacity">About</a>
            <a href="#" className="block hover:opacity-80 transition-opacity">Features</a>
            <a href="#" className="block hover:opacity-80 transition-opacity">Pricing</a>
            <a href="#" className="block hover:opacity-80 transition-opacity">Gallery</a>
            <a href="#" className="block hover:opacity-80 transition-opacity">Team</a>
          </nav>

          {/* Social Icons */}
          <div className="flex flex-col items-end gap-4 text-white">
            <SocialIcon platform="github" theme="dark" />
            <SocialIcon platform="figma" theme="dark" />
            <SocialIcon platform="instagram" theme="dark" />
            <SocialIcon platform="twitter" theme="dark" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/20 text-white text-sm">
          <div>© 2021 All Rights Reserved</div>
          <nav className="flex flex-wrap gap-8">
            <a href="#" className="hover:opacity-80 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Terms of Use</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Sales and Refunds</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Legal</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Site Map</a>
          </nav>
          <div>+1 800 854-36-80</div>
        </div>
      </div>
    </footer>
  );
}
