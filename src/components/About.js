import React from 'react';
import { Code, Database, Globe, Server } from 'lucide-react';
import Image from '../assets/images/driner-chibi.png';

const About = () => {
  const techStack = [
    { icon: <Code size={24} />, name: 'Frontend', tech: 'React, Vue.js, HTML5/CSS3' },
    { icon: <Server size={24} />, name: 'Backend', tech: 'Node.js, PHP, Python' },
    { icon: <Database size={24} />, name: 'Database', tech: 'MySQL, PostgreSQL, MongoDB' },
    { icon: <Globe size={24} />, name: 'Tools', tech: 'Git, Docker, AWS, Postman' },
  ];

  return (
    <section id="about" className="section-padding bg-gray-800/50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400">Get to know me better</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Photo */}
          <div className="order-2 lg:order-1">
            <div className="w-80 h-80 mx-auto">
            <img 
                src={Image}
                alt="Driner - Full Stack Developer" 
                className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-blue-500/20"
                onError={(e) => {
                  console.error('Image failed to load:', e.target.src);
                }}
                onLoad={() => console.log('Image loaded successfully')}
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Professional Bio</h3>
            <div className="space-y-6 text-gray-300">
              <p>
                I'm a passionate Full Stack Developer with over 2 years of experience in building 
                scalable web applications and creating exceptional user experiences. I specialize in 
                modern JavaScript frameworks and have a strong background in both frontend and backend development.
              </p>
              <p>
                My journey in software development started with a curiosity about how things work on the web. 
                This curiosity has evolved into a career where I get to solve complex problems and build 
                solutions that make a real impact.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through blog posts and mentoring other developers.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-blue-400">My Goals & Interests</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Building scalable and maintainable backend systems</li>
                <li>• Exploring cloud technologies and DevOps practices</li>
                <li>• Contributing to open-source projects</li>
                <li>• Mentoring junior developers</li>
                <li>• Staying updated with the latest tech trends</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Current Tech Stack */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-blue-400">Current Tech Stack</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((item, index) => (
              <div key={index} className="card p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-blue-400 mb-4 flex justify-center">{item.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{item.name}</h4>
                <p className="text-gray-400 text-sm">{item.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 