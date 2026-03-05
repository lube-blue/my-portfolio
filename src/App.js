import React, { useState, useEffect } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // State สำหรับเก็บตำแหน่งเมาส์
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="App">
      {/* Custom Cursor วงกลมสีฟ้า */}
      <div 
        className="cursor-ring" 
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      ></div>
      {/* จุดตรงกลางเมาส์ (ถ้าอยากได้) */}
      <div 
        className="cursor-dot" 
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      ></div>

      <Navbar />
      <div>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;