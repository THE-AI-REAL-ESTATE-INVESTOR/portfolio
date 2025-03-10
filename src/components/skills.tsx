"use client";

import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa';
import { rankedSkills } from '@/config/rankedSkills';
import { skillIcons } from '@/components/skill-icons';

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>('left');

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setDirection('left');
      setActiveIndex((current) => (current + 1) % rankedSkills.skills.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToNext = () => {
    setDirection('left');
    setActiveIndex((current) => (current + 1) % rankedSkills.skills.length);
  };

  const goToPrevious = () => {
    setDirection('right');
    setActiveIndex((current) => (current - 1 + rankedSkills.skills.length) % rankedSkills.skills.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentSkill = rankedSkills.skills[activeIndex];
  const Icon = skillIcons[currentSkill.name as keyof typeof skillIcons];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
        Technology Stack
      </h2>

      <div className="relative h-[400px] mb-12">
        <div 
          key={currentSkill.name}
          className={`
            absolute inset-0 rounded-xl shadow-2xl p-8
            ${currentSkill.tailwindColor}
            transform transition-all duration-1000
            flex flex-col
            ${direction === 'left' ? 'animate-slide-left' : 'animate-slide-right'}
          `}
        >
          <div className="flex items-center gap-4 mb-6">
            {Icon && <Icon className="text-5xl text-white" />}
            <h3 className="text-3xl font-bold text-white">{currentSkill.name}</h3>
          </div>
          <p className="text-xl text-white/90 mb-6">
            Rank: #{currentSkill.rank} in Market Demand
          </p>
          <div className="flex-1 text-white/90 space-y-3">
            {currentSkill.description?.map((desc, index) => (
              <p key={index} className="text-lg font-medium">
                {desc}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-6">
        <button
          onClick={goToPrevious}
          className="p-3 rounded-full bg-blue-500 dark:bg-blue-700 text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors"
          aria-label="Previous skill"
        >
          <FaChevronLeft className="text-xl" />
        </button>
        <button
          onClick={togglePlayPause}
          className="p-3 rounded-full bg-blue-500 dark:bg-blue-700 text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <FaPause className="text-xl" /> : <FaPlay className="text-xl" />}
        </button>
        <button
          onClick={goToNext}
          className="p-3 rounded-full bg-blue-500 dark:bg-blue-700 text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors"
          aria-label="Next skill"
        >
          <FaChevronRight className="text-xl" />
        </button>
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