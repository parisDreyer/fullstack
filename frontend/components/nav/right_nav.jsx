import React from 'react';
import { Link } from 'react-router-dom';

const RightNav = navLinks => (
  <div className="left-sidebar">
    <div className="left-sidebar-sticky-container">
      <div className="space-li-header">
        <img src={window.images.botticelli}
          alt="an impression of the rings of hell in Dante Alighieri's epic poem Inferno, painted by Botticelli" />
      </div>
      <ul>
        <li className="space-li">
          <img src={window.images.logo}
            alt="site header logo is a drawing of the rings of hell
            as described in Dante Alighieri's epic poem Inferno" />
        </li>
        <li className="space-li">
          <img src={window.images.heroBanner}
            alt="A drawing of Dante Alighieri's Inferno by Artist Gustave Dore" />
        </li>
      </ul>
    </div>
  </div>
);

export default RightNav;
