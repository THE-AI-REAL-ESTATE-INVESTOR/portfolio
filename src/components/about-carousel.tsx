"use client";

import { useState, useEffect } from 'react';
import ChitChat from './chit-chat';

const CARDS = [
  {
    title: "👋 Hey There!",
    content: (
      <div className="space-y-2">
        <p className="text-lg md:text-xl leading-relaxed">
          I&apos;m Mark Carpenter, A Real Estate Investor 🏠 turned AI consultant and full stack software engineer from Oklahoma.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          I help businesses leverage AI through deep tech integration and practical implementation strategies.
        </p>
      </div>
    )
  },
  {
    title: "🚀 What I Do",
    content: (
      <ul className="list-none space-y-2">
        <li className="text-lg md:text-xl">• Founder of aireinvestor.com</li>
        <li className="text-lg md:text-xl">• AI Strategy Consultant</li>
        <li className="text-lg md:text-xl">• Full Stack Developer</li>
        <li className="text-lg md:text-xl">• Certified AI Persona Consultant</li>
        <li className="text-lg md:text-xl">• Real Estate Tech Innovator</li>
      </ul>
    )
  },
  {
    title: "💡 Current Projects",
    content: (
      <ul className="list-none space-y-2">
        <li className="text-lg md:text-xl">• FreeBlog.aireinvestor.com - AI-powered content scaling platform</li>
        <li className="text-lg md:text-xl">• Learn.aireinvestor.com - Free AI & dev resources</li>
        <li className="text-lg md:text-xl">• Enterprise AI Consulting - Custom AI integration solutions</li>
      </ul>
    )
  },
  {
    title: "🤝 Let&apos;s Connect",
    content: (
      <div className="grid grid-cols-1 gap-2">
        <a 
          href="https://calendly.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-lg md:text-xl text-blue-200 hover:text-white dark:hover:text-blue-300 transition-colors"
        >
          📅 Book a chat: 15-Min Strategy Call
        </a>
        <a 
          href="mailto:mark@aireinvestor.com"
          className="flex items-center gap-2 text-lg md:text-xl text-blue-200 hover:text-white dark:hover:text-blue-300 transition-colors"
        >
          📧 Email: mark@aireinvestor.com
        </a>
        <a 
          href="https://facebook.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-lg md:text-xl text-blue-200 hover:text-white dark:hover:text-blue-300 transition-colors"
        >
          🌐 Community: Facebook
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-lg md:text-xl text-blue-200 hover:text-white dark:hover:text-blue-300 transition-colors"
        >
          💼 LinkedIn: Profile
        </a>
        <a 
          href="https://github.com/aireinvestor" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-lg md:text-xl text-blue-200 hover:text-white dark:hover:text-blue-300 transition-colors"
        >
          📚 GitHub: @aireinvestor
        </a>
      </div>
    )
  }
];

export default function AboutCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % CARDS.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleBookingOpen = (isOpen: boolean) => {
    setIsPaused(isOpen);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center mb-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          <span className="hidden md:inline">Mark Carpenter</span>
          <span className="md:hidden">Mark</span>
        </h1>
        <h2 className="text-base md:text-lg bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          The AI RE INVESTOR 🏠
        </h2>
        <h3 className="text-sm md:text-base mt-1 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Full Stack Developer | AI Consultant | Real Estate Innovator
        </h3>
        <span className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400">
          Let&apos;s build something amazing together!
        </span>
      </div>

      <div className="relative h-[300px] md:h-[350px] mb-6 md:mb-8">
        <div 
          key={CARDS[activeIndex].title}
          className={`
            absolute inset-0 rounded-xl shadow-2xl p-4 md:p-6
            bg-gradient-to-br from-blue-600 to-blue-900 dark:from-gray-800 dark:to-gray-900
            transform transition-all duration-1000
            flex flex-col
            ${activeIndex === 0 ? 'animate-slide-left' : activeIndex === CARDS.length - 1 ? 'animate-slide-right' : ''}
          `}
        >
          <h3 className="text-base md:text-lg font-semibold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            {CARDS[activeIndex].title}
          </h3>
          <div className="flex-1">
            <div className="text-white dark:text-gray-200">
              {CARDS[activeIndex].content}
            </div>
          </div>
          <div className="border-t border-blue-500/20">
            <div className="pt-2 h-[35px] flex items-center">
              <ChitChat onBookingOpen={handleBookingOpen} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideLeft {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideRight {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-left {
          animation: slideLeft 1s ease-out;
        }
        .animate-slide-right {
          animation: slideRight 1s ease-out;
        }
      `}</style>
    </div>
  );
} 