import '../../styles/animations.css';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/20 to-slate-900/50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm mb-6">
            <span className="text-cyan-400 font-mono text-sm">ABOUT_ME</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              Crafting Digital
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">
              Experiences
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer creating innovative solutions at the intersection of technology and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Story Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">👨‍💻</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">My Journey</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Started as a curious developer, evolved into a full-stack architect passionate about 
                    creating meaningful digital experiences that make a difference.
                  </p>
                </div>
              </div>
            </div>

            {/* Expertise Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-400/40 transition-all duration-300">
                <h4 className="text-cyan-400 font-semibold mb-3 text-sm">Frontend</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300 text-sm">React.js</span>
                      <span className="text-cyan-400 text-sm">90%</span>
                    </div>
                    <div className="w-full h-2 bg-cyan-500/30 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full w-11/12" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300 text-sm">TypeScript</span>
                      <span className="text-cyan-400 text-sm">85%</span>
                    </div>
                    <div className="w-full h-2 bg-cyan-500/30 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full w-10/12" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300 text-sm">Tailwind CSS</span>
                      <span className="text-cyan-400 text-sm">95%</span>
                    </div>
                    <div className="w-full h-2 bg-cyan-500/30 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 hover:border-purple-400/40 transition-all duration-300">
                <h4 className="text-purple-400 font-semibold mb-3 text-sm">Backend</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300 text-sm">Node.js</span>
                      <span className="text-purple-400 text-sm">88%</span>
                    </div>
                    <div className="w-full h-2 bg-purple-500/30 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-400 to-purple-500 rounded-full w-11/12" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300 text-sm">Python</span>
                      <span className="text-purple-400 text-sm">82%</span>
                    </div>
                    <div className="w-full h-2 bg-purple-500/30 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-400 to-purple-500 rounded-full w-10/12" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300 text-sm">MongoDB</span>
                      <span className="text-purple-400 text-sm">75%</span>
                    </div>
                    <div className="w-full h-2 bg-purple-500/30 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-400 to-purple-500 rounded-full w-3/4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Stats */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-2xl opacity-50 animate-pulse" />
              
              {/* Stats Card */}
              <div className="relative border-2 border-cyan-500/50 rounded-2xl p-8 bg-black/60 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                      3+
                    </div>
                    <p className="text-gray-400 text-sm">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
                      50+
                    </div>
                    <p className="text-gray-400 text-sm">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500 mb-2">
                      ∞
                    </div>
                    <p className="text-gray-400 text-sm">Passion</p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 text-center mt-8 pt-6 border-t border-cyan-500/20">
                  <div>
                    <div className="text-2xl font-black text-cyan-400">50+</div>
                    <div className="text-xs text-gray-500">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-purple-400">3+</div>
                    <div className="text-xs text-gray-500">Years</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-pink-400">100%</div>
                    <div className="text-xs text-gray-500">Passion</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center animate-bounce">
                  <span className="text-white font-bold text-2xl">⚡</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center animate-bounce animation-delay-500">
                  <span className="text-white font-bold text-xl">💡</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;