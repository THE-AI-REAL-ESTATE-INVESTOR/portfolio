// src/components/ThemeToggle.tsx
"use client";

import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);  // Start with dark mode

  useEffect(() => {
    // Always start in dark mode
    document.documentElement.classList.add('dark');
    
    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full text-gray-400 hover:text-gray-100 
                transition-colors duration-200 ease-in-out
                hover:bg-blue-800 focus:outline-none focus:ring-2 
                focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <FaSun className="w-5 h-5 text-yellow-400" />
      ) : (
        <FaMoon className="w-5 h-5 text-blue-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
