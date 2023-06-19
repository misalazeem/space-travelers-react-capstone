import '../styles/navbar.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img className="logo-img" src="/resources/planet.png" alt="" />
          <h2>Space Travelers Hub</h2>
        </div>
        <div className="navlinks">
          <ul>
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/" className="links-desktop">
                Rockets
              </Link>
            </li>

            <li className={location.pathname === '/missions' ? 'active' : ''}>
              <Link to="/missions" className="links-desktop">
                Missions
              </Link>
            </li>

            <li className={location.pathname === '/my-profile' ? 'active' : ''}>
              <Link to="/my-profile" className="links-desktop">
                My Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
