import React from 'react';
import { LOCALES } from '../../i18n/locales';
import './Navbar.scss';

const Navbar = () => {
  const languages = [
    { name: 'Italian', code: LOCALES.ITALIAN },
    { name: 'English', code: LOCALES.ENGLISH },
  ];
  return (
    <div className="navbar-container">
      <div className="menu-container">
        <div className="menu-item">Homepage</div>
        <div className="menu-item">About me</div>
        <div className="menu-item">Skills</div>
        <div className="menu-item">Gallery</div>
        <div className="menu-item">
          <select>
            {languages.map(({ name, code }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
