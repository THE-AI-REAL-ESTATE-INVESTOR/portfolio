"use client";

import { FaGithub, FaLinkedin, FaFacebook, FaCalendar, FaEnvelope } from 'react-icons/fa';

export default function About() {
  return (
    <div className="w-full max-w-8xl mx-auto p-8 rounded-xl shadow-2xl mb-12 bg-gradient-to-br from-blue-600 to-blue-900">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Mark Carpenter</h1>
        <h2 className="text-xl text-blue-200">The AI RE INVESTOR</h2>
        <h3 className="text-lg text-blue-300 mt-2">Full Stack Developer | AI Consultant | Real Estate Innovator</h3>
      </div>

      <div className="text-white space-y-6 max-w-8xl mx-auto">
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-blue-200 mb-4">👋 Hey There!</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I&apos;m Mark Carpenter -  ADHD Real Estate Investor turned AI consultant from Oklahoma.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            I help businesses leverage AI through deep tech integration and practical implementation strategies.
          </p>


        </div>

        <div className="mb-8">
          <h3 className="text-4xl font-semibold text-blue-200 mb-4">🚀 What I Do</h3>
          <ul className="list-none space-y-2">
            <li>• Founder of aireinvestor.com</li>
            <li>• AI Strategy Consultant</li>
            <li>• Full Stack Developer</li>
            <li>• Certified AI Persona Consultant</li>
            <li>• Real Estate Tech Innovator</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-200 mb-4">💡 Current Projects</h3>
          <ul className="list-none space-y-2">
            <li>• FreeBlog.aireinvestor.com - AI-powered content scaling platform</li>
            <li>• Learn.aireinvestor.com - Free AI & dev resources</li>
            <li>• Enterprise AI Consulting - Custom AI integration solutions</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-200 mb-4">🤝 Let&apos;s Connect</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://calendly.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
            >
              <FaCalendar /> 📅 Book a chat: 15-Min Strategy Call
            </a>
            <a 
              href="mailto:mark@aireinvestor.com"
              className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
            >
              <FaEnvelope /> 📧 Email: mark@aireinvestor.com
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
            >
              <FaFacebook /> 🌐 Community: Facebook
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
            >
              <FaLinkedin /> 💼 LinkedIn: Profile
            </a>
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
            >
              <FaGithub /> 📚 GitHub
            </a>
          </div>
        </div>

        <p className="text-base text-gray-500 dark:text-gray-400">
          Let&apos;s build something extraordinary together!
        </p>
      </div>
    </div>
  );
} 