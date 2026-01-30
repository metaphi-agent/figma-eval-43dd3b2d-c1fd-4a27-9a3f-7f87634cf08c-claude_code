import SocialIcon from '../ui/SocialIcon';

export default function Footer20() {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-bold">
              <div className="flex gap-0.5">
                <div className="w-1 h-6 bg-white"></div>
                <div className="w-1 h-6 bg-white"></div>
                <div className="w-1 h-6 bg-white"></div>
              </div>
              SiteLogo
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              High level experience in web design and development knowledge, producing quality work.
            </p>
            <div className="text-sm text-gray-500">© 2021 All Rights Reserved</div>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Follow us</h3>
            <div className="flex gap-4">
              <SocialIcon platform="facebook" theme="dark" />
              <SocialIcon platform="telegram" theme="dark" />
              <SocialIcon platform="instagram" theme="dark" />
              <SocialIcon platform="figma" theme="dark" />
            </div>
            <div className="pt-4">
              <h4 className="font-semibold mb-2">Call us</h4>
              <a href="tel:+18008543680" className="text-gray-300 hover:text-white transition-colors">
                +1 800 854-36-80
              </a>
            </div>
          </div>

          {/* Product */}
          <nav className="space-y-3">
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">Landing Page</a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">Popup Builder</a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">Web-design</a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">Content</a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">Integrations</a>
          </nav>

          {/* Use Cases */}
          <nav className="space-y-3">
            <h3 className="font-bold text-lg mb-4">Use Cases</h3>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">Web-designers</a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">Marketers</a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">Small Business</a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">Website Builder</a>
          </nav>

          {/* Company */}
          <nav className="space-y-3">
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">About Us</a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">Careers</a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">FAQs</a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">Teams</a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">Contact Us</a>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <nav className="flex flex-wrap gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Sales and Refunds</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Site Map</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
