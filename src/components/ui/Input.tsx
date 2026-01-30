import { InputHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  theme?: 'light' | 'dark';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, theme = 'light', className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className={clsx('block text-sm font-medium mb-1', {
            'text-gray-900': theme === 'light',
            'text-white': theme === 'dark',
          })}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={clsx(
            'w-full px-4 py-2 rounded-lg border transition-colors duration-150',
            'focus:outline-none focus:ring-2 focus:ring-offset-1',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            {
              'bg-white border-gray-300 text-gray-900 placeholder-gray-400': theme === 'light',
              'focus:border-blue-500 focus:ring-blue-500': theme === 'light' && !error,
              'bg-gray-800 border-gray-700 text-white placeholder-gray-500': theme === 'dark',
              'focus:border-blue-400 focus:ring-blue-400': theme === 'dark' && !error,
              'border-red-500 focus:border-red-500 focus:ring-red-500': error,
            },
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
