"use client";

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa';
import InfoCard from './info-card';

const CARDS = [
  {
    title: "Hey There!",
    icon: "👋",
    content: (
      <p className="text-lg leading-relaxed">
        I&apos;m Mark Carpenter - an ADHD-powered developer turned AI consultant from Oklahoma. 
        I help businesses leverage AI through deep tech integration and practical implementation strategies.
      </p>
    )
  },
  {
    title: "What I Do",
    icon: "🚀",
    content: (
      <ul className="list-none space-y-2">
        <li>• Founder of aireinvestor.com</li>
        <li>• AI Strategy Consultant</li>
        <li>• Full Stack Developer</li>
        <li>• Certified AI Persona Consultant</li>
        <li>• Real Estate Tech Innovator</li>
      </ul>
    )
  },
  {
    title: "Current Projects",
    icon: "💡",
    content: (
      <ul className="list-none space-y-2">
        <li>• FreeBlog.aireinvestor.com - AI-powered content scaling platform</li>
        <li>• Learn.aireinvestor.com - Free AI & dev resources</li>
        <li>• Enterprise AI Consulting - Custom AI integration solutions</li>
      </ul>
    )
  },
  {
    title: "Let&apos;s Connect",
    icon: "🤝",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a 
          href="https://calendly.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-200 hover:text-white dark:hover:text-blue-300 transition-colors"
        >
          📅 Book a chat: 15-Min Strategy Call
        </a>
        <a 
          href="mailto:mark@aireinvestor.com"
          className="flex items-center gap-2 text-blue-200 hover:text-white dark:hover:text-blue-300 transition-colors"
        >
          📧 Email: mark@aireinvestor.com
        </a>
        <a 
          href="https://facebook.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-200 hover:text-white dark:hover:text-blue-300 transition-colors"
        >
          🌐 Community: Facebook
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-200 hover:text-white dark:hover:text-blue-300 transition-colors"
        >
          💼 LinkedIn: Profile
        </a>
        <a 
          href="https://github.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-200 hover:text-white dark:hover:text-blue-300 transition-colors"
        >
          📚 GitHub
        </a>
      </div>
    )
  }
];

export default function InfoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % CARDS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % CARDS.length);
  };

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + CARDS.length) % CARDS.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white dark:text-white mb-2">Mark Carpenter</h1>
        <h2 className="text-xl text-blue-200 dark:text-blue-300">The AI RE INVESTOR</h2>
        <h3 className="text-lg text-blue-300 dark:text-blue-400 mt-2">
          Full Stack Developer | AI Consultant | Real Estate Innovator
        </h3>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
          Let&apos;s innovate together!
        </span>
      </div>

      <div className="relative h-[600px] mb-8">
        {CARDS.map((card, index) => (
          <InfoCard
            key={card.title}
            {...card}
            isActive={index === activeIndex}
          />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-blue-500 dark:bg-blue-700 text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={togglePlayPause}
          className="p-2 rounded-full bg-blue-500 dark:bg-blue-700 text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-blue-500 dark:bg-blue-700 text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
} 