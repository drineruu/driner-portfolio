import React from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Document Processing Web Application",
      description: "A web application that allows users to upload and process documents. Built with modern web technologies for optimal performance.",
      technologies: ["Laravel", "MySQL", "phpMyAdmin"],
      image: "bg-gradient-to-br from-green-400 to-blue-500",
      demoUrl: "https://github.com/drineruu/driner-document-processing",
      githubUrl: "https://github.com/drineruu/driner-document-processing",
      challenges: "This project is a web application that allows users to upload and process documents. It is built with Laravel and MySQL."
    },
    {
      id: 2,
      title: "UB Telecare",
      description: "Telemedicine system with multiple user roles and video call functionalities",
      technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
      image: "bg-gradient-to-br from-purple-400 to-pink-500",
      demoUrl: "https://github.com/drineruu/ub-telecare",
      githubUrl: "https://github.com/drineruu/ub-telecare",
      challenges: "This project is a telemedicine system with multiple user roles and video call functionalities. It is built with Vue.js and Laravel."
    },
    {
      id: 3,
      title: "Succulent Alpha Order Management System (SAOMS)",
      description: "A simple e-commerce system for succulent products",
      technologies: ["Laravel", "MySQL", "phpMyAdmin"],
      image: "bg-gradient-to-br from-yellow-400 to-orange-500",
      demoUrl: "https://github.com/drineruu/saoms",
      githubUrl: "https://github.com/drineruu/saoms",
      challenges: "This project is a simple e-commerce system for succulent products. It is built with Laravel and MySQL."
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card group hover:scale-105 transition-all duration-300">
              {/* Project Image Placeholder */}
              <div className={`h-48 ${project.image} rounded-t-lg flex items-center justify-center`}>
                <span className="text-white text-lg font-semibold">Project Screenshot</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Challenges */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Challenge:</h4>
                  <p className="text-xs text-gray-500">{project.challenges}</p>
                </div>
                
                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors duration-200"
                  >
                    <Play size={16} />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm font-medium transition-colors duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/drineruu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary px-6 py-3"
          >
            <ExternalLink size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 