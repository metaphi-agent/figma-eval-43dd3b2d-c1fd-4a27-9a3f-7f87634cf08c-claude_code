import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white' | 'colorful';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  const textColor = variant === 'white' ? 'text-white' : 'text-gray-900';

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex gap-0.5">
        <div className="w-1.5 h-6 bg-pink-500 rounded-full" />
        <div className="w-1.5 h-6 bg-orange-400 rounded-full" />
        <div className="w-1.5 h-6 bg-blue-500 rounded-full" />
      </div>
      <span className={`text-xl font-semibold ${textColor}`}>
        Site<span className="font-bold">Logo</span>
      </span>
    </div>
  );
};

export const LogoColorful: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="flex gap-1">
      <div className="w-2 h-8 bg-gradient-to-b from-pink-500 to-pink-400 rounded-full" />
      <div className="w-2 h-8 bg-gradient-to-b from-orange-400 to-yellow-400 rounded-full" />
      <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full" />
    </div>
  </div>
);
