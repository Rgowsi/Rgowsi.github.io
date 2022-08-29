import LogoSticky from "./images/logo.png";
import { Outlet, Link } from "react-router-dom";
import React, { Component }  from 'react';

function Header() {
  return (
    <div >
      <header className="header_in is_sticky">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <div id="logo">
              <Link className="navbar-brand" to="/">
                <img src={LogoSticky}  alt="" />
              </Link>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" to="/">Restaurants</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/map">Location</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Header;
