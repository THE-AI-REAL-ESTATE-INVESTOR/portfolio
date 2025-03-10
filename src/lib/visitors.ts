// A simple in-memory store for active visitors
// In a production app, you would use Redis or similar for persistence across serverless functions

type Visitor = {
  id: string;
  lastSeen: number;
};

class VisitorStore {
  private visitors: Map<string, Visitor> = new Map();
  private expirationTime = 60000; // 60 seconds in milliseconds

  constructor() {
    // Clean up expired visitors every minute
    if (typeof setInterval !== 'undefined') {
      setInterval(() => this.cleanupExpiredVisitors(), 60000);
    }
  }

  recordVisit(id: string): void {
    this.visitors.set(id, {
      id,
      lastSeen: Date.now(),
    });
  }

  getActiveCount(): number {
    this.cleanupExpiredVisitors();
    return this.visitors.size;
  }

  private cleanupExpiredVisitors(): void {
    const now = Date.now();
    this.visitors.forEach((visitor, id) => {
      if (now - visitor.lastSeen > this.expirationTime) {
        this.visitors.delete(id);
      }
    });
  }
}

// Create a singleton instance
export const visitorStore = new VisitorStore(); 