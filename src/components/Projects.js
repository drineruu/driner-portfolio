import React from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern web technologies for optimal performance.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT"],
      image: "bg-gradient-to-br from-green-400 to-blue-500",
      demoUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      challenges: "Implemented real-time inventory management and optimized database queries for better performance."
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and productivity analytics.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Socket.io", "Redis"],
      image: "bg-gradient-to-br from-purple-400 to-pink-500",
      demoUrl: "https://demo-taskmanager.com",
      githubUrl: "https://github.com/yourusername/task-manager",
      challenges: "Solved real-time synchronization challenges and implemented efficient caching strategies."
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and personalized weather alerts.",
      technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Chart.js"],
      image: "bg-gradient-to-br from-yellow-400 to-orange-500",
      demoUrl: "https://demo-weather.com",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      challenges: "Integrated multiple weather APIs and implemented smart caching for better user experience."
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "A comprehensive analytics platform for social media managers with data visualization, automated reporting, and trend analysis.",
      technologies: ["Angular", "Node.js", "PostgreSQL", "D3.js", "Docker"],
      image: "bg-gradient-to-br from-indigo-400 to-cyan-500",
      demoUrl: "https://demo-analytics.com",
      githubUrl: "https://github.com/yourusername/social-analytics",
      challenges: "Processed large datasets efficiently and created intuitive data visualizations."
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "An educational platform with course management, progress tracking, interactive quizzes, and video streaming capabilities.",
      technologies: ["React", "Django", "PostgreSQL", "AWS S3", "WebRTC"],
      image: "bg-gradient-to-br from-teal-400 to-green-500",
      demoUrl: "https://demo-lms.com",
      githubUrl: "https://github.com/yourusername/learning-management",
      challenges: "Implemented secure video streaming and designed scalable architecture for concurrent users."
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, optimized for performance and SEO.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      image: "bg-gradient-to-br from-red-400 to-purple-500",
      demoUrl: "https://your-portfolio.com",
      githubUrl: "https://github.com/yourusername/portfolio",
      challenges: "Achieved perfect Lighthouse scores and implemented smooth animations without performance impact."
    }
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
            href="https://github.com/yourusername"
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