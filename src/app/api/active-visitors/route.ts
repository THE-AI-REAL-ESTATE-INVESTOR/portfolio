import { NextResponse } from 'next/server';
import { visitorStore } from '@/lib/visitors';

// Force this route to be dynamic
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Remove unused request parameter
export async function GET() {
  const count = visitorStore.getActiveCount();
  return NextResponse.json({ count });
} 