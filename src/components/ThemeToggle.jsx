"use client";
import { FaMoon, FaSun } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '@/Providers/ThemeContext';
// import { ThemeContext } from '../roviders/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`
   rounded-full shadow-lg border-2 md:h-12 md:w-12 w-10 h-10
        transition-all duration-300 transform hover:scale-110
        ${theme === 'light' 
          ? 'bg-blue-50 text-blue-800 border-blue-800' 
          : 'bg-blue-200 text-blue-900 border-blue-500'}
      `}
      title="Toggle Theme"
    >
      {theme === 'light' ? <FaMoon size={20} className='mx-auto'/> : <FaSun size={20} className='mx-auto' />}
    </button>
  );
};

export default ThemeToggle;