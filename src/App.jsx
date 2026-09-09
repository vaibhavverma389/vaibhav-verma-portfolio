import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import ProblemSolving from './components/ProblemSolving';
import AiTools from './components/AiTools';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <ProblemSolving />
        <AiTools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
