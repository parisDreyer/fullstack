import React from 'react';
import { Link } from 'react-router-dom';

// <Link to="/" className="grey-beige">
//   <strong>HOME</strong>
// </Link>

const AsideNav = navLinks => (
  <div className="left-sidebar">
    <div className="left-sidebar-sticky-container">
      <div className="space-li-header">Public</div>
      <ul>
        <li className="space-li">
          <a href="/" className="grey-beige">
            <strong>HOME</strong>
          </a>
        </li>
        <li className="space-li">
          <Link to="/questions" className="grey-beige">
            <div className="logo-container">
              <div className="logo">
                <img src={window.images.logo}
                  alt="site header logo is a drawing of the rings of hell
                  as described in Dante Alighieri's epic poem Inferno" />
              </div>
              stack <strong>inferno</strong>
            </div>
          </Link>
        </li>
        <li className="space-li">
          <Link to="/jobs" className="grey-beige">
            <strong>Jobs</strong>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default AsideNav;
