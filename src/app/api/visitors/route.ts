import { NextResponse } from 'next/server';
import { visitorStore } from '@/lib/visitors';

// Simple random ID generator
function generateId() {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const visitorId = url.searchParams.get('visitorId') || generateId();
  
  // Record this visitor
  visitorStore.recordVisit(visitorId);
  
  return NextResponse.json(
    { 
      count: visitorStore.getActiveCount(),
      visitorId 
    },
    {
      headers: {
        'Cache-Control': 'no-store',
      },
    }
  );
} 