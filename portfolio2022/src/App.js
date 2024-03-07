import React, { useState } from 'react';

import { IntlProvider } from 'react-intl';
import { LOCALES } from './i18n/locales';
import { messages } from './i18n/messages';

import './App.scss';

import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Skills from './Components/Skills/Skills';

function App() {
	const locale = LOCALES.ITALIAN;

	const [
		currentLocale,
		setCurrentLocale,
	] = useState(locale);

	console.log('prova');

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
					handleLanguageChange={
						handleLanguageChange
					}
				/>
				<Homepage />
				<About />
				<Skills />
				<Gallery />
			</div>
		</IntlProvider>
	);
}

export default App;
