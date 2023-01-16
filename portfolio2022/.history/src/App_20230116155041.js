import React from 'react';

import './App.scss';

import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Skills />
      <About />
      <Gallery />
    </div>
  );
}

export default App;
