import '../styles/navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img className="logo-img" src="/resources/planet.png" alt="" />
          <h2>Space Travelers Hub</h2>
        </div>
        <div className="navlinks">
          <ul>
            <li><Link to="/rockets" className="links-desktop">Rockets</Link></li>
          </ul>
          <ul>
            <li><Link to="/missions" className="links-desktop">Missions</Link></li>
          </ul>
          <ul>
            <li><Link to="/my-profile" className="links-desktop">My Profile</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
