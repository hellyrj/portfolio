import { useState } from 'react';
import type { Project } from '../../types/project.types';
import Button from '../common/Button';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
  className?: string;
}

const ProjectCard = ({ 
  project, 
  onViewDetails,
  className = '' 
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const {
    title,
    shortDescription,
    technologies,
    image,
    githubLink
  } = project;

  return (
    <article 
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Main Card */}
      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={`Screenshot of ${title}`}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          
          {/* Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-70'
          }`} />
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <div className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-mono text-xs">LIVE</span>
              </div>
            </div>
          </div>
          
          {/* Project ID */}
          <div className="absolute top-4 left-4">
            <div className="px-3 py-1 bg-slate-800/80 border border-cyan-500/30 rounded backdrop-blur-sm">
              <span className="text-cyan-400 font-mono text-xs">#{project.id.toString().padStart(3, '0')}</span>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-400 leading-relaxed line-clamp-3">
            {shortDescription}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 3).map((tech: string) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 text-gray-300 font-mono text-xs rounded-full hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono text-xs rounded-full">
                +{technologies.length - 3}
              </span>
            )}
          </div>
          
          {/* Action Bar */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-700">
            <div className="flex items-center space-x-3">
              {githubLink && (
                <a 
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-slate-600/50 rounded-lg text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                  aria-label={`View ${title} source code on GitHub`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
            </div>
            
            <Button 
              variant="primary"
              onClick={() => onViewDetails(project)}
              className="px-4 py-2 text-sm font-medium"
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;