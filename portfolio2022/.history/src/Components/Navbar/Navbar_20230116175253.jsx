import React from 'react';
import { LOCALES } from '../../i18n/locales';
import { defineMessages, useIntl } from 'react-intl';

import './Navbar.scss';

const Navbar = (props) => {
  const intl = useIntl();
  const languages = [
    { name: 'IT', code: LOCALES.ITALIAN },
    { name: 'EN', code: LOCALES.ENGLISH },
  ];
  return (
    <div className="navbar-container">
      <div className="menu-container">
        <div className="menu-item">Homepage</div>
        <div className="menu-item">
          {intl.formatMessage(messages.navbarLinkAboutMe)}
        </div>
        <div className="menu-item">Skills</div>
        <div className="menu-item">Gallery</div>
        <div className="menu-item">
          {languages.map(({ name, code }) => (
            <button
              className="language-container"
              key={code}
              onClick={() => props.handleLanguageChange(code)}
            >
              {name}
            </button>
          ))}
          {/* <select
            onChange={props.handleLanguageChange}
            value={props.currentLocale}
          >
            {languages.map(({ name, code }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select> */}
        </div>
      </div>
    </div>
  );
};

const messages = defineMessages({
  navbarLinkAboutMe: {
    id: 'navbarLinkAboutMe',
    defaultMessage: 'Su di me',
  },
});

export default Navbar;
