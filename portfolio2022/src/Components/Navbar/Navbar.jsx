import React, { useState } from 'react';
import { LOCALES } from '../../i18n/locales';
import { defineMessages, useIntl } from 'react-intl';
import { motion } from 'framer-motion';
import cx from 'classnames';

import './Navbar.scss';

const Navbar = (props) => {
  const intl = useIntl();
  const languages = [
    { name: 'IT', code: LOCALES.ITALIAN },
    { name: 'EN', code: LOCALES.ENGLISH },
  ];

  const sections = [
    { title: 'Homepage', token: 'homepage' },
    { title: intl.formatMessage(messages.navbarLinkAboutMe), token: 'about' },
    { title: 'Skills', token: 'skills' },
    { title: 'Gallery', token: 'gallery' },
  ];

  const [activeLink, setActiveLink] = useState(false);
  const [activeLang, setActiveLang] = useState('it-IT');

  const handleClick = (index) => {
    setActiveLink(index);
  };

  console.log(sections);

  return (
    <div className="navbar-container">
      <div className="menu-container">
        {sections.map((sect, index) => {
          return (
            <motion.div
              className="menu-item"
              initial={{ opacity: 0, y: '-20px' }}
              animate={{ opacity: 1, y: '0' }}
              transition={{ duration: 0.7 }}
              key={index}
            >
              <a
                href={`#${sect.token.toLowerCase()}`}
                onClick={() => {
                  handleClick(index);
                }}
                className={cx({
                  'active-link': activeLink === index,
                  'inactive-link': activeLink !== index,
                })}
              >
                {sect.title}
              </a>
            </motion.div>
          );
        })}

        <motion.div
          className="menu-item"
          initial={{ opacity: 0, y: '-20px' }}
          animate={{ opacity: 1, y: '0' }}
          transition={{ duration: 0.7 }}
        >
          {languages.map(({ name, code }) => (
            <a
              href="/"
              className={cx('language-container', {
                'active-link': activeLang === code,
                'inactive-link': activeLang !== code,
              })}
              key={code}
              onClick={(event) => {
                console.log(code);
                event.preventDefault();
                props.handleLanguageChange(code);
                setActiveLang(code);
              }}
            >
              {name}
            </a>
          ))}
        </motion.div>
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
