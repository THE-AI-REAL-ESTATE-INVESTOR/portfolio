"use client";
import React, { useEffect, useState } from 'react';
import ThemeToggle from './theme-toggle';
import { FaMessage } from 'react-icons/fa6';
import { FaRegHandPeace } from 'react-icons/fa6';
import BookingCard from './booking-card';

const LeftTitle = () => (
  <h1 className="text-2xl font-bold">
    <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
      <span className="hidden md:inline">Mark Carpenter</span>
      <span className="md:hidden">Mark</span>
    </span>
  </h1>
);

const CenterTitle = () => (
  <h1 className="text-2xl font-bold text-center">
    <span className="bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">
      <span className="hidden md:inline">FULL STACK DEVELOPER</span>
      <span className="md:hidden">DEVELOPER</span>
    </span>
  </h1>
);

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    // Create observer for theme changes
    const observer = new MutationObserver(() => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    });

    // Start observing
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="bg-black/90 dark:bg-black shadow-lg transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-12">
            <div className="flex-1">
              {!isDark && <LeftTitle />}
            </div>
            <div className="flex-1 flex justify-center">
              {isDark && <CenterTitle />}
            </div>
            <div className="flex-1 flex justify-end items-center gap-2 md:gap-4">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1.5 rounded-full 
                          text-blue-400 hover:text-blue-300 
                          bg-blue-900/10 hover:bg-blue-800/20 dark:bg-blue-900/20
                          transition-all duration-300
                          focus:outline-none focus:ring-2 
                          focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black
                          group"
                aria-label="Open booking calendar"
              >
                <FaRegHandPeace className="w-3 h-3 md:w-4 md:h-4 animate-wave" />
                <span className="font-medium text-xs md:text-sm">Hire Me</span>
                <FaMessage className="w-2.5 h-2.5 md:w-3 md:h-3" />
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
      <BookingCard 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
}

