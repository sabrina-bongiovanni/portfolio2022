import React, { useState } from "react";

import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";

import "./App.scss";

import Homepage from "./Components/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import PortfolioSection from "./Components/PortfolioSection/PortfolioSection";

function App() {
  const locale = LOCALES.ITALIAN;

  const [currentLocale, setCurrentLocale] = useState(locale);

  const handleLanguageChange = (e) => {
    setCurrentLocale(e);
  };
  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ITALIAN}
    >
      <div className="main-container">
        <Navbar
          currentLocale={currentLocale}
          handleLanguageChange={handleLanguageChange}
        />
        <PortfolioSection currentLocale={currentLocale} />
        {/* <Homepage currentLocale={currentLocale} /> */}
        <div className="pf-sections">
          {/* <About currentLocale={currentLocale} /> */}

          <Projects currentLocale={currentLocale} />
        </div>
      </div>
    </IntlProvider>
  );
}

export default App;
