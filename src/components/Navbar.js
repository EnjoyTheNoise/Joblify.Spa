import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Joblify
          </Link>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
