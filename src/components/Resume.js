import React from 'react';
import { Download, FileText, MapPin, Calendar, Briefcase } from 'lucide-react';

const Resume = () => {
  const workExperience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2022 - Present",
      responsibilities: [
        "Led development of 3 major web applications using React and Node.js",
        "Improved application performance by 40% through optimization",
        "Mentored 5 junior developers and conducted code reviews"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Co.",
      location: "New York, NY",
      period: "2020 - 2022",
      responsibilities: [
        "Developed responsive web applications using React and Vue.js",
        "Collaborated with design team to implement pixel-perfect UIs",
        "Integrated RESTful APIs and managed state with Redux"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Ventures",
      location: "San Francisco, CA",
      period: "2019 - 2020",
      responsibilities: [
        "Built and maintained company website using HTML, CSS, and JavaScript",
        "Implemented e-commerce functionality with PHP and MySQL",
        "Participated in agile development processes"
      ]
    }
  ];

  return (
    <section id="resume" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-gray-400 mb-8">
            Download my full resume or view my work experience below
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/driner-resume.pdf"
              download
              className="inline-flex items-center gap-2 btn-primary px-6 py-3"
            >
              <Download size={20} />
              Download Resume (PDF)
            </a>
            <a
              href="/driner-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-secondary px-6 py-3"
            >
              <FileText size={20} />
              View Online
            </a>
          </div>
        </div>

        {/* Work Experience */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-blue-400 text-center">Work Experience</h3>
          
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="card p-6 relative">
                {/* Timeline dot */}
                <div className="absolute -left-4 top-8 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Briefcase size={16} className="text-white" />
                </div>
                
                <div className="ml-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{job.title}</h4>
                      <p className="text-blue-400 font-medium">{job.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-gray-400 mb-1">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{job.period}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">•</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-blue-400 text-center">Key Achievements</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
              <p className="text-gray-300">Performance Improvement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 