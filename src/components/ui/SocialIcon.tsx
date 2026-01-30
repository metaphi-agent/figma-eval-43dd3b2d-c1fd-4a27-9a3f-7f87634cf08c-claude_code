import { Facebook, Twitter, Instagram, Linkedin, Github, Youtube, Send, Figma } from 'lucide-react';
import { clsx } from 'clsx';

interface SocialIconProps {
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'github' | 'youtube' | 'telegram' | 'figma';
  href?: string;
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

const iconMap = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  github: Github,
  youtube: Youtube,
  telegram: Send,
  figma: Figma,
};

export default function SocialIcon({ platform, href = '#', theme = 'light', size = 'md' }: SocialIconProps) {
  const Icon = iconMap[platform];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'inline-flex items-center justify-center transition-colors duration-150',
        'hover:opacity-70',
        {
          'text-white': theme === 'dark',
          'text-gray-900': theme === 'light',
          'w-5 h-5': size === 'sm',
          'w-6 h-6': size === 'md',
          'w-8 h-8': size === 'lg',
        }
      )}
      aria-label={platform}
    >
      <Icon className="w-full h-full" />
    </a>
  );
}
