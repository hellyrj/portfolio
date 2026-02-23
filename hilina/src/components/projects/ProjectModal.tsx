import React, { useEffect } from 'react';
import type { Project } from '../../types/project.types';
import Button from '../common/Button';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose
}) => {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const {
    title,
    fullDescription,
    technologies,
    features,
    challenges,
    learnings,
    liveLink,
    githubLink,
    screenshots,
    duration,
    role
  } = project;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 
                       dark:text-gray-400 dark:hover:text-gray-200 z-10"
              aria-label="Close modal"
            >
              <FaTimes size={24} />
            </button>

            {/* Content */}
            <div className="p-6">
              {/* Title */}
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {title}
              </h2>

              {/* Screenshots */}
              {screenshots && screenshots.length > 0 && (
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    {screenshots.map((screenshot, index) => (
                      <img
                        key={index}
                        src={screenshot}
                        alt={`${title} screenshot ${index + 1}`}
                        className="rounded-lg shadow-md w-full h-48 object-cover"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 dark:text-gray-300">
                {duration && (
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                    📅 {duration}
                  </span>
                )}
                {role && (
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                    👤 {role}
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Overview
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {fullDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Key Features
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Learnings */}
              {challenges && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Challenges Faced
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    {challenges}
                  </p>
                </div>
              )}

              {learnings && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    What I Learned
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    {learnings}
                  </p>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 
                               text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {githubLink && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(githubLink, '_blank')}
                  >
                    <FaGithub className="inline mr-2" />
                    View Code
                  </Button>
                )}
                {liveLink && (
                  <Button
                    variant="primary"
                    onClick={() => window.open(liveLink, '_blank')}
                  >
                    <FaExternalLinkAlt className="inline mr-2" />
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;