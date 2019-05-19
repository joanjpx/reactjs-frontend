import React from 'react';
//import './App.css';

const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="logo" width="28" height="28"/>
        </a>

        <a href="/About" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href="/" className="navbar-item">
            Home
          </a>

          <a href="/About" className="navbar-item">
            Documentation
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a href="/About" className="navbar-link">
              More
            </a>

            <div className="navbar-dropdown">
              <a href="/About" className="navbar-item">
                About
              </a>
              <a href="/Jobs" className="navbar-item">
                Jobs
              </a>
              <hr className="navbar-divider"/>
              <a href="/Issue" className="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a href="/About" className="button is-primary">
                <strong> <i className="fas fa-user"></i> Sign up</strong>
              </a>
              <a href="/About" className="button is-light">
              <i className="fas fa-unlock"></i> &nbsp;Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
