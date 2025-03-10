'use client';

const Footer = () => {
  return (
    <footer className="bg-gray-50/80 dark:bg-black shadow-lg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex-1 text-center md:text-left">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors duration-300">
              &copy; {new Date().getFullYear()} Built with ❤️ by
            </span>
          </div>
          <div className="flex-1 text-center">
            <a 
              href="https://aireinvestor.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-bold bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 
                        bg-clip-text text-transparent hover:from-blue-400 hover:to-blue-600 
                        dark:hover:from-blue-300 dark:hover:to-blue-500 transition-all duration-300"
            >
              The AI Real Estate Investor
            </a>
          </div>
          <div className="flex-1 text-center md:text-right">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Making AI Simple
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

