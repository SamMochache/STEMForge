import React from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light appearance' : 'Switch to dark appearance'}
      aria-pressed={isDark}
      title={isDark ? 'Light appearance' : 'Dark appearance'}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/5 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${className}`}>
      
      {isDark ? <SunIcon size={18} aria-hidden="true" /> : <MoonIcon size={18} aria-hidden="true" />}
    </button>);

}