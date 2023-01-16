import React from 'react';

import { IntlProvider } from 'react-intl';

import './App.scss';

import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={locale}
    >
      <div className="main-container">
        <Navbar />
        <Homepage />
        <About />
        <Skills />
        <Gallery />
      </div>
    </IntlProvider>
  );
}

export default App;
