// src/app/page.tsx
"use client";
import ThemeToggle from "@/components/theme-toggle";

export default function BotRight() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute bottom-6 right-0">
        <ThemeToggle />
      </div>
    </div>
  );
}
