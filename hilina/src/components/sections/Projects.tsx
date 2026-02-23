import { useState } from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';
import type { Project } from '../../types';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.technologies.some(tech => 
      tech.toLowerCase().includes(filter.toLowerCase())
    );
  });

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 sm:py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/20 to-slate-900/50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm mb-6">
            <span className="text-cyan-400 font-mono text-sm">PROJECTS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              Featured
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my latest work and creative solutions built with modern technologies
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['all', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind'].map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === tech
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-slate-800/50 border border-cyan-500/30 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400'
              }`}
            >
              {tech === 'all' ? 'All Projects' : tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={openModal}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-slate-800/50 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-gray-400">Try adjusting your filter to see more projects</p>
          </div>
        )}

        {/* Stats Bar */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl px-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-black text-cyan-400">
                {filteredProjects.length}
              </div>
              <div className="text-sm text-gray-500">Filtered</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-cyan-500/50 to-purple-500/50" />
            <div className="text-center">
              <div className="text-3xl font-black text-purple-400">
                {projects.length}
              </div>
              <div className="text-sm text-gray-500">Total</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-purple-500/50 to-pink-500/50" />
            <div className="text-center">
              <div className="text-3xl font-black text-pink-400">∞</div>
              <div className="text-sm text-gray-500">Ideas</div>
            </div>
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={closeModal}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;