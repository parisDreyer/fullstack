import React from 'react';
import {Link} from 'react-router-dom';

function col1(){
    return <ul>
        <li className="space-li-header">
            <a className="home-link" href="/" className="grey-white">
              Home
            </a>
        </li>
        <li className="space-li">
          <Link to="/questions" className="grey-white">
            questions
          </Link>
        </li>
      </ul>;
}
function col2() {
    return (
        <ul>
            <li className="space-li-header">
                <a className="home-link" href="/" className="grey-white">
                    Home
            </a>
            </li>
            <li className="space-li">
                <Link to="#" className="grey-white">
                    <strong>cats</strong>
                </Link>
            </li>



            <li className="space-li">
                <Link to="#" className="grey-white">
                    <strong>dogs</strong>
                </Link>
            </li>


            <li className="space-li">
                <Link to="#" className="grey-white">
                    <strong>bananas</strong>
                </Link>
            </li>
        </ul>
    );
} function col3() {
    return (
        <ul>
            <li className="space-li-header">
                <a className="home-link" href="/" className="grey-white">
                    Home
            </a>
            </li>
            <li className="space-li">
                <Link to="#" className="grey-white">
                    <strong>giraffe</strong>
                </Link>
            </li>



            <li className="space-li">
                <Link to="#" className="grey-white">
                    <strong>meaning</strong>
                </Link>
            </li>


            <li className="space-li">
                <Link to="#" className="grey-white">
                    <strong>sense</strong>
                </Link>
            </li>
        </ul>
    );
} function col4() {
    return (
        <ul>
            <li className="space-li-header">
                <a className="home-link" href="/" className="grey-white">
                    Home
            </a>
            </li>
            <li className="space-li">
                <Link to="/questions" className="grey-white">
                    <div className="logo-container">
                        <div className="logo">
                            <img src={window.images.logo} alt="logo" />
                        </div>
                        stack <strong>inferno</strong>
                    </div>
                </Link>
            </li>


            <li className="space-li">
                <Link to="/jobs" className="grey-white">
                    <strong>Jobs</strong>
                </Link>
            </li>
        </ul>
    );
}

const footer = () => {
    return <div className="site-footer-container">
        <div className="site-footer-logo">
          <Link to="/" className="grey-white">
            <div className="logo-container">
              <div className="logo">
                <img src={window.images.logo} alt="logo" />
              </div>
            </div>
          </Link>
        </div>
        <div className="site-footer">
          {col1()}
          {col2()}
          {col3()}
          {col4()}
        </div>
        <div className="site-footer-outside">
          <ul>
            <a href="">Profile</a>
            <li>
              <a href="">LinkedIn</a>
            </li>
            <li>
              <a href="">Github</a>
            </li>
          </ul>
          <div>
            site design / logo © 2018 Stack Exchange Inc; user contributions
            licensed under cc by-sa 3.0 with attribution required. rev
            2018.11.14.32177
          </div>
        </div>
      </div>;
}


export default footer;