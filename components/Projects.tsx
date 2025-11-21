import React from 'react';
import { SectionId } from '../types';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">Featured Projects</h2>
             <p className="text-gray-600">これまでに開発した主要なプロジェクトです。</p>
          </div>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-accent hover:text-dark transition-colors mt-4 md:mt-0 group">
            <span>View all on GitHub</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-accent/30 transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-xl"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-3 bg-white rounded-full text-black hover:bg-accent hover:text-white transition-colors shadow-lg"
                      title="View Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-3 bg-white rounded-full text-black hover:bg-accent hover:text-white transition-colors shadow-lg"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-accent font-medium">
                <span>View all on GitHub</span>
                <ArrowUpRight className="w-4 h-4" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;