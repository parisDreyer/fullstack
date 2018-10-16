import React from 'react';
import { Link } from 'react-router-dom';

import GreetingContainer from '../greeting/greeting_container';




const HeaderContainer = () => (
      <header className="nav-bar">
        <ul className="header-nav">
          <li className="header-link">
            <Link to="/">
              <div className="logo-container">
                <div className="logo">
                  <img src={window.images.logo}
                    alt="site header logo is a drawing of the rings of hell
                    as described in Dante Alighieri's epic poem Inferno" />
                </div>stack <strong>inferno</strong>
              </div>
            </Link>
            <label className="nav-search-bar-container">
              <input className="nav-search-bar" type="text" />
              <input type="submit" onSubmit={() => {}} className="search-icon" value=""/>
              <img src={window.images.searchIcon} className="search-icon" alt="Search" />
            </label>
          </li>
          <GreetingContainer />
        </ul>
      </header>
);

export default HeaderContainer;
