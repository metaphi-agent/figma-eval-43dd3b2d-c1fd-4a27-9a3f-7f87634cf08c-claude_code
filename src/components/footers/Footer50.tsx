import SocialIcon from '../ui/SocialIcon';

export default function Footer50() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Product */}
          <nav className="space-y-3">
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Landing Page</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Popup Builder</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Web-design</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Content</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Integrations</a>
          </nav>

          {/* Use Cases */}
          <nav className="space-y-3">
            <h3 className="font-bold text-lg mb-4">Use Cases</h3>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Web-designers</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Marketers</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Small Business</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Website Builder</a>
          </nav>

          {/* Resources */}
          <nav className="space-y-3">
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Academy</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Themes</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Hosting</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Developers</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Support</a>
          </nav>

          {/* Company */}
          <nav className="space-y-3">
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">About Us</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Careers</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">FAQs</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Teams</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Contact Us</a>
          </nav>

          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-bold">
              <div className="flex gap-0.5">
                <div className="w-1 h-6 bg-red-500"></div>
                <div className="w-1 h-6 bg-yellow-400"></div>
                <div className="w-1 h-6 bg-blue-500"></div>
              </div>
              SiteLogo
            </div>
            <div>
              <h4 className="font-semibold text-gray-500 text-sm mb-2">Professional Web Design</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hi! My name ia Dmitrii Rogoza and i'm an expert in web design and branding.
                I can help you make your website more attractive
              </p>
            </div>
            <div className="text-sm text-gray-500">© 2021 All Rights Reserved</div>
            <div className="flex gap-3">
              <SocialIcon platform="facebook" theme="light" size="sm" />
              <SocialIcon platform="twitter" theme="light" size="sm" />
              <SocialIcon platform="github" theme="light" size="sm" />
              <SocialIcon platform="instagram" theme="light" size="sm" />
              <SocialIcon platform="linkedin" theme="light" size="sm" />
              <SocialIcon platform="figma" theme="light" size="sm" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
