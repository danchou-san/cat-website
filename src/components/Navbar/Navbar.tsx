import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className="navigation-bar">
        {location.pathname === '/gallery' ?
        <>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Search Cats</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/favorites">How does it work?</Link></li>
        </>
        :
        <>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Cat Gallery</Link></li>
          <li><Link to="/thispagedoesnotexist">404 Tester</Link></li>
          <li><Link to="/about">About</Link></li>
        </>
      }
      </ul>
    </nav>
  );
};

export default Navigation;