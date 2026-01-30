import Button from '../ui/Button';
import SocialIcon from '../ui/SocialIcon';

export default function Footer30() {
  return (
    <footer className="relative bg-white py-24 px-8">
      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        <div className="flex items-center justify-center gap-2 text-2xl font-bold">
          <div className="flex gap-0.5">
            <div className="w-1.5 h-7 bg-red-500"></div>
            <div className="w-1.5 h-7 bg-yellow-400"></div>
            <div className="w-1.5 h-7 bg-blue-500"></div>
          </div>
          SiteLogo
        </div>

        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          High level experience in web design and development knowledge, producing quality work.
        </p>

        <Button variant="primary" size="lg" className="px-12">
          Contact Us
        </Button>

        <div className="flex justify-center gap-6 pt-4">
          <SocialIcon platform="facebook" theme="light" size="md" />
          <SocialIcon platform="github" theme="light" size="md" />
          <SocialIcon platform="figma" theme="light" size="md" />
          <SocialIcon platform="telegram" theme="light" size="md" />
          <SocialIcon platform="instagram" theme="light" size="md" />
        </div>
      </div>

      {/* Wave Background - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#0a7aff"
            fillOpacity="0.3"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <path
            fill="#0a7aff"
            fillOpacity="0.5"
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <path
            fill="#0a7aff"
            d="M0,224L48,224C96,224,192,224,288,213.3C384,203,480,181,576,181.3C672,181,768,203,864,213.3C960,224,1056,224,1152,213.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm z-10">
          © 2021 All Rights Reserved
        </div>
        <button className="absolute bottom-4 right-8 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10">
          ↑
        </button>
      </div>
    </footer>
  );
}
