import React from 'react';
import Link from "umi/link";

const Header = (props) => {
  const { data } = props
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item"><b>Home { data }</b></Link>
          <Link to="/posts" className="navbar-item"><b>Posts</b></Link>
          <Link to="/table" className="navbar-item"><b>Table</b></Link>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a className="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
