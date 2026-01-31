import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Code } from 'lucide-react';
import { footers } from '../data/footers';
import Footer1 from '../components/footers/Footer1';
import Footer10 from '../components/footers/Footer10';
import Footer20 from '../components/footers/Footer20';
import Footer30 from '../components/footers/Footer30';
import Footer50 from '../components/footers/Footer50';

const footerComponents: Record<number, () => JSX.Element> = {
  1: Footer1,
  10: Footer10,
  20: Footer20,
  30: Footer30,
  50: Footer50,
};

export default function FooterDetail() {
  const { id } = useParams<{ id: string }>();
  const footerId = parseInt(id || '1');
  const footer = footers.find((f) => f.id === footerId);
  const FooterComponent = footerComponents[footerId];

  if (!footer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Footer not found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            ← Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Gallery
            </Link>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold text-gray-900">{footer.name}</h1>
              {footer.hasComponent && (
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <Code className="w-3 h-3" />
                  React
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-8">
        {FooterComponent ? (
          <div className="space-y-8">
            {/* Live Component */}
            <div className="bg-white shadow-lg">
              <div className="max-w-7xl mx-auto px-6 py-4 bg-gray-100 border-b border-gray-200">
                <p className="text-sm font-medium text-gray-700">Interactive React Component</p>
              </div>
              <FooterComponent />
            </div>

            {/* Original Design Reference */}
            <div className="max-w-7xl mx-auto px-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                  <p className="text-sm font-medium text-gray-700">Original Figma Design</p>
                </div>
                <div className="p-6">
                  <img
                    src={`./assets/footers/${footer.image}`}
                    alt={footer.name}
                    className="w-full h-auto rounded border border-gray-200"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Image-only preview for footers without components
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <p className="text-sm font-medium text-gray-700">Design Preview</p>
              </div>
              <div className="p-6">
                <img
                  src={`./assets/footers/${footer.image}`}
                  alt={footer.name}
                  className="w-full h-auto rounded border border-gray-200"
                />
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="max-w-7xl mx-auto px-6 mt-8">
          <div className="flex justify-between items-center">
            {footerId > 1 ? (
              <Link
                to={`/footer-${footerId - 1}`}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Footer {footerId - 1}
              </Link>
            ) : (
              <div></div>
            )}
            {footerId < 74 && (
              <Link
                to={`/footer-${footerId + 1}`}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Footer {footerId + 1}
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
