"use client";

import ChitChat from './chit-chat';

const CARDS = [
  {
    title: "👋 Hey There!",
    content: (
      <p className="text-xl leading-relaxed">
        I&apos;m Mark Carpenter - an ADHD-powered developer turned AI consultant from Oklahoma. 
        I help businesses leverage AI through deep tech integration and practical implementation strategies.
      </p>
    )
  },
  {
    title: "🚀 What I Do",
    content: (
      <ul className="list-none space-y-3">
        <li className="text-xl">• Founder of aireinvestor.com</li>
        <li className="text-xl">• AI Strategy Consultant</li>
        <li className="text-xl">• Full Stack Developer</li>
        <li className="text-xl">• Certified AI Persona Consultant</li>
        <li className="text-xl">• Real Estate Tech Innovator</li>
      </ul>
    )
  },
  {
    title: "💡 Current Projects",
    content: (
      <ul className="list-none space-y-3">
        <li className="text-xl">• FreeBlog.aireinvestor.com - AI-powered content scaling platform</li>
        <li className="text-xl">• Learn.aireinvestor.com - Free AI & dev resources</li>
        <li className="text-xl">• Enterprise AI Consulting - Custom AI integration solutions</li>
      </ul>
    )
  },
  {
    title: "🤝 Let&apos;s Connect",
    content: (
      <div className="grid grid-cols-1 gap-3">
        <a 
          href="https://calendly.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xl text-blue-200 hover:text-white dark:hover:text-blue-300 transition-colors"
        >
          📅 Book a chat: 15-Min Strategy Call
        </a>
        <a 
          href="mailto:mark@aireinvestor.com"
          className="flex items-center gap-2 text-xl text-blue-200 hover:text-white dark:hover:text-blue-300 transition-colors"
        >
          📧 Email: mark@aireinvestor.com
        </a>
        <a 
          href="https://facebook.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xl text-blue-200 hover:text-white dark:hover:text-blue-300 transition-colors"
        >
          🌐 Community: Facebook
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xl text-blue-200 hover:text-white dark:hover:text-blue-300 transition-colors"
        >
          💼 LinkedIn: Profile
        </a>
        <a 
          href="https://github.com/aireinvestor" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-base md:text-xl text-blue-200 hover:text-white dark:hover:text-blue-300 transition-colors"
        >
          <span className="text-base md:text-xl">📚</span> GitHub: @aireinvestor
        </a>
      </div>
    )
  }
];

export default function AboutGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Mark Carpenter
        </h1>
        <h2 className="text-2xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          The AI RE INVESTOR
        </h2>
        <h3 className="text-xl mt-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Full Stack Developer | AI Consultant | Real Estate Innovator
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {CARDS.map((card) => (
          <div
            key={card.title}
            className="bg-gradient-to-br from-blue-600 to-blue-900 dark:from-gray-800 dark:to-gray-900
                     rounded-xl shadow-2xl p-8 flex flex-col"
          >
            <h3 className="text-3xl font-bold text-white dark:text-blue-300 mb-6">
              {card.title}
            </h3>
            <div className="flex-1 mb-6">
              <div className="text-white/90 dark:text-gray-200">
                {card.content}
              </div>
            </div>
            <div className="mt-auto">
              <ChitChat />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 