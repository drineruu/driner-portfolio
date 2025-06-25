import React, { useCallback } from 'react';
import { ChevronDown, Github, Linkedin, Instagram } from 'lucide-react';
import profileImage from '../assets/images/driner-chibi.png';
import Typewriter from 'typewriter-effect';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const particlesInit = useCallback(async (engine) => {
    console.log('Particles loading...');
    await loadSlim(engine);
    console.log('Particles loaded successfully!');
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log('Particles container loaded:', container);
  }, []);

  const particlesConfig = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981"],
      },
      links: {
        color: "#3b82f6",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 120,
      },
      opacity: {
        value: 0.6,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 2, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
        className="absolute inset-0 z-0"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      />
      
      <div className="container-width section-padding text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="w-64 h-64 mx-auto mb-8 relative">
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
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Hi, I'm Driner
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Software Engineer
          </p>
          
          <div className="text-lg text-gray-400 mb-2 max-w-2xl mx-auto flex justify-center items-center gap-2">
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
  
          <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
            Passionate about building scalable web applications and designing scalable backend systems, improving performance, and ensuring everything runs like clockwork.
          </p>
          
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-8 py-3 text-lg"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary px-8 py-3 text-lg"
            >
              Get In Touch
            </button>
          </div> */}
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
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