// components/layout/Navbar.tsx
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  theme?: 'light' | 'dark';
  toggleTheme?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 py-3' 
          : 'bg-transparent py-5'
        }
      `}
      style={{
        backgroundColor: isScrolled ? 'var(--bg-card)' : 'transparent',
        borderBottomColor: isScrolled ? 'var(--border-accent)' : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a 
            href="#home" 
            className="text-2xl font-bold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              HILINA
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors duration-200 font-medium hover:text-cyan-400"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.name}
              </a>
            ))}

            {/* Theme Toggle Button */}
            {toggleTheme && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border transition-all duration-200"
                style={{
                  borderColor: 'var(--border-accent)',
                  color: 'var(--text-accent)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--cyber-primary)';
                  e.currentTarget.style.color = 'var(--bg-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--text-accent)';
                }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border transition-all duration-200"
            style={{
              borderColor: 'var(--border-accent)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--cyber-primary)';
              const spans = e.currentTarget.querySelectorAll('span');
              spans.forEach(span => span.style.backgroundColor = 'var(--bg-primary)');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              const spans = e.currentTarget.querySelectorAll('span');
              spans.forEach(span => span.style.backgroundColor = 'var(--cyber-primary)');
            }}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: 'var(--cyber-primary)' }} />
              <span className={`w-full h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: 'var(--cyber-primary)' }} />
              <span className={`w-full h-0.5 transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: 'var(--cyber-primary)' }} />
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`
            md:hidden absolute left-0 right-0 backdrop-blur-md border-b
            transition-all duration-300 overflow-hidden
            ${isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'}
          `}
          style={{
            backgroundColor: 'var(--bg-card)',
            borderBottomColor: 'var(--border-accent)',
          }}
        >
          <div className="flex flex-col space-y-3 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-cyan-400/10"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--cyber-primary)';
                  e.currentTarget.style.color = 'var(--bg-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;