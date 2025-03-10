"use client";
import React from 'react';

interface BookingCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingCard({ isOpen, onClose }: BookingCardProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-4xl h-[80vh] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="w-full h-full p-1">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/X997wA5xcSPMCNfiD7Z5"
            className="w-full h-full rounded-lg"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
} 