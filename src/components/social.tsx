// src/app/page.tsx
"use client";

import { FaGithub } from 'react-icons/fa';

export default function Social() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative">
        <a
          href="https://github.com/THE-AI-REAL-ESTATE-INVESTOR"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-3 -translate-x-1/2 -top-1 z-10
                   flex items-center justify-center
                   w-12 h-12 md:w-16 md:h-16 rounded-full
                   bg-gradient-to-br from-gray-900 to-black
                   shadow-xl hover:shadow-2xl
                   transform hover:scale-110 hover:rotate-6
                   transition-all duration-300 ease-in-out
                   ring-2 ring-blue-500/30 dark:ring-blue-400/20"
          aria-label="Visit GitHub Profile"
        >
          <FaGithub className="w-7 h-7 md:w-10 md:h-10 text-white" />
        </a>
      </div>
    </div>
  );
}
