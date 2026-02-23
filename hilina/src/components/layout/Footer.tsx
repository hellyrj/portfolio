import '../../styles/animations.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-cyan-500/30 bg-black/60 backdrop-blur-sm mt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-gray-400 font-mono text-sm sm:text-base">
              © {currentYear} HILINA_SYSTEM
            </p>
            <p className="text-gray-500 font-mono text-xs sm:text-sm mt-1">
              POWERED_BY_REACT_TYPESCRIPT
            </p>
          </div>

          {/* Status Indicators */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 font-mono text-xs sm:text-sm hidden sm:inline">ONLINE</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse animation-delay-100" />
              <span className="text-cyan-400 font-mono text-xs sm:text-sm hidden sm:inline">ACTIVE</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-200" />
              <span className="text-purple-400 font-mono text-xs sm:text-sm hidden sm:inline">READY</span>
            </div>
          </div>

          {/* Version Info */}
          <div className="text-center sm:text-right">
            <p className="text-gray-500 font-mono text-xs sm:text-sm">
              VERSION_2.0.1
            </p>
            <p className="text-gray-600 font-mono text-xs sm:text-sm mt-1">
              LAST_UPDATE: {new Date().toLocaleDateString().replace(/\//g, '.')}
            </p>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-cyan-500/20">
          <div className="flex justify-center">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              <span className="text-gray-600 font-mono text-xs sm:text-sm">END_OF_TRANSMISSION</span>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
