import React from 'react';
import Button from '../common/Button';
import SocialLinks from '../common/SocialLinks';
import '../../styles/animations.css';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-16 sm:pt-20"
    >
      {/* Animated Background Grid - Optimized for mobile */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/10 to-pink-900/20" />
        <div className="absolute inset-0 opacity-10 sm:opacity-20 bg-grid" />
      </div>

      {/* Floating Orbs - Hidden on mobile for performance */}
      <div className="hidden sm:block absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="hidden md:block absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse animation-delay-1000" />
      <div className="hidden lg:block absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-yellow-500 rounded-full blur-3xl opacity-30 animate-pulse animation-delay-2000" />

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex-1 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Greeting */}
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
                <span className="text-cyan-400 font-mono text-xs sm:text-sm tracking-wider">
                  HELLO_WORLD
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  I'm Hilina
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
                <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> 
                <br className="hidden sm:block" />
                <span className="text-purple-400 font-semibold">crafting digital experiences</span>
                <br className="hidden sm:block" />
                <span className="text-pink-400 font-semibold">that inspire and innovate</span>
              </p>
            </div>

            {/* Description - Optimized for mobile */}
            <div className="max-w-2xl mx-auto lg:mx-0">
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed px-4 sm:px-0">
                Passionate about building exceptional web applications with modern technologies. 
                I transform complex problems into elegant solutions that push the boundaries of what's possible on the web.
              </p>
            </div>

            {/* CTA Buttons - Stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <Button 
                variant="primary" 
                size="md"
                onClick={onCtaClick}
                className="w-full sm:w-auto group relative overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
              </Button>
              <Button 
                variant="outline" 
                size="md"
                className="w-full sm:w-auto group relative overflow-hidden"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10">Get In Touch</span>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile - Hidden on very small screens */}
          <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative scale-75 sm:scale-90 md:scale-100">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur-2xl opacity-30 sm:opacity-50 animate-pulse" />
              
              {/* Profile Card */}
              <div className="relative border-2 border-cyan-500/50 rounded-3xl p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-sm">
                <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center">
                  {/* Hexagon Frame */}
                  <div className="relative">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center border-2 border-cyan-500/30">
                      <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                        H
                      </span>
                    </div>
                    
                    {/* Orbiting Elements - Hidden on mobile */}
                    <div className="hidden sm:block absolute inset-0 animate-spin animation-duration-10000">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rounded-full" />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full" />
                      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full" />
                      <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full" />
                    </div>
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className="mt-4 sm:mt-6 text-center">
                  <div className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full border border-green-500/50 bg-green-500/10">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse mr-1.5 sm:mr-2" />
                    <span className="text-green-400 font-mono text-[10px] sm:text-xs">AVAILABLE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links - Centered on mobile */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <SocialLinks />
        </div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens */}
      <div className="hidden sm:block absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-cyan-400 font-mono text-[10px] sm:text-xs tracking-wider opacity-60 animate-pulse">
            SCROLL
          </div>
          <div className="w-4 h-6 sm:w-6 sm:h-10 border-2 border-cyan-500/50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-cyan-400 rounded-full mt-1 sm:mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;