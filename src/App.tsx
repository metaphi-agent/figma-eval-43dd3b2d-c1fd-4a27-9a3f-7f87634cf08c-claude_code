import React, { useState } from 'react';
import {
  Footer1, Footer2, Footer3, Footer4, Footer5, Footer6, Footer7, Footer8, Footer9, Footer10,
  Footer11, Footer12, Footer13, Footer14, Footer15, Footer16, Footer17, Footer18, Footer19, Footer20,
  Footer21, Footer22, Footer23, Footer24, Footer25, Footer26, Footer27, Footer28, Footer29, Footer30,
  Footer31, Footer32, Footer33, Footer34, Footer35, Footer36, Footer37, Footer38, Footer39, Footer40,
  Footer41, Footer42, Footer43, Footer44, Footer45, Footer46, Footer47, Footer48, Footer49, Footer50,
  Footer51, Footer52, Footer53, Footer54, Footer55, Footer56, Footer57, Footer58, Footer59, Footer60,
  Footer61, Footer62, Footer63, Footer64, Footer65, Footer66, Footer67, Footer68, Footer69, Footer70,
  Footer71, Footer72, Footer73, Footer74
} from './components/footers';

const footerComponents = [
  { id: 1, Component: Footer1 }, { id: 2, Component: Footer2 }, { id: 3, Component: Footer3 },
  { id: 4, Component: Footer4 }, { id: 5, Component: Footer5 }, { id: 6, Component: Footer6 },
  { id: 7, Component: Footer7 }, { id: 8, Component: Footer8 }, { id: 9, Component: Footer9 },
  { id: 10, Component: Footer10 }, { id: 11, Component: Footer11 }, { id: 12, Component: Footer12 },
  { id: 13, Component: Footer13 }, { id: 14, Component: Footer14 }, { id: 15, Component: Footer15 },
  { id: 16, Component: Footer16 }, { id: 17, Component: Footer17 }, { id: 18, Component: Footer18 },
  { id: 19, Component: Footer19 }, { id: 20, Component: Footer20 }, { id: 21, Component: Footer21 },
  { id: 22, Component: Footer22 }, { id: 23, Component: Footer23 }, { id: 24, Component: Footer24 },
  { id: 25, Component: Footer25 }, { id: 26, Component: Footer26 }, { id: 27, Component: Footer27 },
  { id: 28, Component: Footer28 }, { id: 29, Component: Footer29 }, { id: 30, Component: Footer30 },
  { id: 31, Component: Footer31 }, { id: 32, Component: Footer32 }, { id: 33, Component: Footer33 },
  { id: 34, Component: Footer34 }, { id: 35, Component: Footer35 }, { id: 36, Component: Footer36 },
  { id: 37, Component: Footer37 }, { id: 38, Component: Footer38 }, { id: 39, Component: Footer39 },
  { id: 40, Component: Footer40 }, { id: 41, Component: Footer41 }, { id: 42, Component: Footer42 },
  { id: 43, Component: Footer43 }, { id: 44, Component: Footer44 }, { id: 45, Component: Footer45 },
  { id: 46, Component: Footer46 }, { id: 47, Component: Footer47 }, { id: 48, Component: Footer48 },
  { id: 49, Component: Footer49 }, { id: 50, Component: Footer50 }, { id: 51, Component: Footer51 },
  { id: 52, Component: Footer52 }, { id: 53, Component: Footer53 }, { id: 54, Component: Footer54 },
  { id: 55, Component: Footer55 }, { id: 56, Component: Footer56 }, { id: 57, Component: Footer57 },
  { id: 58, Component: Footer58 }, { id: 59, Component: Footer59 }, { id: 60, Component: Footer60 },
  { id: 61, Component: Footer61 }, { id: 62, Component: Footer62 }, { id: 63, Component: Footer63 },
  { id: 64, Component: Footer64 }, { id: 65, Component: Footer65 }, { id: 66, Component: Footer66 },
  { id: 67, Component: Footer67 }, { id: 68, Component: Footer68 }, { id: 69, Component: Footer69 },
  { id: 70, Component: Footer70 }, { id: 71, Component: Footer71 }, { id: 72, Component: Footer72 },
  { id: 73, Component: Footer73 }, { id: 74, Component: Footer74 }
];

export default function App() {
  const [selectedFooter, setSelectedFooter] = useState<number | null>(null);

  if (selectedFooter !== null) {
    const footer = footerComponents.find(f => f.id === selectedFooter);
    if (footer) {
      const { Component } = footer;
      return (
        <div className="min-h-screen bg-gray-100">
          <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <button
                onClick={() => setSelectedFooter(null)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Gallery
              </button>
              <h1 className="text-lg font-semibold text-gray-900">Footer {selectedFooter}</h1>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedFooter(Math.max(1, selectedFooter - 1))}
                  disabled={selectedFooter === 1}
                  className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  onClick={() => setSelectedFooter(Math.min(74, selectedFooter + 1))}
                  disabled={selectedFooter === 74}
                  className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          <div className="pt-20">
            <Component />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            70+ Footer Components
          </h1>
          <p className="mt-2 text-gray-500">
            Beautiful, production-ready footer templates for web design
          </p>
        </div>
      </header>

      {/* Gallery Grid */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {footerComponents.map(({ id, Component }) => (
            <div
              key={id}
              onClick={() => setSelectedFooter(id)}
              className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
            >
              <div className="p-2 bg-gray-50 border-b">
                <span className="text-sm font-medium text-gray-600">Footer {id}</span>
              </div>
              <div className="relative overflow-hidden" style={{ height: '200px' }}>
                <div
                  className="absolute inset-0 transform scale-[0.35] origin-top-left"
                  style={{ width: '285%', height: '285%' }}
                >
                  <Component />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-3 bg-gray-50 text-center">
                <span className="text-sm text-blue-600 font-medium group-hover:text-blue-700">
                  View Full Size →
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          <p>74 Footer Components • Built with React + Tailwind CSS</p>
          <p className="mt-1 text-sm">Converted from Figma design</p>
        </div>
      </footer>
    </div>
  );
}
