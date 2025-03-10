// src/app/page.tsx
"use client";

import AboutCarousel from "@/components/about-carousel";
import Footer from "@/components/footer";
import Skills from "@/components/skills";
import Social from "@/components/social";
import VisitorCounter from "@/components/visitor-counter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center gap-6 py-8">
      <div className="relative w-full">
        <Social />
        <AboutCarousel />
      </div>
      <VisitorCounter />
      <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-blue-500 dark:via-blue-400 to-transparent opacity-50" />
      <Skills />
      <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-blue-500 dark:via-blue-400 to-transparent opacity-50" />
      <Footer />
    </main>
  );
}


