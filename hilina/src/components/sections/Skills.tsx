import { skillGroups } from '../../data/skills';
import '../../styles/animations.css';

interface Skill {
  name: string;
  level: number;
  icon?: string;
  category: string;
}

interface SkillGroup {
  category: string;
  title?: string;
  skills: Skill[];
}

const Skills = () => {
  const getCategoryIcon = (category: string): string => {
    switch(category.toLowerCase()) {
      case 'frontend': return '🎨';
      case 'backend': return '⚙️';
      case 'database': return '🗄️';
      case 'design': return '🎯';
      case 'tools': return '🛠️';
      default: return '💻';
    }
  };

  const getCategoryColor = (index: number): string => {
    const colors = ['from-cyan-400 to-cyan-600', 'from-purple-400 to-purple-600', 'from-pink-400 to-pink-600', 'from-yellow-400 to-yellow-600'];
    return colors[index % colors.length];
  };

  const getTextColor = (index: number): string => {
    const colors = ['text-cyan-400', 'text-purple-400', 'text-pink-400', 'text-yellow-400'];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/20 to-slate-900/50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm mb-6">
            <span className="text-cyan-400 font-mono text-sm">TECH_STACK</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              Technical
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group: SkillGroup, index: number) => (
            <div 
              key={group.category} 
              className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(index)} rounded-xl flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">
                    {getCategoryIcon(group.category)}
                  </span>
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${getTextColor(index)}`}>{group.category}</h3>
                  <p className="text-gray-400 text-sm">{group.skills.length} technologies</p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {group.skills.map((skill: Skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${getCategoryColor(index)} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Footer */}
              <div className="mt-6 pt-4 border-t border-slate-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${getTextColor(index)}`} />
                    <span className="text-gray-500 text-sm">Technologies</span>
                  </div>
                  <span className={`text-sm font-medium ${getTextColor(index)}`}>
                    {group.skills.length}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 text-center hover:border-cyan-400/40 transition-all duration-300">
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
              {skillGroups.reduce((acc, group) => acc + group.skills.length, 0)}+
            </div>
            <p className="text-gray-400 text-sm">Technologies</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 text-center hover:border-purple-400/40 transition-all duration-300">
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
              3+
            </div>
            <p className="text-gray-400 text-sm">Years Experience</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-4 text-center hover:border-pink-400/40 transition-all duration-300">
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500 mb-2">
              100%
            </div>
            <p className="text-gray-400 text-sm">Commitment</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-4 text-center hover:border-yellow-400/40 transition-all duration-300">
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-500 mb-2">
              ∞
            </div>
            <p className="text-gray-400 text-sm">Passion</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;