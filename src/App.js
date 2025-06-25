import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Personal from './components/Personal';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Education from './components/Education';
import Contact from './components/Contact';
// import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Education />
        <Personal />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
