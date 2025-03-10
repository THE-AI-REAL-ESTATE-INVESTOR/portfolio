// src/app/page.tsx
"use client";

import Image from "next/image";
import { siteConfig } from '@/config/site';
import { FaMessage, FaRegHandPeace } from 'react-icons/fa6';
import { useState } from 'react';
import BookingCard from './booking-card';

interface ChitChatProps {
  onBookingOpen?: (isOpen: boolean) => void;
}

export default function ChitChat({ onBookingOpen }: ChitChatProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookingToggle = (open: boolean) => {
    setIsBookingOpen(open);
    onBookingOpen?.(open);
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        {/* Mobile version */}
        <div className="flex md:hidden items-center gap-2">
          <Image 
            className="h-8 w-8 rounded-full ring-1 ring-blue-600 ring-offset-2 
                      transition-transform duration-300 hover:scale-105" 
            src="/mark.jpg" 
            alt="Mark's profile"
            width={32}
            height={32}
          />
          <button
            onClick={() => handleBookingToggle(true)}
            className="flex items-center gap-1 px-2 py-1 rounded-full text-blue-400 hover:text-blue-300 
                      bg-blue-900/100 hover:bg-blue-800/20
                      transition-all duration-200 ease-in-out
                      focus:outline-none focus:ring-1 
                      focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-black"
            aria-label="Open booking calendar"
          >
            <FaRegHandPeace className="w-4 h-4 animate-wave" />
            <span className="text-sm">Hire Me</span>
            <FaMessage className="w-3 h-3" />
          </button>
        </div>

        {/* Desktop version */}
        <div className="hidden md:flex items-center gap-4">
          <Image 
            className="h-12 w-12 rounded-full ring-2 ring-blue-600 ring-offset-2 
                      transition-transform duration-300 hover:scale-105" 
            src="/mark.jpg" 
            alt="Mark's profile"
            width={48}
            height={48}
          />
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {siteConfig.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {siteConfig.description}
            </p>
          </div>
          <button
            onClick={() => handleBookingToggle(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-blue-400 hover:text-blue-300 
                      bg-blue-900/100 hover:bg-blue-800/20
                      transition-all duration-200 ease-in-out
                      focus:outline-none focus:ring-2 
                      focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Open booking calendar"
          >
            <FaRegHandPeace className="w-5 h-5 animate-wave" />
            <span className="font-medium">Hire Me</span>
            <FaMessage className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <BookingCard 
        isOpen={isBookingOpen} 
        onClose={() => handleBookingToggle(false)} 
      />
    </div>
  );
}
