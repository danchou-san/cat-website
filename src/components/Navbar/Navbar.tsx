import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navigation = () => {
  const location = useLocation();
  let navbarType;

  if (location.pathname === '/gallery' ||
  location.pathname === '/favorites' ||
  location.pathname === '/searchcat') {
    navbarType =
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/gallery">Random Cat Search</Link></li>
      <li><Link to="/searchcat">Search Cat</Link></li>
      <li><Link to="/favorites">Favorites</Link></li>
      {/* <li><Link to="/favorites">How does it work?</Link></li> */}
    </>
  } else if (location.pathname === '/notfound') {
    navbarType =
    <li><Link to="/">Home</Link></li>
  } else {
    navbarType =
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/gallery">Cat Gallery</Link></li>
      <li><Link to="/notfound">404 Tester</Link></li>
      <li><Link to="/about">About</Link></li>
    </>
  }

  return (
    <nav>
      <ul className="navigation-bar">
        {navbarType}
      </ul>
    </nav>
  );
};

export default Navigation;