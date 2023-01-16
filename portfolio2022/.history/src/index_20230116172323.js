import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { IntlProvider } from 'react-intl';
import reportWebVitals from './reportWebVitals';
import { LOCALES } from './i18n/locales';
import { messages } from './i18n/messages';

const locale = LOCALES.ITALIAN;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={locale}
    >
      <App />
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
