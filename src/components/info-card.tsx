"use client";

import { ReactNode } from 'react';
import ChitChat from './chit-chat';

interface InfoCardProps {
  title: string;
  icon: string;
  content: ReactNode;
  isActive: boolean;
}

export default function InfoCard({ title, icon, content, isActive }: InfoCardProps) {
  return (
    <div 
      className={`
        absolute w-full h-full transition-all duration-500 transform
        ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
        bg-gradient-to-br from-blue-600 to-blue-900 dark:from-gray-800 dark:to-gray-900
        rounded-xl shadow-2xl p-6
      `}
    >
      <div className="h-full flex flex-col">
        <h3 className="text-2xl font-semibold text-blue-200 dark:text-blue-300 mb-4 flex items-center gap-2">
          {icon} {title}
        </h3>
        <div className="flex-1 overflow-auto mb-4">
          <div className="text-white dark:text-gray-200">
            {content}
          </div>
        </div>
        <div className="mt-auto">
          <ChitChat />
        </div>
      </div>
    </div>
  );
} 