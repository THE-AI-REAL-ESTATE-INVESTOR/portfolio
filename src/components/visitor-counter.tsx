'use client';

import { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';

export default function VisitorCounter() {
  const [baseCount, setBaseCount] = useState<number>(0);
  const [realCount, setRealCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Function to generate a random base number between 7 and 25
    const getRandomBaseCount = () => {
      return Math.floor(Math.random() * (25 - 7 + 1)) + 7;
    };
    
    // Set initial base count
    setBaseCount(getRandomBaseCount());
    
    // Try to get visitor ID from local storage
    const visitorKey = 'visitor_id';
    let storedVisitorId = null;
    
    try {
      storedVisitorId = localStorage.getItem(visitorKey);
    } catch (e) {
      console.error('Error accessing localStorage:', e);
    }

    let isVisible = true;
    
    // Set up visibility detection
    const visibilityHandler = () => {
      isVisible = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', visibilityHandler);
    
    const updateRealVisitorCount = async () => {
      // Only update if the page is visible
      if (!isVisible) return;
      
      try {
        // Append visitor ID to query if we have one
        const url = storedVisitorId 
          ? `/api/visitors?visitorId=${encodeURIComponent(storedVisitorId)}`
          : '/api/visitors';
          
        const response = await fetch(url);
        const data = await response.json();
        
        // Store the visitor ID if we got a new one
        if (data.visitorId && !storedVisitorId) {
          try {
            localStorage.setItem(visitorKey, data.visitorId);
          } catch (e) {
            console.error('Error storing in localStorage:', e);
          }
        }
        
        setRealCount(data.count);
        setLoading(false);
      } catch (error) {
        console.error('Error updating visitor count:', error);
        setLoading(false);
      }
    };
    
    // Initial count
    updateRealVisitorCount();

    // Set up intervals with more reasonable timing
    // 1. Update real visitor count every 30 seconds
    const realCountInterval = setInterval(updateRealVisitorCount, 30000);
    
    // 2. Occasionally adjust the base count for realism (every 15 seconds)
    const baseCountInterval = setInterval(() => {
      if (!isVisible) return;
      // Small adjustment to make it look more realistic
      const adjustment = Math.floor(Math.random() * 5) - 2;
      const newBaseCount = Math.max(7, Math.min(25, baseCount + adjustment));
      setBaseCount(newBaseCount);
    }, 15000);

    return () => {
      clearInterval(realCountInterval);
      clearInterval(baseCountInterval);
      document.removeEventListener('visibilitychange', visibilityHandler);
    };
  }, [baseCount]);

  // Calculate total displayed count (base + real)
  const totalCount = baseCount + realCount;

  return (
    <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 transition-colors duration-300 dark:bg-blue-400/5">
      <FaEye className="w-4 h-4 text-blue-400 dark:text-blue-300" />
      {loading ? (
        <span className="text-sm font-medium text-blue-400 dark:text-blue-300">Loading...</span>
      ) : (
        <span className="text-sm font-medium text-blue-400 dark:text-blue-300">
          {totalCount} people online now
        </span>
      )}
    </div>
  );
} 