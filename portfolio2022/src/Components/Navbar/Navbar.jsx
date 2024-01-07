import React, { useState } from 'react';
import { LOCALES } from '../../i18n/locales';
import { defineMessages, useIntl } from 'react-intl';

import './Navbar.scss';

const Navbar = (props) => {
  const intl = useIntl();
  const languages = [
    { name: 'IT', code: LOCALES.ITALIAN },
    { name: 'EN', code: LOCALES.ENGLISH },
  ];

  const sections = [
    'Homepage',
    intl.formatMessage(messages.navbarLinkAboutMe),
    'Skills',
    'Gallery',
  ];

  const [activeLink, setActiveLink] = useState(false);
  return (
    <div className="navbar-container">
      <div className="menu-container">
        {sections.map((sect) => {
          return (
            <div className="menu-item">
              <a
                href={`#${sect.toLowerCase()}`}
                onClick={() => {
                  setActiveLink(true);
                }}
                className={activeLink ? 'active-link' : ''}
              >
                {sect}
              </a>
            </div>
          );
        })}

        <div className="menu-item">
          {languages.map(({ name, code }) => (
            <a
              href="/"
              className="language-container"
              key={code}
              onClick={(event) => {
                event.preventDefault();
                props.handleLanguageChange(code);
              }}
            >
              {name}
            </a>
          ))}
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
