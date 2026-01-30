import { Link } from 'react-router-dom';
import { footers } from '../data/footers';
import { ExternalLink, Code } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Footer Gallery</h1>
          <p className="text-gray-600 mt-2">
            70+ beautiful and creative website footer templates for web designers
          </p>
        </div>
      </header>

      {/* Gallery Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {footers.map((footer) => (
            <Link
              key={footer.id}
              to={footer.route}
              className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
            >
              {/* Image Preview */}
              <div className="relative aspect-[3/1] bg-gray-100 overflow-hidden">
                <img
                  src={`./ground_truth/${footer.image}`}
                  alt={footer.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                {footer.hasComponent && (
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <Code className="w-3 h-3" />
                    React Component
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {footer.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {footer.hasComponent ? 'Interactive Component' : 'Design Preview'}
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-600 text-sm">
          <p>© 2021 All Rights Reserved. Design inspiration from Figma Community.</p>
        </div>
      </footer>
    </div>
  );
}
