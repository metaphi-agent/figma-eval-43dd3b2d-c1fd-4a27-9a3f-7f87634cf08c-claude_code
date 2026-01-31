import React from 'react';

const Footer72: React.FC = () => {
  const navLinks = ['About', 'Features', 'Pricing', 'Gallery', 'Team'];

  return (
    <footer className="bg-white py-8">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="flex items-center justify-between">
          <p className="text-gray-400 text-sm">© 2021 All Rights Reserved</p>
          <div className="flex items-center gap-10">
            <nav className="flex gap-10">
              {navLinks.map((item) => (
                <a key={item} href="#" className="text-gray-600 hover:text-gray-900">{item}</a>
              ))}
            </nav>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors">
              Download
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer72;
