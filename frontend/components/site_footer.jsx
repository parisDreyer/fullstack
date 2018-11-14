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
        <div className="site-footer">
          <Link to="/" className="grey-white">
            <div className="logo-container">
              <div className="logo">
                <img src={window.images.logo} alt="logo" />
              </div>
            </div>
          </Link>

          {col1()}
          {col2()}
          {col3()}
          {col4()}
        </div>
      </div>;
}


export default footer;