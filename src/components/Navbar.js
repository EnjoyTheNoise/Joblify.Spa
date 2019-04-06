import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
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

        </a>
        <button
          className="navbar-toggler bg-dark"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline ml-auto my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "400px" }}
            />
            <fieldset class="form-group  my-2 my-lg-0">
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="optionsRadios"
                    id="optionsRadios1"
                    value="option1"
                  />
                  Pracodawcy
                </label>
              </div>
              <div class="form-check disabled">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="optionsRadios"
                    id="optionsRadios2"
                    value="option2"
                    disabled=""
                  />
                  Pracobiorcy
                </label>
              </div>
            </fieldset>
            <button class="btn btn-secondary mx-3 my-2 my-sm-2" type="submit">
              Search
            </button>
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                user123
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Ulubione
                </a>
                <a className="dropdown-item" href="#">
                  Moje Oferty
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Edytuj Profil
                </a>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>