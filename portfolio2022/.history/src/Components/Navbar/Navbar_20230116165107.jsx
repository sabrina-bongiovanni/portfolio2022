import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="menu-container">
        <div className="menu-item">Homepage</div>
        <div className="menu-item">About me</div>
        <div className="menu-item">Skills</div>
        <div className="menu-item">Gallery</div>
      </div>
    </div>
  );
};

export default Navbar;
