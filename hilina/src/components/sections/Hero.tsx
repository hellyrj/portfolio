import React from 'react';
import Button from '../common/Button';

interface HeroProps {
  onCtaClick: () => void;
}

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

const SocialLinks: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { name: 'GitHub', icon: '🔗', url: 'https://github.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-slate-800/50 border border-cyan-500/30 rounded-lg flex items-center justify-center hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 group"
          aria-label={`Visit my ${link.name} profile`}
        >
          <span className="text-xl group-hover:scale-110 transition-transform">
            {link.icon}
          </span>
        </a>
      ))}
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/10 to-pink-900/20" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-yellow-500 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Greeting */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
                <span className="text-cyan-400 font-mono text-sm tracking-wider">HELLO_WORLD</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  I'm Hilina
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
                <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> crafting
                <br />
                <span className="text-purple-400 font-semibold">digital experiences</span> that
                <br />
                <span className="text-pink-400 font-semibold">inspire and innovate</span>
              </p>
            </div>

            {/* Description */}
            <div className="max-w-2xl">
              <p className="text-gray-400 leading-relaxed">
                Passionate about building exceptional web applications with modern technologies. 
                I transform complex problems into elegant solutions that push the boundaries of what's possible on the web.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={onCtaClick}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="group relative overflow-hidden"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg" />
              </Button>
            </div>
          </div>

          {/* Right Content - Profile */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur-2xl opacity-50 animate-pulse" />
              
              {/* Profile Card */}
              <div className="relative border-2 border-cyan-500/50 rounded-3xl p-8 bg-black/60 backdrop-blur-sm">
                <div className="w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
                  {/* Hexagon Frame */}
                  <div className="relative">
                    <div className="w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center border-2 border-cyan-500/30">
                      <span className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                        H
                      </span>
                    </div>
                    
                    {/* Orbiting Elements */}
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s' }}>
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400 rounded-full" />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-purple-400 rounded-full" />
                      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-pink-400 rounded-full" />
                      <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full" />
                    </div>
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center px-3 py-1 rounded-full border border-green-500/50 bg-green-500/10">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2" />
                    <span className="text-green-400 font-mono text-xs">AVAILABLE_FOR_WORK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex justify-center">
          <SocialLinks />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-cyan-400 font-mono text-xs tracking-wider opacity-60 animate-pulse">
            SCROLL
          </div>
          <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;