import React from 'react';
import { ChevronDown, Github, Linkedin, Instagram } from 'lucide-react';
import profileImage from '../assets/images/driner-chibi.png';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container-width section-padding">
        <div className="animate-fade-in">
          {/* Main Content - Two Column Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Hi, I'm Driner
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-6">
                Software Engineer
              </p>
              
              <div className="text-lg text-gray-400 mb-2 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-2">
                <span>Grabs a cup of coffee.</span>
                <div className="text-blue-400 font-semibold">
                  <Typewriter
                    options={{
                      strings: ['Inhale.', 'Exhale.', 'Code.'],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                      delay: 80,
                      pauseFor: 1500,
                    }}
                  />
                </div>
              </div>
      
              <p className="text-md text-gray-400 mb-6 max-w-2xl lg:max-w-none">
                I'm passionate about building scalable web applications and designing scalable backend systems,
                improving performance, and ensuring everything runs like clockwork.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                <button 
                  onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary px-8 py-3 text-lg"
                >
                  View My Work
                </button>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6">
                <a 
                  href="https://github.com/drineruu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/jnerfamilaran" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/dri.ner/"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex-shrink-0 order-first lg:order-last">
              <div className="w-64 h-64 lg:w-80 lg:h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1">
                  <img 
                    src={profileImage}
                    alt="Driner - Full Stack Developer" 
                    className="w-full h-full object-cover rounded-full bg-gray-900"
                    onError={(e) => {
                      console.error('Image failed to load:', e.target.src);
                    }}
                    onLoad={() => console.log('Image loaded successfully')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-200 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero; 