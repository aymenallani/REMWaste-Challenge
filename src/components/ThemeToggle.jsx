import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-3 rounded-full transition-all duration-300 ${
        isDarkMode
          ? 'bg-amber-500 hover:bg-amber-400 text-white shadow-lg shadow-amber-500/25'
          : 'bg-gray-900 hover:bg-gray-800 text-white shadow-lg shadow-gray-900/25'
      } hover:scale-110 hover:rotate-12 ${className}`}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default ThemeToggle;