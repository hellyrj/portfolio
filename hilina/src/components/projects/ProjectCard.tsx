import React, { useState } from 'react';
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
    githubLink,
    liveLink
  } = project;

  return (
    <article 
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={`Screenshot of ${title}`}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 4).map((tech: string) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            {githubLink && (
              <a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                aria-label={`View ${title} source code on GitHub`}
              >
                <span className="sr-only">GitHub</span>
                {/* GitHub icon would go here */}
              </a>
            )}
            {/* Other links */}
          </div>
          
          <Button 
            variant="primary"
            onClick={() => onViewDetails(project)}
          >
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;